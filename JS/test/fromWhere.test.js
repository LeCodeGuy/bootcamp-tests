describe('Test my fromWhere function' , function(){
    it('Should return Bellville when called with "CY 567489"' , function(){
        assert.equal('Bellville', fromWhere('CY 567489'));
    });

    it('Should return Paarl when called with "CJ 343502"' , function(){
        assert.equal('Paarl', fromWhere('CJ 343502'));
    });

    it('Should return Cape Town when called with "CA 987504"' , function(){
        assert.equal('Cape Town', fromWhere('CA 987504'));
    });

    it('Should return Some other place! when called with "ZN 568593"' , function(){
        assert.equal('Some other place!', fromWhere('ZN 568593'));
    });
});