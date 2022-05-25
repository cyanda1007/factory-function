function SettingBillFunction (){
var SmsCost = 0;
var callCost = 0;
var TotalCost = 0;

function getCallCost(){
    
    return  callCost
}

function getSmsCost(){
    
    return SmsCost
}


function setCallCost(bill){
    callCost = bill
    
}
function setSmsCost(cost){
   SmsCost = cost
    
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

