var expert_password="ilovemilk";
var expert=0;
var new_store="";
var new_name="";
var new_phone="";
var new_password="";
var new_mail="";
var new_expert="";


function start(){
    renew();

    new_store="";
    new_name="";
    new_phone="";
    new_password="";
    new_mail="";
    new_expert="";


    

}

function new_account(){
   
    document.getElementById("login").style.display="none";
    document.getElementById("signup").style.display="flex";

}


function create_account(){

    
    new_name=document.getElementById("sign_name").value;
    if(new_name==""){

        document.getElementById("sign_name").style.border="2px solid #f47373";
        window.alert("名字必填");
        return 0;
    }

    phoneRull=/^09[0-9]{8}$/;
    
    new_phone=document.getElementById("sign_phone").value;
    if(new_phone==""||new_phone.search(phoneRull)== -1){
        document.getElementById("sign_phone").style.border="2px solid #f47373";
        window.alert("手機號碼填寫錯誤");
        return 0;
    }

    passwordRull=/^(?![^a-zA-Z] $)(?!\D $)/;
    
    new_password=document.getElementById("sign_password").value;
    if(new_password==""||new_password.search(passwordRull)== -1){
        document.getElementById("sign_password").style.border="2px solid #f47373";
        window.alert("密碼填寫錯誤");
        return 0;
    }

    

    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
 
    
    new_mail=document.getElementById("sign_mail").value;
    //window.alert(new_mail);
    if(new_mail!="" & new_mail.search(emailRule)== -1){

        document.getElementById("sign_mail").style.border="2px solid #f47373";
        window.alert("信箱格式錯誤");

        return 0;
    }
    else{new_mail="";}

    


    if(expert==0){

        new_expert=document.getElementById("sign_expert").value;
        if(new_expert!=null||new_expert!=""){
            expert=1;
        }
        /*
        if(new_expert==expert_password){
            expert=1;

            mes='<div class="verify_ok">專家驗證成功</div>';

            document.getElementById("expert").innerHTML=mes;
        }
        */

    }
    if(expert==1){
        new_expert=document.getElementById("sign_expert").value;
        if(new_expert==null||new_expert==""){
            expert=0;
        }
    }

    
    
    check_legitimate();

}

/*暫時用不到了*/
/*
function verify_expert(event){
    if(event.key === "Enter"){

        new_expert=document.getElementById("sign_expert").value;
        if(new_expert==expert_password){
            expert=1;

            mes='<div class="verify_ok">專家驗證成功</div>';

            document.getElementById("expert").innerHTML=mes;
        }

        else{
            document.getElementById("sign_expert").style.border="2px solid #f4a473";
        }
    }
}
*/


function check_legitimate(){


    mes="";


    mes='<div class="d_check">姓名 : <span class="check_display">'+new_name+'</span>';


    
    if(expert==0){
        mes+='<span class="iden consumer">消費者</span></div>';
    }

    else{mes+='<span class="iden iexpert">專家</span></div>';}

    mes+='<div class="d_check">手機 (帳號) : <span class="check_display">'+new_phone+'</span></div>'
        +'<div class="d_check">密碼 : <span class="check_display">'+new_password+'</span></div>';

    
    if(new_mail!=""){
        mes+='<div class="d_check">信箱 : <span class="check_display">'+new_mail+'</span></div>';
    }

    new_store=document.getElementById("sign_store").value;

    if(new_store!=""){

        mes+='<div class="d_check">店家 : <span class="check_display">'+new_store+'</span></div>';
    }

    document.getElementById("check_detail").innerHTML=mes;

    document.getElementById("double_check").style.display="flex";
    document.getElementById("signup").style.display="none";


}

function rewrite(){
    document.getElementById("signup").style.display="flex";
    document.getElementById("double_check").style.display="none";
}


function create(){

    //window.alert(new_mail);




    var role="normal";

    //要新增的使用者資訊
    var json_text={

        "username":new_name,
        "account":new_phone,
        "password":new_password,
        "role":role,
        "store":new_store,
        "email":new_mail


    };


    if(expert==1){

        role="expert";

        json_text={

            "username":new_name,
            "account":new_phone,
            "password":new_password,
            "role":role,
            "verificationCode":new_expert,
            "store":new_store,
            "email":new_mail
    
    
        };

    }


    //"message": "Failed to register, Error: Failed to create user to database, Error: Can not find the verification code in database"


    //window.alert(JSON.stringify(json_text));
    JSON.stringify(json_text);

    /* 資料庫更新 */
    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/user/register",
        type: "POST",
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
       
        success: function(data){
            console.log(data);
            window.alert('註冊成功');

            document.getElementById("double_check").style.display="none";

            document.getElementById("login").style.display="flex";


        },
        
        error: function(data){

           
            window.alert('創建失敗 -- 可能是 帳號(手機) 已被註冊過/或驗證碼輸入錯誤(僅專家會發生)');   
            
            document.getElementById("double_check").style.display="none";

            document.getElementById("signup").style.display="flex";

        }
    });

    


}

//show two Options

function two_way(){


    account=document.getElementById("log_account").value;
    password=document.getElementById("log_password").value;


    var json_text={
        "account":account,
        "password":password
    };

    JSON.stringify(json_text);


    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/session/login",
        type: "POST",
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        
       
        success: function(data){
            

            //test=JSON.parse(data);

            console.log(data);
            //window.alert(data['token']);
            //window.alert(data['id']);

            /*將使用者資訊存起來*/ 
            localStorage.setItem("milk_token",  "Bearer "+data['token']);
            localStorage.setItem("milk_role", data['role']);
            localStorage.setItem("milk_ID", data['id']);

            console.log(data['token']);

            
            
            if(data['role']=="admin"){  window.location.href = "verification.html"; }
            else{
                window.location.href = "two_ways.html";
            }
            

            //

        },
        
        error: function(){
            window.alert('登入失敗');    
            

        }
    });

   
}

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ2YjY2MTE0OTAxZGRjOWQwYzY0ZWUiLCJyb2xlIjoibm9ybWFsIiwiaWF0IjoxNjYxMDAxMzY5fQ.sAuxM0FSi3qxBm7wx4xfZHpBKkj0K1tO7kbRMeESSR4"


function renew(){

    var long = localStorage.length;

    for (var a = 0; a < long; a++){

        key=localStorage.key(a);

        if (key!=null && key.match('milk')) {

            localStorage.removeItem(key);

        }

        else{
            continue;
        }

    }

}



//run the function start when the web load
window.addEventListener("load",start, false);
