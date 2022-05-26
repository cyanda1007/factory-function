describe("The bill with text-bill factory function",function(){
    it("should calculate the call bill", function(){
        let settingBillTotal = RadioBillFunction();
        settingBillTotal.setCallCost(2.75);
        assert.equal(2.75,settingBillTotal.getCallCost());
    })

    it("should calculate the sms bill", function(){
        let settingBillTotal = RadioBillFunction();
        settingBillTotal.setSmsCost(0.75);
        assert.equal(0.75, settingBillTotal.getSmsCost());
    })

    it("should send the tototal call bill", function(){
        let settingBillTotal = RadioBillFunction();
        settingBillTotal.setCallCost(2.75);
        settingBillTotal.sendCall();
        settingBillTotal.sendCall();
        assert.equal(5.50,settingBillTotal.getTotalCost());
        
    })


    it("should send the total sms bill", function(){
        let settingBillTotal = RadioBillFunction();
        settingBillTotal.setSmsCost(0.75);
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        settingBillTotal.sendSms();
        assert.equal(2.25,settingBillTotal.getTotalCost());
       
    })
    describe("warning & critical level", function(){
        it("should return a class name of 'warning' if warning level is reached", function(){
            let settingBillTotal = SettingBillFunction();
            settingBillTotal.setSmsCost(0.75);
            settingBillTotal.setCallCost(2.75);
            settingBillTotal.setWarningLevel(10);

            settingBillTotal.sendSms
            settingBillTotal.sendCall

            assert.equal("warning", settingBillTotal.totalClassName());
        })

        it("should return a class name of 'critical' if critical level has been reached", function(){
            let settingBillTotal = SettingBillFunction();

            settingBillTotal.setCallCost(2.75);
            settingBillTotal.setSmsCost (0.75);
            settingBillTotal.setCriticalLevel(20);


            settingBillTotal.sendSms
            settingBillTotal.sendCall
            

            assert.equal("critical", settingBillTotal.totalClassName());
        })

})
})