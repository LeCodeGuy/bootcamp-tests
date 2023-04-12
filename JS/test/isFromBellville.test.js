describe('Test my isFromBellville function' , function(){
    it('Should return false when called with "CF 123"' , function(){
        assert.equal(false,isFromBellville('CF 123'));
    });

    it('Should return true when called with "CY 123"' , function(){
        assert.equal(true,isFromBellville('CY 123'));
    });

    it('Should return false when called with no parameters passed' , function(){
        assert.equal(false,isFromBellville());
    });
});