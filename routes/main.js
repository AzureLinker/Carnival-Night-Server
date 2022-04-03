// *routes/main
const fs = require("fs");
module.exports = function(app){

    function isFolder(path){
        return fs.lstatSync(path).isDirectory() && fs.existsSync(path);
    }

    app.get('/', (req, res) =>{
        const base = './files/';
        let path = '';
        if ('path' in req.query){
            path = req.query.path;
        }
        if (isFolder(base + path)){ // Если это папка, то вычитать
            let files = fs.readdirSync(base + path).map(item => {
                const isDir = fs.lstatSync(base+path+'/'+item).isDirectory(); //new comment
                return{
                    name: item,
                    dir: isDir,
                };
            });
            res.json({
                path: path,
                result: true,
                files: files
            });
        }
    });
}