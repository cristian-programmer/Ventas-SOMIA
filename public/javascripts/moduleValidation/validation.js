function isEmpty(value){
    console.log(value);
    if(value == undefined || value.length == 0)
        return true; 
    return false;
}


function convertArrayToString(value){
    if(!isEmpty(value))
        return JSON.stringify(value);
}

function convertStringToArray(value){
    if(!isEmpty(value))
        return JSON.parse(value)
}


