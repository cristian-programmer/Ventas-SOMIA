const SAVE = 'save';
const RECEIVED = 'received';

document.addEventListener('DOMContentLoaded',() => {
    addProvider();
    getProviders(); 
    cancelProvider();
});

function addProvider(){
    document.getElementById('add').addEventListener('click', () => {
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
    $('#cancel').on('click', function(){
        $('#modalEdit #name_provider').val('');
        $('#modalEdit #enterprise').val('');
        $('#modalEdit #email').val('');
        $('#modalEdit #cellphone').val('');
    });
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
                return `<div class="d-flex justify-content-between"> <button class="btn btn-primary btn-sm" id="${id}" onclick="getProvider(this)">
                    <i class="fas fa-edit"></i> </button>
                    <button class="btn btn-danger btn-sm" id="${id}" onclick="deleteProvider(this)"><i class="fas fa-trash"></i></button>
                    <div>`;
            }}
        ]
    });
}

async function deleteProvider(elem){
    let id = elem.id;
    const res = await httpDeleteSync(pointer.deleteProvider, id);
    console.log(res);
}

function getProvider(elem){   
    console.log(elem.id);
    let id = elem.id;
    httpGet(pointer.getProvider, id)
    .then(res =>{ return res.json()})
    .then(res =>{
        if(res.status == RECEIVED){
            setDataModal(res.data); 
            $('.modal').modal();
            editProvider(id);
        }
    });
}

function getForm(){
    let newProvider = {
        name: $('#name_provider').val(),
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
    console.log(provider);
    $('#modalEdit #name_provider').val(provider[0].name);
    $('#modalEdit #enterprise').val(provider[0].enterprise);
    $('#modalEdit #email').val(provider[0].email);
    $('#modalEdit #cellphone').val(provider[0].cellphone);
}

function editProvider(id){
    document.getElementById('edit').addEventListener('click', () =>{
        httpPatch(pointer.editProvider, id)
        .then(res => { return res.json() })
        .then(res => { console.log(res);});
    });
}