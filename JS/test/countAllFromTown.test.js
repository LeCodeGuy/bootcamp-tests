describe('Test my countAllFromTown function' , function(){
    it('Should return 3 when called with "CL 124,CY 567,CL 345, CJ 456,CL 341","CL"' , function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });

    it('Should return 1 when called with "CJ 124,CY 567,CL 345, CF 456, CL 341","CF"' , function(){
        assert.equal(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });

    it('Should return 0 when called with "5566 L","CA"' , function(){
        assert.equal(0,countAllFromTown('5566 L','CA'));
    });
});