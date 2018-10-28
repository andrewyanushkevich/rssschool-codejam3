const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require("./sumOfOther");

function sum(a,b){
		return a + b;
	}
	describe("#sumOfOther", function(){
		it("1", function(){
			const res = sumOfOther([1,2,3,4])
			assert.deepEqual(res,[9,8,7,6]);
		})
		it("2", function(){
			const res = sumOfOther([10,5,-7,6])
			assert.deepEqual(res,[4,9,21,8]);
		})
		it("3", function(){
			const res = sumOfOther([-1,-2,-3])
			assert.deepEqual(res,[-5,-4,-3]);
		})
		it("4", function(){
			const res = sumOfOther([])
			assert.deepEqual(res,[]);
		})
	})