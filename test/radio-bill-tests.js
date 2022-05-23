describe("The bill with radio-bill factory function",function(){
    it("should be able to select a button to calculate call cost", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal.setCallCost(2.75);
        assert.equal(2.75,settingBillTotal.getCallCost());
    })

    it("should be able to select a button to calculate sms cost", function(){
        let settingBillTotal = countingFunction();
       settingBillTotal.setSmsCost(0.75);
       assert.equal(0.75, settingBillTotal.getSmsCost());
    })
})