var Calculator = function(){
	this.add = function(string){
		var result = 0;
		var arr = string.replace(/\n|\;|\*/g, ",").split(",");
		var arr_clean = [];
		arr.forEach(function(el){
			if (parseFloat(el) < 0) throw "ga boleh negatif cuy";
			result += (el == "") ? 0 : parseFloat(el);
			if (el != "") arr_clean.push(el);
		});
		if (arr_clean.length > 3) throw "ga boleh";
		return result;
	}
}

module.exports = Calculator;
