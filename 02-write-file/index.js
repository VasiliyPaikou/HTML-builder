const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'text.txt');
const readline = require('readline');
const rl = readline.createInterface({ 
	input:process.stdin,
	output:process.stdout });
	fs.open(filePath,`w`, (err) => {
		if(err) throw err;
  });
const rss = (t) => {

	if (t ==='exit') {
		process.exit()
	}
	fs.appendFile(filePath,`\n${t}`, err => {
		if (err) throw err
	})	
	rl.question('', rss);
};
rl.question('Здраствуйте!Введите новое сообщение!\n', rss);
process.on('SIGINT', () => console.log('До свидания! Приятно было иметь дело с вами!'));
process.on('exit', () => console.log('До свидания! Приятно было иметь дело с вами!'))