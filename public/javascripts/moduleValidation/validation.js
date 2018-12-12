function isEmpty(value){
    if(value == undefined || value.length == 0)
        return true; 
}


function convertArrayToString(value){
    if(!isEmpty(value))
        return JSON.stringify(value);
}

function convertStringToArray(value){
    if(!isEmpty(value))
        return JSON.parse(value)
}


