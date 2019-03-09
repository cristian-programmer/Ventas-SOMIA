document.addEventListener('DOMContentLoaded', () => {
    console.log("ok");
    initModuleUI();
    onCreateProduct();
    
});

function onCreateProduct(){

    document.getElementById('create-product')
    .addEventListener('click', ()=>{
        console.log(getDataForm());
        httpPost(pointer.createProduct, JSON.stringify(getDataForm()))
       .then(res => res.json())
       .then(res => {
        if(res.status == 'save'){ showInfo();}
        console.log(res);
       })
       .catch(error =>{console.log(error)});
    });
}

function getDataForm(){
    return {
        nameProduct : document.getElementById('nameProduct').value,
        provider : document.getElementById('provider').value,
        acquisitionPrice : document.getElementById('acquisitionPrice').value,
        percentageProduct : document.getElementById('percentageProduct').value,
        unitPrice : document.getElementById('unitPrice').value
    };
}

function initModuleUI(){
    document.getElementById('info').style.display= "none";
}

function showInfo(){
    document.getElementById('info').style.display= "block";
}

function loopProducts(){
    
}

function getAllProducts(){
    httpGet(pointer.getProducts)
    .then(res => {return res.json()})
    .then(res =>{})
    .catch();
}