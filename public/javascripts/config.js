document.addEventListener('DOMContentLoaded', ()=>{
    getAllUsers();
    createUser();
});

function getAllUsers(){
    $('#users').DataTable({
        ajax:{
            url: pointer.getUsers,
            type: "POST"
        },
        columns: [
            {data: 'user'},
            {data: 'id', render: function(id) {
                return `id ${id}`;
            }}
        ]
    });
}

function getForm(){
    return {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value 
    }

}

function createUser(){
    document.getElementById('create-user').addEventListener('click', ()=>{
        user = getForm();
        httpPost(pointer.createUser, JSON.stringify(user)).then(res =>{
            console.log(res);
            return res.json();
        }).then(res =>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        });
        // console.log(user);
    });
}