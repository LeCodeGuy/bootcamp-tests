// declare and initialise a function expression named regCheck
function regCheck(regNum,region){
    var result = false;
    
    if(regNum != undefined || region != undefined){
      result = regNum.endsWith(region);
    }
    return result;
}