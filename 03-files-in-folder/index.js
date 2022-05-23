
const path = require('path');
const fs = require('fs');
fs.readdir('./03-files-in-folder/secret-folder',{withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
		 if (file.isFile()) { 
			let c = path.parse(`./03-files-in-folder/secret-folder/${file.name}`);
			fs.stat(`./03-files-in-folder/secret-folder/${file.name}`,function(err,stats){
				if (err)
				console.log(err);
			 else {
		  console.log(`${c.name} - ${c.ext.replace(/^./,'')} - ${stats.size / 1000}kb`);
			 }
		  })
		 }
    })
  }
})
