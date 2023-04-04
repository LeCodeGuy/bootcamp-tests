var isFromBellville = function(registrationNumber){
    var result = registrationNumber.startsWith("CY");
      return result;
}

assert.equal(isFromBellville('CF 123'), false);

isFromBellville('CY 123');
isFromBellville('CF 123');