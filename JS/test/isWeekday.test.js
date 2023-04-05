describe('Test my isWeekday function' , function(){
    it('Should return true when called with "Monday"' , function(){
        assert.equal(true,isWeekday('Monday'));
    });

    it('Should return true when called with "Tuesday"' , function(){
        assert.equal(true,isWeekday('Tuesday'));
    });

    it('Should return true when called with "Wednesday"' , function(){
        assert.equal(true,isWeekday('Wednesday'));
    });

    it('Should return true when called with "Thursday"' , function(){
        assert.equal(true,isWeekday('Thursday'));
    });

    it('Should return true when called with "Friday"' , function(){
        assert.equal(true,isWeekday('Friday'));
    });

    it('Should return false when called with "Saturday"' , function(){
        assert.equal(false,isWeekday('Saturday'));
    });

    it('Should return false when called with "Sunday"' , function(){
        assert.equal(false,isWeekday('Sunday'));
    });
});