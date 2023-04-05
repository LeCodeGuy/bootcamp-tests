function countAllPaarl(regNumbers){
	var regNums = regNumbers.split(',');
  	var count = 0;
  
  	for(let regNum = 0; regNum < regNums.length; regNum++){
    	let filteredRegNums = regNums[regNum].trim();
      
    	if(filteredRegNums.startsWith('CJ')){
        	count++;   
        }
    }
    return count;
}