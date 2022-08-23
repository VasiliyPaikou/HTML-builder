const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname,'files');
const newPath = path.join(__dirname,'files-copy',' bundle.css');
fs.readdir(filePath, (err, files) => {
  if (err) console.log(err);
	fs.mkdir(newPath,{ recursive: true }, (err, files) => {
		if (err) console.log(err);
	})
	files.forEach(el => {
		fs.open(path.join(__dirname,'files-copy',`${el}`),'w', err => {
			if (err) throw err
			fs.copyFile( path.join(filePath,`${el}`), path.join(newPath,`${el}`), (err, files) => {
  if (err) console.log(err);
})
		})	
});
})
