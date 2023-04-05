describe('Test my mostProfitableDepartment function' , function(){
    it('Should return outdoor when called with "salesData"' , function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData));
    });

    it('Should return electronics when called with "salesData2"' , function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2));
    });
})