describe('Test my transportFee function' , function(){
    it('Should return R20 when called with "morning"' , function(){
        assert.equal('R20',transportFee('morning'));
    });

    it('Should return R10 when called with "afternoon"' , function(){
        assert.equal('R10',transportFee('afternoon'));
    });

    it('Should return free when called with "nightshift"' , function(){
        assert.equal('free',transportFee('nightshift'));
    });
});