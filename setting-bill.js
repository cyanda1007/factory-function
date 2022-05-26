function SettingBillFunction (){
var SmsCost = 0;
var callCost = 0;
var TotalCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

function getCallCost(){
    
    return  callCost
}

function getSmsCost(){
    
    return SmsCost
}

function getWarningLevel (){
   return criticalLevel

}
function getCriticalLevel(){
    return warningLevel
}
function setCallCost(bill){
    callCost = bill
    
}

function setWarningLevel(warning){
    warningLevel = warning
}

function setCriticalLevel(critical){
    criticalLevel = critical
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
function totalClassName (){
    if(getTotalCost() >= getWarningLevel()){
        return "warning"
    }
    if(getTotalCost() >= getCriticalLevel()){
        return "critical"
    }
}
return {
    setSmsCost, 
    getSmsCost,
    sendSms,
    getTotalCost,
    setCallCost,
    getCallCost,
    sendCall,
    totalClassName,
   setWarningLevel,
   setCriticalLevel,

}

}

