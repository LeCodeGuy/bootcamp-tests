describe('Test my totalPhoneBill function' , function(){
    it('Should return R7.45 when called with "call, sms, call, sms, sms"' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('Should return R3.40 when called with "call, sms"' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('Should return R1.30 when called with "sms, sms"' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});