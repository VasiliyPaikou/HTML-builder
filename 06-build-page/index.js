const path = require('path')
const fs = require('fs');
const { log } = require('console');
const stylesPath = path.join(__dirname, 'styles');
const newPath = path.join(__dirname, 'project-dist');
const pathBundle = path.join(__dirname, 'project-dist', 'style.css');
fs.mkdir(newPath, { recursive: true }, (err, files) => {
  if (err) console.log(err);
})
fs.open(pathBundle, 'w', (err, x) => {
  if (err) throw err
  fs.readdir(stylesPath, (err, files) => {
    if (err) throw err;
    files.forEach(el => {
      if (path.extname(el) === '.css') {
        fs.readFile(path.join(stylesPath, `${el}`), (err, data) => {
          if (err) throw err;
          let content = data
          fs.appendFile(pathBundle, `\n\n${content}`, (err) => {
            if (err) console.log(err);
          })
        });
      }
    });
  })
})
const assetsPath = path.join(__dirname, 'assets');
fs.readdir(assetsPath, (err, files) => {
  if (err) console.log(err);
  fs.mkdir(path.join(newPath, 'assets'), { recursive: true }, (err, files) => {
    if (err) console.log(err);
  })
  files.forEach(file => {
    fs.mkdir(path.join(newPath, 'assets', file), { recursive: true }, (err, el) => {
      if (err) console.log(err);
      fs.readdir(path.join(__dirname, 'assets', file), (err, elements) => {
        if (err) console.log(err);
        elements.forEach(element => {
          fs.open(path.join(newPath, 'assets', file, element), 'w', err => {
            if (err) throw err
            fs.copyFile(path.join(__dirname, 'assets', file, element), path.join(newPath, 'assets', file, element), (err, files) => {
              if (err) console.log(err);
            })
          })
        })
      })
    })
  })
})




// fs.readFile(path.join(__dirname,'components','articles.html'), 'utf-8',(err,file)=>{
// 	if (err) throw err
// let articlesContent = file
// let a = fs.createWriteStream(path.join(__dirname,'template.html'),{
// 	flags:'r+'
// })
// a.write(articlesContent )
// } )
fs.readFile(path.join(__dirname, 'template.html'), 'utf-8', (err, file) => {
  if (err) throw err
  let tags = file.match(/{{\w*}}/g)
  let d = file.split(/{{\w*}}/)
  // let d = file.replace(/{{\w*}}/g,'!!!!!').split('!!!!!')

  console.log(d[0]);
  console.log('--------------');
  console.log(d[1]);
  console.log('--------------');
  console.log(d[2]);
  console.log('--------------');
  console.log(d[3]);


  let components = tags.forEach(tag => {
    let tagName = tag.slice(2, -2)
    let componentPath = path.join(__dirname, 'components', `${tagName}.html`)
    fs.readFile(componentPath, 'utf-8', (err, data) => {
      if (err) throw err
      // console.log(data);
      // fs.writeFile(path.join(__dirname, 'template.html'), file.replace(tag, data), err => {
      //   if (err) throw err
      // })
    })
  })
}
)
// const responsive = fs.createReadStream(path.join(__dirname,'template.html'));
// responsive.on('data', (content)=>{
// 	const data = Buffer.from(content)
// 	console.log(data.toString());
// })

