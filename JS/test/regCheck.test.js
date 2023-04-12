describe('Test my regCheck function' , function(){
    it('Should return true when called with "DC 55 YU GP", "GP"' , function(){
        assert.equal(true,regCheck('DC 55 YU GP', 'GP'));
    });

    it('Should return false when called with "DC 55 YU GP", "EC"' , function(){
        assert.equal(false,regCheck('DC 55 YU GP', 'EC'));
    });

    it('Should return false when called with only "DC 55 YU GP" passed' , function(){
        assert.equal(false,regCheck('DC 55 YU GP'));
    });

    it('Should return false when called with only "GP" passed' , function(){
        assert.equal(false,regCheck('GP'));
    });

    it('Should return "" when called no parameters are passed' , function(){
        assert.equal("",regCheck());
    });
});