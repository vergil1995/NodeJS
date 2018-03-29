var router = global.router;
let Category = require('../models/CategoryModel');

router.post('/insert_new_category', (request, response, next) => {
    const criteria = {
        name: new RegExp('^' + request.body.name.trim() + '$', "i")
    };
    // KT xem da ton tai chua, neu ton tai thi ko cho insert
    Category.find(criteria).limit(1).exec((err, categories) => {
        if (err) {

        } else {
            //If it exist, donot allow to insert !
            if (categories.length > 0) {
                response.json({
                    result: "failed",
                    data: [],
                    messege: "Cannot insert because the name is exist"
                });

            } else {
                //Can insert
                const newCategory = new Category({
                    name: request.body.name,
                    description: request.body.description
                });
                newCategory.save((err, addedCategory) => {
                    if (err) {
                        response.json({
                            result: "failed",
                            data: {},
                            messege: `Error is : ${err}`
                        });
                    } else {
                        response.json({
                            result: "ok",
                            data: addedCategory,
                            messege: "Insert new category successfully"
                        });
                    }
                });
            }
        }
    });
});
module.exports = router;