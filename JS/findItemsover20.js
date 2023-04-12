function findItemsOver20(itemList){
	var result = []
  	
    for(let item in itemList){
      	if(itemList[item].qty > 20){
    		result.push(itemList[item]);
        }
    }
  return result;
}