describe("The factory bill With Setting function",function(){
    describe("set call and sms cost", function(){
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
    describe("send call and sms", function(){
    it("should be able to send sms", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal .setSmsCost (1.25);
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        assert.equal(2.50,settingBillTotal.getTotalCost());
    })

    it("should be able to send call and sms simultenously", function(){
        let settingBillTotal = SettingBillFunction();
        settingBillTotal.setSmsCost(1.50)
        settingBillTotal.setCallCost(3.15)
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();

        assert.equal(9.30, settingBillTotal.getTotalCost());
    })

    it("should be able to send call", function(){
        let settingBillTotal = SettingBillFunction();
        settingBillTotal.setCallCost(2.50);
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();

        assert.equal(12.50, settingBillTotal.getTotalCost());
    })

    it("should be able to send sms", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal .setSmsCost (3.25);
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        assert.equal(16.25,settingBillTotal.getTotalCost());
    })
    it("should be able to send call", function(){
        let settingBillTotal =  SettingBillFunction();
        settingBillTotal.setCallCost(3.10);
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();

        assert.equal(9.30,settingBillTotal.getTotalCost());
    })
    
    

    describe("warning & critical level", function(){
        it("should return a class name of 'warning' if warning level is reached", function(){
            let settingBillTotal = SettingBillFunction();

            settingBillTotal.setCallCost(3.10);
            settingBillTotal .setSmsCost (1.25);
            settingBillTotal.setSmsCost(0.75);
            settingBillTotal.setCallCost(2.75);
            settingBillTotal.setWarningLevel(10);

            settingBillTotal.sendSms
            settingBillTotal.sendCall
            settingBillTotal.setSmsCost

            assert.equal("warning", settingBillTotal.totalClassName());
        })

        it("should return a class name of 'critical' if critical level has been reached", function(){
            let settingBillTotal = SettingBillFunction();

            settingBillTotal.setCallCost(3.10);
            settingBillTotal.setSmsCost (1.25);
            settingBillTotal.setCriticalLevel(20);


            settingBillTotal.sendSms
            settingBillTotal.sendCall
            settingBillTotal.setSmsCost

            assert.equal("critical", settingBillTotal.totalClassName());
        })
    })
    })
})
})