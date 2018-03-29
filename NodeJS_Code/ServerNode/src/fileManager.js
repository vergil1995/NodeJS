const fs = require('fs');// file system
module.exports = {
    createNewFile: (fileName) => {
        //fd = file descriptor sync= dong bo mo file xong moi lam viec tiep
        const fd = fs.openSync(fileName, 'w');
    },
    // Luu Obj JSON to file
    saveJsonObjectToFile: (obj, fileName) => {
        // Bien Obj thanh String
        const jsonString = JSON.stringify(obj);
        // ghi vao file
        fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(`Saved to file ${fileName}`);
        });
    },
    readJsonObjectFromFile: (fileName) => {
        //Asynchronously reads the entire contents of a file
        // qua trinh read tach thanh thread rieng
        
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            // luu data thanh JSON obj
            let jsonObject = JSON.parse(data);
            // All Servant
            //console.log(`jsonObject.servant = ${JSON.stringify(jsonObject.servant)}`);
            console.log(`jsonObject.servant with index 1 = ${JSON.stringify(jsonObject.servant[1])}`);
            console.log(`jsonObject.servant index 1 with key = ${JSON.stringify(jsonObject.servant[1].name)}`);
            console.log(`jsonObject.name = ${JSON.stringify(jsonObject.name)}`);
            console.log(`jsonObject.class = ${JSON.stringify(jsonObject.game)}`);
            console.log(`jsonObject.image = ${JSON.stringify(jsonObject.company)}`);
            // jsonObject.servant with index 1 = {"key":"2","name":"Semiramis","class":"Assassin","image":"http://i.imgur.com/jtaj7bv.png"}
            // jsonObject.servant index 1 with key = "Semiramis"
            // jsonObject.name = "Vergil"
            // jsonObject.class = "Fate Grand Order"
            // jsonObject.image = "Type Moon"
        });
    }
};