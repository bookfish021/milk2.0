

function new_event(){

    document.getElementById("event_box").style.display="flex";

}



function event_verify(){

    var event_t=document.getElementById("event").value;

    document.getElementById("event").value="";

    var json_text={

        "event":event_t

    };
    
    //var r_data={};

    //window.alert(document.getElementById("event").value);


    //驗證活動邀請碼
    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/verificationCode/verifyEventCode",
        headers: {
            "Authorization": localStorage.getItem("milk_token")
        },
        type: "POST",
        tokenFlag: true,
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        
    
        success: function(data){
                                    
            window.alert("驗證成功");

            localStorage.setItem("milk_event", event_t);

            

            new_cuppings();

        },
        
        error: function(){

            window.alert('活動邀請碼驗證失敗');    
        
        }
    });




}