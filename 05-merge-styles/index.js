const fs = require ('fs')
const path = require ('path')
const pathBundle = path.join(__dirname,'project-dist','bundle.css')
const stylesPath = path.join(__dirname,'styles')
fs.open(pathBundle,'w',(err,x)=>{
if (err) throw err
fs.readdir(stylesPath, (err, files) => {
  if (err) throw err;
  files.forEach(el => {
    if (path.extname(el) === '.css') {
fs.readFile(path.join(stylesPath,`${el}`), (err, data) => {
  if(err) throw err;
let content = data
fs.appendFile(pathBundle, `\n\n${content}`, (err) => {
  if (err) console.log(err);
})
});
    }
});
})
})

