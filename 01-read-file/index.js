const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'text.txt');
const responsive = fs.createReadStream(filePath);
responsive.on('data', (content)=>{
	const data = Buffer.from(content)
	console.log(data.toString());
})
