describe("The bill with text-bill factory function",function(){
    it("should calculate the call bil", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal.setCallCost(2.75);
        assert.equal(2.75,settingBillTotal.getCallCost());
    })

    it("should calculate the sms bil", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal.setSmsCost(0.75);
        assert.equal(0.75, settingBillTotal.getSmsCost());
    })
})