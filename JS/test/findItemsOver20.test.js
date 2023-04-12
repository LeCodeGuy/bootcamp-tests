describe('Test my findItemsOver20 function' , function(){
    it('Should return results when called with "itemList"' , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        assert.deepEqual(results, findItemsOver20(itemList));
    });

    it('Should return results2 when called with "itemList2"' , function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });

    it('Should return results3 when called with "itemList3"' , function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });

    it('Should return results2 when called with no parameter passed' , function(){
        var results2 = [];

        assert.deepEqual(results2, findItemsOver20());
    });
    it('Should return results2 when called with "Hello"' , function(){
        var results2 = [];
        
        assert.deepEqual(results2, findItemsOver20("Hello"));
    });
})