describe('Test my regCheck function' , function(){
    it('Should return true when called with "DC 55 YU GP", "GP"' , function(){
        assert.equal(true,regCheck('DC 55 YU GP', 'GP'));
    });

    it('Should return false when called with "DC 55 YU GP", "EC"' , function(){
        assert.equal(false,regCheck('DC 55 YU GP', 'EC'));
    });

    it('Should return true when called with "5566 L", "L"' , function(){
        assert.equal(true,regCheck('5566 L', 'L'));
    });

    it('Should return false when called with "5566 L", "M"' , function(){
        assert.equal(false,regCheck('5566 L', 'M'));
    });

    it('Should return true when called with "ERT 123 EC", "EC"' , function(){
        assert.equal(true,regCheck('ERT 123 EC', 'EC'));
    });

    it('Should return false when called with "ERT 123 EC", "GP"' , function(){
        assert.equal(false,regCheck('ERT 123 EC', 'GP'));
    });

    it('Should return true when called with "FGT 123 MP", "MP"' , function(){
        assert.equal(true,regCheck('FGT 123 MP', 'MP'));
    });

    it('Should return false when called with "FGT 123 MM", "MP"' , function(){
        assert.equal(false,regCheck('FGT 123 MM', 'MP'));
    });
});