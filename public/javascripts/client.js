const SAVE = 'save';
const RECEIVED = 'received';

$(document).ready(()=>{
    // setInitDataModal();
    initFoatingButton();
    initModal();
    addProvider();
    cancelProvider();
    getProviders();
    deleteProvider();
    console.log("Funciona");
   
});

function initFoatingButton(){
    $('.fixed-action-btn').floatingActionButton();
}

function initModal(){
    $('.modal').modal();
}

function addProvider(){
    $('#add').on('click', ()=>{
        newProvider = getForm();
        console.log(pointer);
        httpPost(pointer.addProvider,JSON.stringify(newProvider)).then(res=>{
            return res.json();
        }).then( res=>{
            console.log(res);
            if(res.status == SAVE){
                alert('proveedor guardado');
                reloadTable();
            } 
            else {
                alert('error al guardar provedor');
            }
        });
    });
}

function cancelProvider(){
       
}

function getProviders(){
    $('#providers').DataTable({
        ajax:{
            url: pointer.getProviders,
            type:"POST"
        },
        columns:[
            {data:'name'},
            {data:'enterprise'},
            {data:'email'},
            {data:'cellphone'},
            {data:'id',
            render: (id)=>{
                return `<a class="waves-effect waves-light btn-small indigo" id="${id}" onclick="editProvider(this)">
                    <i class="material-icons left">edit</i>
                    Editar</a>`;
            }}
        ]
    });
}

function deleteProvider(){

}

function editProvider(elem){  
    alert("hola");  
    console.log(elem.id);
    let id = elem.id;
    httpGet(pointer.getProvider, id)
    .then(res =>{ return res.json()})
    .then(res =>{
        if(res.status == RECEIVED){
            setDataModal(res.data); 
            $('.modal').modal('open');
        }
    });
        // 
        //
}

function getForm(){
    let newProvider = {
        name: $('#name').val(),
        enterprise: $('#enterprise').val(),
        email: $('#email').val(),
        cellphone: $('#cellphone').val()
    };  

    if((!isEmpty(newProvider.name)) && (!isEmpty(newProvider.enterprise))
     && (!isEmpty(newProvider.email)) && (!isEmpty(newProvider.cellphone))){
        return newProvider;
    }else{
       alert("ingrese todo los datos");
    }
}

function reloadTable(){
    $('#providers').DataTable().ajax.reload();
}

function setDataModal(provider){
    $('#modaltitle').text('Editar Proveedor');
    $('#name').val(provider[0].name);
    $('#enterprise').val(provider[0].enterprise);
    $('#email').val(provider[0].email);
    $('#cellphone').val(provider[0].cellphone);
}

// function setInitDataModal(){

// }