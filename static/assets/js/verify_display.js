var S_verity="expert";
var re_id=0;
var dd={};

var fack_data={
    "verificationCodes": [
        {
            "_id": "6301fcc90e9ab249af61f32b",
            "content": "asdg",
            "usage": "expert",
            "expireAt": "2022-09-10T17:36",
            "startAt": "2022-08-19T17:56",
            "createdAt": "2022-08-21T09:37:13.750Z",
            "updatedAt": "2022-08-21T09:37:13.750Z",
            "__v": 0
        },
        {
            "_id": "6301fd180e9ab249af61f32d",
            "content": "bbbbb",
            "usage": "event",
            "expireAt": "2022-09-10T17:36",
            "startAt": "2022-07-31T17:36",
            "createdAt": "2022-08-21T09:38:32.574Z",
            "updatedAt": "2022-08-21T09:38:32.574Z",
            "__v": 0
        }
    ]
}

function verify_type(mode){

    var shadow=document.getElementById("sha");

    if(mode==1){

        S_verity="expert";

        shadow.style.left= "15px";

    }

    if(mode==2){

        S_verity="event";

        shadow.style.left= "150px";

    }

    
}


function add_verify(mode){

    var verify=document.getElementById("verification").value;
    if(verify==""){
        document.getElementById("verification").style.border="2px solid #f47373";
        window.alert("請輸入驗證碼");
        return 0;
    }

    var start_time=document.getElementById("start-time").value;
    if(start_time==null){
        document.getElementById("start-time").style.border="2px solid #f47373";
        window.alert("請輸入開始時間");
        return 0;
    }

    var end_time=document.getElementById("end-time").value;
    if(end_time==""){
        document.getElementById("end-time").style.border="2px solid #f47373";
        window.alert("請輸入結束時間");
        return 0;
    }


    //新的
    if(mode==1){

        //新增驗證碼的資料
        var json_text={

            "content": verify,
            "usage": S_verity,
            "startAt": start_time,
            "expireAt": end_time,

        };

        console.log(JSON.stringify(json_text));
        JSON.stringify(json_text);

        /* 新增資料庫 */
        $.ajax({
            url: "https://eva-dev.bettermilk.com.tw/verificationCode/create",
            type: "POST",
            headers: {
                "Authorization": toString(localStorage.getItem("milk_token"))
            },
            data : JSON.stringify(json_text),
            tokenFlag: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        
            success: function(data){

                console.log(data);
                window.alert('新增成功');

            },
            
            error: function(){

                window.alert('驗證碼已被使用過');    

            }
        });

    }

    //更改舊的
    if(mode==2){

       //新增驗證碼的資料
       var json_text={

            "id": re_id,
            "content": verify,
            "usage": S_verity,
            "startAt": start_time,
            "expireAt": end_time

        };

        console.log(JSON.stringify(json_text));
        JSON.stringify(json_text);

        /* 資料庫更新 */
        $.ajax({
            url: "https://eva-dev.bettermilk.com.tw/verificationCode/update",
            headers: {
                "Authorization": toString(localStorage.getItem("milk_token"))
            },
            type: "PUT",
            tokenFlag: true,
            data : JSON.stringify(json_text),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        
            success: function(data){

                console.log(data);
                window.alert('更改成功');

            },
            
            error: function(){

                window.alert('更改失敗');    

            }
        });

    }


    //更新的
    

    


}


function list_verify(){


    var json_text={

        "limit":20,
        "skip":0
    };



    //window.alert(JSON.stringify(json_text));
    JSON.stringify(json_text);

    /* 條列資料庫 */
    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/verificationCode/list",
        type: "POST",
        tokenFlag: true,
        headers: {
            "Authorization": toString(localStorage.getItem("milk_token"))
        },
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
       
        success: function(data){

            console.log(data);
            window.alert('取得成功');

            list_display(data);

        },
        
        error: function(){

            window.alert('取得驗證資訊失敗');    

        }
    });


}


function list_display(){

    //dd=data.verificationCodes;
    //data=dd;

    data=fack_data.verificationCodes;

    document.getElementById("verify_list").style.display="flex";

    var mes="";


    mes+='<div class="list_box"><table><thead>'
        +'<th style="width: 100px;">驗證碼</th><th style="width: 70px;">用途類型</th>'
        +'<th style="width: 90px;">開始時間</th><th style="width: 90px;">結束時間</th>'
        +'<th style="width: 50px;"></th><th style="width: 50px;"></th></thead><tbody>';

    for(var a=0;a<data.length;a++){

        test=data[a];

        var m = new Date(test.startAt);
        var startAt = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
        var m = new Date(test.expireAt);
        var expireAt = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();

        mes+='<tr><th>'+test.content+'</th><th>'+test.usage+'</th><th>'+startAt+'</th><th>'+expireAt+'</th>'
            +'<th><div id='+a+' onclick="rewrite_verify('+a+')">修改</div></th><th><div id='+test._id+' onclick="delect_verify('+test._id+')">刪除</div></th></tr>';

    }

    mes+='</tbody></table></div>';


    document.getElementById("verify_list").innerHTML=mes;


}



function rewrite_verify(a){

    dd=fack_data.verificationCodes;

    re_id=dd[a]._id;

    verify=dd[a].content;
    document.getElementById("verification").value=verify;

    var shadow=document.getElementById("sha");
    S_verity=dd[a].usage;
    if(S_verity=="expert"){shadow.style.left= "15px";}
    if(S_verity=="event"){shadow.style.left= "150px";}

    document.getElementById("start-time").value=dd[a].startAt;
    document.getElementById("end-time").value=dd[a].expireAt;

    var mes="";

    mes='<div id="write_v" class="button_type" onclick="add_verify(2)">修改驗證碼</div>'
    document.getElementById("re_new").innerHTML=mes;
    
    mes="";
    mes='<h4><span class="to_list" onclick="exit_re()">修改取消</span></h4>'
    document.getElementById("re_detial").innerHTML=mes;


}

function exit_re(){

    //資料復原
    document.getElementById("verification").value="";
    document.getElementById("sha").style.left= "15px";
    document.getElementById("start-time").value="";
    document.getElementById("end-time").value="";

    var mes="";

    mes='<div id="write_v" class="button_type" onclick="add_verify(1)">新增驗證碼</div>'
    document.getElementById("re_new").innerHTML=mes;
    
    mes="";
    mes='<h4><span class="to_list" onclick="list_display()">查看所有驗證碼</span></h4>'
    document.getElementById("re_detial").innerHTML=mes;

}

function delect_verify(test_id){

    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/verificationCode/delete",
        type: "DELETE",
        headers: {
            "Authorization": toString(localStorage.getItem("milk_token"))
        },
        data : JSON.stringify({"id":test_id}),
        tokenFlag: true,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
       
        success: function(data){

            console.log(data);
            window.alert('刪除成功');

        },
        
        error: function(){

            window.alert('刪除失敗');    

        }
    });
}