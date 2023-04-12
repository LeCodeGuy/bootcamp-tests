describe('Test my findItemsOver function' , function(){
    it('Should return results when called with "itemList,15"' , function(){
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
        
        assert.deepEqual(results, findItemsOver(itemList,15));
    });

    it('Should return results2 when called with "itemList2,15"' , function(){     
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
        ];

        assert.deepEqual(results2, findItemsOver(itemList2,15));
    });

    it('Should return results3 when called with "itemList3,15"' , function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(results3, findItemsOver(itemList3,15));
    });

    it('Should return results4 when called with no parameters called' , function(){
        var results4 = [];

        assert.deepEqual(results4, findItemsOver());
    });
})