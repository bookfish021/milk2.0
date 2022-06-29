var expert_password="ilovemilk";
var expert=0;


function new_account(){
   
    document.getElementById("login").style.display="none";
    document.getElementById("signup").style.display="flex";

}


function create_account(){

    new_name="";
    new_name=document.getElementById("sign_name").value;
    if(new_name==""){

        document.getElementById("sign_name").style.border="2px solid #f47373";
        window.alert("名字必填");
        return 0;
    }


    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
 
    new_mail="";
    new_mail=document.getElementById("sign_mail").value;
    if(new_mail.search(emailRule)== -1){

        document.getElementById("sign_mail").style.border="2px solid #f47373";
        window.alert("信箱格式錯誤");

        return 0;
    }

    new_password="";
    new_password=document.getElementById("sign_password").value;
    if(new_password==""){
        document.getElementById("sign_password").style.border="2px solid #f47373";
        window.alert("密碼必填");
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
    
    
    check_legitimate(new_name,new_mail,new_password);

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


function check_legitimate(new_name,new_mail,new_password){


    //if legitimate
    mes="";

    mes='<span class="iden iexpert">專家</span>';
    if(expert==0){
        mes='<span class="iden consumer">消費者</span>';
    }
    mes=new_name+mes;
    document.getElementById("user_name").innerHTML=mes;
    document.getElementById("user_mail").innerHTML=new_mail;
    document.getElementById("user_password").innerHTML=new_password;
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
