describe('Test my yearsAgo function' , function(){
    it('Should return 54 when called with "1969"' , function(){
        assert.equal(54,yearsAgo(1969));
    });

    it('Should return 34 when called with "1989"' , function(){
        assert.equal(34,yearsAgo(1989));
    });

    it('Should return 11 when called with "2012"' , function(){
        assert.equal(11,yearsAgo(2012));
    });

    it('Should return 4 when called with "2019"' , function(){
        assert.equal(4,yearsAgo(2019));
    });

    it('Should return -1 when called with "2024"' , function(){
        assert.equal(-1,yearsAgo(2024));
    });
});