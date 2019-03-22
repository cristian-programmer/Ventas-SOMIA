
function httpGet(url, data){
    return new Promise((resolve, reject)=>{
        fetch(url+`/${data}`, {method:'GET'})
        .then(res => { resolve(res) })
        .catch(error => { reject(error) });
    });
}

async function httpGetSync(url, data){
    try {
        if (arguments.length > 1) {    
            const response = await fetch(`${url}/${data}`, { method: 'GET'});
            return response.json();
        }
        const response = await fetch(`${url}`, { method: 'GET'});
        return response.json();

    } catch (error) {
        console.log(error);
    }
} 

function httpPost(url, data){
    console.log(data);
    return new Promise((resolve, reject)=>{
        fetch(url, {method: 'POST', body:data, headers:{'Content-Type': 'application/json'}})
        .then(res => { resolve(res) })
        .catch(error => { reject(error) });
    });
}

async function httPostSync(url, data){
    try {
        const response = await fetch(`${url}`, { method: 'POST', body: data });
        return response.json();
    } catch (error) {
        console.log(error);
    }
} 

async function httpDeleteSync(url, id){
    try {
    const response = await fetch(`${url}/${id}`, { method: 'DELETE'});
    return response.json();
    } catch (error) {
        console.log(error);
    }
} 

function httpPatch(url, data){
    return new Promise((resolve, reject) => {
        fetch(url, {method: 'PATCH', body:data, headers: {'Content-Type': 'applicacion/json'}})
        .then(res=> { resolve(res) })
        .catch(error => { reject(error) });
    });
}

function httpDelete(){
    return new Promise ((resolve, reject)=>{

    });
}

