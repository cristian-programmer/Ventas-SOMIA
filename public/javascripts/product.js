document.addEventListener('DOMContentLoaded', () => {
    console.log("ok");
    initModuleUI();
    onCreateProduct();
    getAllProducts();
    getProviders();
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

function loopProducts(response){

    for(let product in response.data){
        // console.log(response.data[product].id);
        let  card = document.createElement('div');
        card.className = 'card shadow'
        card.innerHTML = UIproduct(response.data[product]);
        document.getElementById('card-products').appendChild(card);
        
    }   
}

function UIproduct(product){
    console.log(product);
    return `
    <div>
        <img class="card-img-top img-product"  src="/images/arroz.jpg" alt="..." style="left:0%;"/>
        <div class="card-body" >
            <h5 class="card-title">
                <span class="badge badge-dark"> ${product.nameProduct}</span>
            </h5>
            <span class="badge badge-dark"> Cantidad: 50 pacas </span>
            <p class="card-text"> Provedor: ${product.provider}</p>
            <p class="card-text"> Valor unidad : ${product.acquisitionPrice} pesos</p>
            <p class="card-text"> Valor unitario  : ${product.unitPrice}1.600 pesos </p>
            <p class="card-text"> Porcentaje: 20% </p>
            <p class="card-text"> Precio de venta : ${product.unitPrice}</p>
        
            <button class=" btn btn-success btn-sm" > Ver Detalle</button>
            <button class=" btn btn-danger btn-sm" > <i class="fas fa-trash-alt"></i></button>
        </div>
    <div>
    `; 
}

async function getAllProducts(){
    response = await httpGetSync(pointer.getProducts);
   console.log(response);
   loopProducts(response);
}

async function getProviders() {
    response = await httpGetSync(pointer.getNameProvider)
    console.log(response);
    for(provider in response.data){
        // console.log();
        let option = document.createElement('option');
        option.innerHTML = `${response.data[provider].name} - 
        ${response.data[provider].enterprise}`; 
        document.getElementById('provider').appendChild(option); 
    }
      
}