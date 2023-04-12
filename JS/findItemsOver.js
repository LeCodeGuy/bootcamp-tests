function findItemsOver(itemList,qty){
	var result = []
  	
    for(let item in itemList){
      	if(itemList[item].qty > qty){
    		result.push(itemList[item]);
        }
    }
  return result;
}