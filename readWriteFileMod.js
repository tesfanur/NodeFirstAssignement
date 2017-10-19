//readWrite Module
let fs = require('fs');
var content;

fs.writeFile('./createdFile.txt', content,
	function cb(err) {
		if(err) {
		return console.log(err);
		}
		console.log('File Created successfully!');
	});
	
fs.exports=fs;



