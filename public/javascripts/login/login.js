$(document).ready(function(){
    // login();
});


function login(){
    $('#login').on('click', function(e){
    
        data = getForm();
        httpPost(pointer.login,data).then(res=>{

        }).catch(error =>{
            alert(error);
        })
    });
}  

function getForm(){
    let user = {
        username: $('#user').val(),
        password: $('#pass').val()
    };

    if(isEmpty(user.username) && isEmpty(user.password)){
        alert('Ingrese el usuario y contraseña');
    }else{
       
        return JSON.stringify(user);
    }


}