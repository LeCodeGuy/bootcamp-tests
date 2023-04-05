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

describe('Test my findItemsOver function' , function(){
    it('Should return results when called with "itemList,20"' , function(){
        assert.deepEqual(results, findItemsOver(itemList,20));
    });

    it('Should return results2 when called with "itemList2,20"' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2,20));
    });

    it('Should return results3 when called with "itemList3,20"' , function(){
        assert.deepEqual(results3, findItemsOver(itemList3,20));
    });
})