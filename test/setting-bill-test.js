describe("The bill with setting-bill factorybillWithSetting function",function(){
    it("should be able to set the call cost", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal.setCallCost(2.75);
        assert.equal(2.75,settingBillTotal.getCallCost());
    })

    it("should be able to set the sms cost", function(){
       let settingBillTotal = countingFunction();
       settingBillTotal.setSmsCost(0.75);
       assert.equal(0.75, settingBillTotal.getSmsCost());
    })

    it("should be able to send sms", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal .setSmsCost (0.75);
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        assert.equal(1.50,settingBillTotal.getTotalCost());
    })
    it("should be able to send call", function(){
        let settingBillTotal = countingFunction();
        settingBillTotal.setCallCost(2.75);
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        assert.equal(5.50,settingBillTotal.getTotalCost());
    })
})