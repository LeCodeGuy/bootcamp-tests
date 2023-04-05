function totalPhoneBill(actions){
	var countCalls = 0;
  	var countSMS = 0;
  	var allActions = actions.split(',');
  	var totalBill = 0;
  
  	for(let action = 0; action < allActions.length; action++){
    	let groupedActions = allActions[action].trim();
      
    	if(groupedActions == 'call'){
        	countCalls++;   
        }
      	else if( groupedActions == 'sms'){
        	countSMS++;
        }
    }
  	totalBill = (countCalls*2.75)+(countSMS*0.65);
  	
    return "R" + totalBill.toFixed(2);
}