// declare and initialise a function expression named regCheck
function regCheck(regNum,region){
    var result = "";
    
    if(regNum != undefined || region != undefined){
      result = regNum.endsWith(region);
    }
    else if(regNum == undefined || region == undefined){
      result = false;
    }
    return result;
}