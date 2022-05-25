function TextBillFunction(){
    var SmsCost = 0;
    var callCost = 0;
    var TotalCost = 0;
    
    function getCallCost(){
        
        return  callCost
    }
    
    function getSmsCost(){
        
        return SmsCost
    }
    
    
    function setCallCost(){
        callCost = 2.75
        
    }
    function setSmsCost(){
       SmsCost = 0.75
        
    }
    function sendSms (){
       TotalCost += SmsCost 
    }
    function sendCall (){
        TotalCost += callCost
    }
    function getTotalCost (){
     return TotalCost
    }
    return {
        setSmsCost, 
        getSmsCost,
        sendSms,
        getTotalCost,
        setCallCost,
        getCallCost,
        sendCall,
    
    }
    
    }
    
    