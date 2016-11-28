import ContactSchema from './ContactSchema';
module.exports = function(){
    console.log('ContactSchema TESTERRRR');
    console.log(ContactSchema);
    let cont = new ContactSchema();
    //carrega todos os modelos
    // const fs = require('fs');
    // console.log(mongolib);
    // fs.readdir(__dirname+'/migrations/mongodb/', (err, files) => {
    // files.forEach(file => {
    //     let migration = lib.file.split('.j')[0];
    //     console.log(new migration());
    //     let instance = new migration();
    // });
    // });
}