var Calculator = require('../app/Calculator');
var chai = require('chai');
var expect = chai.expect;

describe('Calculator', function(){
	it("should return empty string", function(){
		var calc = new Calculator();
		var result = calc.add("");
		expect(result).to.equal(0);
	});

	it("should return number", function(){
		var calc = new Calculator();
		var result = calc.add("1");
		expect(result).to.equal(1);
	});

	it("should sum up two numbers", function(){
		var calc = new Calculator();
		var result = calc.add("1,2");
		expect(result).to.equal(3);

	});

	it("should sum up three numbers", function(){
		var calc = new Calculator();
		var result = calc.add("1,2,3");
		expect(result).to.equal(6);

	});

	it("should throw error when more than three", function(){
		var calc = new Calculator();
		expect(function(){ calc.add("1,2,3,4,5"); }).to.throw("ga boleh");
	});

	it("should ignore new lines", function(){
		var calc = new Calculator();
		var result = calc.add("1,\n2,\n3");
		expect(result).to.equal(6);
	});

	it("should accept other delimiters", function(){
		var calc = new Calculator();
		var result = calc.add("1;2*3");
		expect(result).to.equal(6);

	});

	it("should not accept negative numbers", function(){
		var calc = new Calculator();
		expect(function(){ calc.add("-1,-2,-3"); }).to.throw("ga boleh negatif cuy");
	});

	it("should accept more than one delimiters", function(){
		var calc = new Calculator();
		var result = calc.add("1;,*2;,*3");
		expect(result).to.equal(6);
	});
});
