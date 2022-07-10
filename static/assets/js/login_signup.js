var expert_password="ilovemilk";
var expert=0;
var new_store="";
var new_name="";
var new_phone="";
var new_password="";
var new_mail="";


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
    if(new_phone==""|new_phone.search(phoneRull)== -1){
        document.getElementById("sign_phone").style.border="2px solid #f47373";
        window.alert("手機號碼填寫錯誤");
        return 0;
    }


    
    new_password=document.getElementById("sign_password").value;
    if(new_password==""){
        document.getElementById("sign_password").style.border="2px solid #f47373";
        window.alert("密碼必填");
        return 0;
    }

    

    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
 
    
    new_mail=document.getElementById("sign_mail").value;
    window.alert(new_mail);
    if(new_mail!="" & new_mail.search(emailRule)== -1){

        document.getElementById("sign_mail").style.border="2px solid #f47373";
        window.alert("信箱格式錯誤");

        return 0;
    }

    


    if(expert==0){

        new_expert=document.getElementById("sign_expert").value;
        if(new_expert==expert_password){
            expert=1;

            mes='<div class="verify_ok">專家驗證成功</div>';

            document.getElementById("expert").innerHTML=mes;
        }

    }
    
    
    check_legitimate();

}

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


function check_legitimate(){


    /* 資料是否重疊合法 */





    mes="";

    
    /*
    mes=new_name+mes;
    document.getElementById("user_name").innerHTML=mes;
    document.getElementById("user_phone").innerHTML=new_phone;
    document.getElementById("user_password").innerHTML=new_password;
    document.getElementById("user_mail").innerHTML=new_mail;
    
    */

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


    


    /*
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="flex";
    */

}

function rewrite(){
    document.getElementById("signup").style.display="flex";
    document.getElementById("double_check").style.display="none";
}


function create(){


    var json_text={

        "productName": namec,
        "name":new_name,
        "account":new_phone,
        "password":new_password,
        "role":expert,
        "store":new_store,
        "mail":new_mail
    };

    JSON.stringify(json_text);

    /* 資料庫更新 */

    document.getElementById("double_check").style.display="none";

    document.getElementById("login").style.display="flex";


}

//show two Options
function two_way(){

    window.location.href = "two_ways.html";

   
}





//run the function start when the web load
//window.addEventListener("load", start, false)
