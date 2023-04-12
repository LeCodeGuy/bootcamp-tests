describe('Test my greet function' , function(){
    it('it should return "Hello, Elmar" when called with "Elmar"' , function(){
        assert.equal("Hello, Elmar",greet("Elmar"));
    });

    it('it should return "Hello, 1234" when called with "1234"' , function(){
        assert.equal("Hello, 1234",greet("1234"));
    });

    it('it should return "" when called with ""' , function(){
        assert.equal("",greet(""));
    });

    it('it should return "" when called with no parameter passed' , function(){
        assert.equal("",greet());
    });
});