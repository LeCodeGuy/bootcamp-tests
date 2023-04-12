var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
var results2 = [];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe('Test my findItemsOver20 function' , function(){
    it('Should return results when called with "itemList"' , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });

    it('Should return results2 when called with "itemList2"' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });

    it('Should return results3 when called with "itemList3"' , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });

    it('Should return results2 when called with no parameter passed' , function(){
        assert.deepEqual(results2, findItemsOver20());
    });
    it('Should return results2 when called with "Hello"' , function(){
        assert.deepEqual(results2, findItemsOver20("Hello"));
    });
})