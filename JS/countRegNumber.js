// declare and initialise a function named countRegNumber
function countRegNumber(regNumbers){
	if(regNumbers!=undefined){
		var myObject = regNumbers.split(',');
  		var objectLength = myObject.length;
	}
	else{
		objectLength = 0;
	}
	
  	return objectLength;
}