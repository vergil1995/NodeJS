
var router = global.router;
let Servant = require('../models/ServanrData');
var mongoose = require('mongoose');
let fs=require('fs');
// client gui /list_all_servant thi ham nay duoc thuc thi khi server nhan duoc request va tra ve noi dung
router.get('/list_all_servant', (request, response, next) => {
    //response.end("GET requested => list_all_servant");
    //
    Servant.find({}).limit(100).sort({name: 1}).select({
        name: 1,
        class: 1,
        created_date: 1,
        status: 1,
        imageUrl: 1
        // xu ly xong requets chui vso
    }).exec((err, servants) => {
        if (err) {
            // hien du lieu JSON
            response.json({
                result: "failed",
                data: [],
                messege: `Error is : ${err}`
            });
        } else {
            response.json({
                result: "ok",
                data: servants,
                count: servants.length,
                messege: "Query list of servants successfully"
            });
        }
    });
  });

//Example: http://localhost:3000/get_servant_with_id?servant_id=5a940f6cd7899d2e94516215
router.get('/get_servant_with_id', (request, response, next) => {
    // Convert String sang Object ID
    Servant.findById(require('mongoose').Types.ObjectId(request.query.servant_id),
        (err, servant) => {
            if (err) {
                response.json({
                    result: "failed",
                    data: {},
                    messege: `Error is : ${err}`
                });
            } else {
                response.json({
                    result: "ok",
                    data: servant,
                    messege: "Query Servant by Id successfully"
                });
            }
        });
});
// KT dieu kien
//Example: http://localhost:3001/list_servants_with_criteria?name=salad&limit=10
router.get('/list_servants_with_criteria', (request, response, next) => {
    // Kiem tra dau vao
    if (!request.query.name) {
        response.json({
            result: "failed",
            data: [],
            messege: "Input parameters is wrong!. 'name' must be not NULL"
        });
    }
    let criteria = {
        //name: new RegExp(request.query.name, "i"),// <=> where name like '%abc%' in sql
        //Example: http://localhost:3001/list_servants_with_criteria?name=japanese%20salad
        name: new RegExp('^' + request.query.name + '$', "i"),
        //"i" = case-insensitive ko phan biet hoa thuong va chi can chua ky tu la dc
        // dau ^ la bat dau, $ la ket thuc => tim dung tu can nhap vao voi chu dau va cuoi
    };
    // nhap limit > 0 thi lay con ko thi mac dinh la 100
    const limit = parseInt(request.query.limit) > 0 ? parseInt(request.query.limit) : 100;
    Servant.find(criteria).limit(limit).sort({name: 1}).select({
        name: 1,
        class: 1,
        created_date: 1,
        status: 1
    }).exec((err, servants) => {
        if (err) {
            response.json({
                result: "failed",
                data: [],
                messege: `Error is : ${err}`
            });
        } else {
            response.json({
                result: "ok",
                data: servants,
                count: servants.length,
                messege: "Query list of servants successfully"
            });
        }
    });
});
  // them ban ghi vao csdl
  router.post('/insert_new_servant', (request, response, next) => {
      const newServant = new Servant({
          // khi client gui request len lay tu body cua request name va des...
          name: request.body.name,
          class: request.body.class,
          imageUrl: request.body.imageUrl
          
      });
      // save de them vao csdl
      newServant.save((err) => {
          //xem insert thanh cong chua
          if (err) {
              response.json({
                  result: "failed",
                  data: {},
                  messege: `Error is : ${err}`
              });
          } else {
              response.json({
                  result: "ok",
                  data: {
                      name: request.body.name,
                      class: request.body.class,
                      imageUrl: request.body.imageUrl,
                      messege: "Insert new servant successfully"
                  }
              });
          }
      });
  });
  
  // update ban ghi san co trong csdl
  router.put('/update_a_servant', (request, response, next) => {
    let conditions = {};//search record with "conditions" to update
    // tim ban ghi co id = foodid dau vao de update
    if (mongoose.Types.ObjectId.isValid(request.body.servant_id) == true) {
        conditions._id = mongoose.Types.ObjectId(request.body.servant_id);
    } else {
        response.json({
            result: "failed",
            data: {},
            messege: "You must enter servant_id to update"
        });
    }
    // gia tri moi can update
    let newValues = {};
    // ten moi dai hon 2 ky tu
    if (request.body.name && request.body.name.length > 2) {
        newValues.name = request.body.name;
    }
    if (request.body.class && request.body.class.length > 2) {
        newValues.class = request.body.class;
    }
    
    //Update image
    if (request.body.image_name && request.body.image_name.length > 0) {
        //Ex: http://localhost:3001/open_image?image_name=upload_e2312e497df8c230b4896fa3b43bb543.jpg
        const serverName = require("os").hostname();
        const serverPort = require("../app").settings.port;
        newValues.imageUrl = `${serverName}:${serverPort}/open_image?image_name=${request.body.image_name}`
    }
    // new : true - truong updatedServant show ra la cai moi nhat
    const options = {
        new: true, // return the modified document rather than the original.
        multi: true // update nhieu
    }
    if (mongoose.Types.ObjectId.isValid(request.body.category_id) == true) {
        newValues.categoryId = mongoose.Types.ObjectId(request.body.category_id);
    }
    Servant.findOneAndUpdate(conditions, {$set: newValues}, options, (err, updatedServant) => {
        if (err) {
            response.json({
                result: "failed",
                data: {},
                messege: `Cannot update existing Servant.Error is : ${err}`
            });
        } else {
            response.json({
                result: "ok",
                data: updatedServant,
                messege: "Update Servant successfully"
            });
        }
    });
  });
  // delete ban ghi trong csdl
  router.delete('/delete_a_servant', (request, response, next) => {
    response.end("DELETE requested => delete_a_servant");
  });

  router.post('/upload_images', (request, response, next) => {
    let formidable = require('formidable');
    // parse a file upload
    var form = new formidable.IncomingForm();
    // thu muc uploads
    form.uploadDir = "./uploads";
    // ten phai giu nguyen ext
    form.keepExtensions = true;
   // max là 10 MB
    form.maxFieldsSize = 10 * 1024 * 1024; //10 MB
    // cho up nhieu anh
    form.multiples = true;
    // mang chua file upload len
    form.parse(request, (err, fields, files) => {
        if (err) {
            response.json({
                result: "failed",
                data: {},
                messege: `Cannot upload images.Error is : ${err}`
            });
        }
        // lay ra mang cac file-la obj co key: empty va value
        var arrayOfFiles = [];
        if(files[""] instanceof Array) {
            arrayOfFiles = files[""];
        } else {
            arrayOfFiles.push(files[""]);
        }
        // check mang co phan tu ko
        if (arrayOfFiles.length > 0) {
            var fileNames = [];
            //tao mang chua ten file, duyet mang file va day dan path vao mang
            arrayOfFiles.forEach((eachFile)=> {
                 //fileNames.push(eachFile.path)
                fileNames.push(eachFile.path.split('\\')[1]);
            });
            response.json({
                result: "ok",
                data: fileNames,
                numberOfImages: fileNames.length,
                messege: "Upload images successfully"
            });
        } else {
            response.json({
                result: "failed",
                data: {},
                numberOfImages: 0,
                messege: "No images to upload !"
            });
        }
    });
});
// lay duong link file de xem
//http://localhost:3000/open_image?image_name=upload_8bae68b2c975e6d3a482f0a03157dd92.jpg
router.get('/open_image', (request, response, next) => {
    let imageName = "uploads/" + request.query.image_name;
    // doc noi dung file roi den ham call back, imageData la du lieu sau khi dc doc
    fs.readFile(imageName, (err, imageData) => {
        if (err) {
            response.json({
                result: "failed",
                messege: `Cannot read image.Error is : ${err}`
            });
            return;
        }
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.end(imageData); // Send the file data to the browser.
    });
});
  module.exports = router;