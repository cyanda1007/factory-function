describe("The factory bill With Setting function",function(){
    it("should be able to set the call cost", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal.setCallCost(2.75);
        assert.equal(2.75,settingBillTotal.getCallCost());
    })

    it("should be able to set the sms cost", function(){
       let settingBillTotal =  SettingBillFunction();
       settingBillTotal.setSmsCost(0.75);
       assert.equal(0.75, settingBillTotal.getSmsCost());
    })

    it("should be able to send sms", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal .setSmsCost (1.25);
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        assert.equal(2.50,settingBillTotal.getTotalCost());
    })
    it("should be able to send call", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal.setCallCost(3.10);
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        assert.equal(9.30,settingBillTotal.getTotalCost());
    })
})