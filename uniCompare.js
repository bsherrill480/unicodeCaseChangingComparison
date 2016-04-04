var fs = require('fs');
function getPhp(jsUni) {
	fs.readFile('./phpUniString', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		compare(jsUni, data);
	});
}

function compare(jsUni, phpUni) {
	var i;
	var jsChar, phpChar;
	var counter = 0;
	var jsUniArr = jsUni.split(" ");
	var phpUniArr = phpUni.split(" ");
	if(jsUniArr.length != phpUniArr.length) {
		console.log("different length", jsUniArr.length, phpUniArr.length);

	} else {
		console.log("we good");
		for(i=0; i<jsUni.length; i++) {
			jsChar = jsUniArr[i];
			phpChar = phpUniArr[i];
			if (jsChar !== phpChar && phpChar !== "???") {
				console.log(jsChar, phpChar, i);
				counter++;
			}
		}
		console.log("differences: ", counter);
	}
}

fs.readFile('./jsUniString', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	getPhp(data);
});
