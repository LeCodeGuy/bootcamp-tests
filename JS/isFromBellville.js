function isFromBellville(registrationNumber){
  var result = "";
  
  if(registrationNumber != undefined){
      result = registrationNumber.startsWith("CY");
  }
  
  return result;
}