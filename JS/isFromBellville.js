function isFromBellville(registrationNumber){
  var result = false;
  
  if(registrationNumber != undefined){
      result = registrationNumber.startsWith("CY");
  }
  
  return result;
}