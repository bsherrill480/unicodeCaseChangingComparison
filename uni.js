var uni;
var uniString = "";
var fs = require('fs');
highNumber = 65536; //This could go very high
for(i=0;i<highNumber;i++){
	uni = String.fromCharCode(i).toLowerCase();
	if(i === 0) {
		uniString += uni;
	} else {
	uniString += " "+ uni;
	}
}
fs.writeFile("./jsUniString", uniString, function(err) {
	if(err){
		return console.log(err);
	}
	console.log("file was saved");
});
