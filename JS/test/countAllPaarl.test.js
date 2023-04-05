describe('Test my countAllPaarl function' , function(){
    it('Should return 3 when called with "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"' , function(){
        assert.equal(3,countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('Should return 2 when called with "CJ 345 123, CK 345, CJ 123"' , function(){
        assert.equal(2,countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

    it('Should return 0 when called with "5566 L"' , function(){
        assert.equal(0,countAllPaarl('5566 L'));
    });
});