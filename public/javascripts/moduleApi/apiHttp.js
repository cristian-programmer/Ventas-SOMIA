
function httpGet(url, data){
    return new Promise((resolve, reject)=>{

    });
}

function httpPost(url, data){
    return new Promise((resolve, reject)=>{
        fetch(url, {method: 'POST', body:data, headers:{'Content-Type': 'application/json'}})
        .then(res =>{ resolve(res)})
        .catch(error=>{ reject(error)});
    });
}


function httpDelete(){
    return new Promise ((resolve, reject)=>{

    });
}

