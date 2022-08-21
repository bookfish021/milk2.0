

function new_event(){

    document.getElementById("event_box").style.display="flex";

}



function event_verify(){

    var json_text={

        "event":document.getElementById("event").value

    };
    
    var r_data={};


    //查看一般評論
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

            localStorage.setItem("milk_event", data['event']);

            new_cuppings();

        },
        
        error: function(){

            window.alert('活動邀請碼驗證失敗');    
        
        }
    });




}