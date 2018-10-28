module.exports =  function sumOfOther(arr){
	if(arr.length < 2){
		return arr;
	}
	let sum = 0;
	for(let i = 0;i < arr.length;i++){
		sum += arr[i];
	}
	let result = [];
	for(let i = 0;i < arr.length;i++){
		result.push(sum - arr[i]);
	}
	return result;
}