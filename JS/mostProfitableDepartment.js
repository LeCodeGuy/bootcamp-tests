function mostProfitableDepartment(salesData){
	var highestSales = 0;
  	var department = "";
  
  	for(let item in salesData){
    	if(highestSales <= salesData[item].sales){
          	highestSales = salesData[item].sales;
          	department = salesData[item].department;
        }
    }
  
  	return department
}