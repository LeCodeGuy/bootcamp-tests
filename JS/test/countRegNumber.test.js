describe('Test my countRegNumber function' , function(){
    it('Should return 1 when called with "CA 182736"' , function(){
        assert.equal(1,countRegNumber('CA 182736'));
    });

    it('Should return 2 when called with "CA 42665, AA 12 RT GP"' , function(){
        assert.equal(2,countRegNumber('CA 42665, AA 12 RT GP'));
    });

    it('Should return 3 when called with "CA 182736,CY 523519,CJ 812328"' , function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('Should return 0 when called with no parameters passed' , function(){
        assert.equal(0,countRegNumber());
    });
    
});