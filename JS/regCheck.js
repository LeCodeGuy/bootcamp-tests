// declare and initialise a function expression named regCheck
var regCheck = function(regNum,region){
    var result = regNum.endsWith(region);
      return result;
}
// the below should all return true
var isGP = regCheck('RG 45 HN GP', 'GP');
var isGP = regCheck('LKG 679 EC', 'EC');
var isGP = regCheck('GHT 456 MP', 'MP');
var isGP = regCheck('FGT 491 L', 'L');

// the below should all return false
var isGP = regCheck('ND 123-456', 'ND');
var isGP = regCheck('CY 678-453', 'CY');
var isGP = regCheck('CA 1234-123', 'CA');
