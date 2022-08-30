//run the function start when the web load


function list_test(){

    
    var count=tidy_test(1);

    var mes="";
    
    var marksData;

    if(count==0){
        add_new_test(1);
        count=1;
    }

    

        //window.alert(count);
        var data=tidy_test(2);
        for(const [key, value] of Object.entries(data)){

            temp=key.substring(9);

            test=localStorage.getItem(key);

            //window.alert(key+":"+test);

            if(test=="unset"){
                mes+='<a href="cupping.html?test='+temp+'"><div class="box button_type">開始評鑑</div></a>'
            }

            else{
                //window.alert(test);
                console.log(test);
                test=JSON.parse(test);

                

                mes+='<div class="box"><div class="one_test"><div class="test_detail">'
                +'<h4><div class="test_title test_detail_row">品項 : <span class="test_detail_output">'+test.productName+'</span></div>'
                +'<div class="test_detail_row">批號 : <span class="test_detail_output">'+test.date+'</span></div>'
                +'<div class="test_detail_row">總分 : <span class="test_detail_output">'+test.score+'</span></div>'
                +'<div class="test_detail_row test_detail_comment" style="background-color:#FBF5DF;">正面描述 : <br>'+all_comment(test,1)+'</div>'
                +'<div class="test_detail_row test_detail_comment" style="background-color:#F1F8FE;">負面描述 : <br>'+all_comment(test,0)+'</div></div></h4>'
                +'<div style="display:inline-block; "><canvas id="marksChart_'+temp+'" width="20"></canvas></div></div>'
                +'<div><a href="cupping.html?test='+temp+'"><span class="change_test">編輯</span></a><span class="change_test" onclick="delete_test('+temp+')">刪除</span></div></div>';
                
           /* +'<table class="test_table  total">'
                +'<thead><tr><th>香氣</br>Aroma</th><th>風味</br>Flavor</th><th>甜感</br>Sweetness</th><th>體質感</br>Body</th></tr></thead>'
                +'<tbody><tr><td class="score_t" width="100px">'+test.aromaScore+'</td>'
                +'<td class="score_t" width="100px">'+test.flavorScore+'</td>'
                +'<td class="score_t" width="100px">'+test.sweetnessScore+'</td>'
                +'<td class="score_t" width="100px">'+test.bodyScore+'</td></tr>'
                +'<tr><td id="Aroma_Tatol" class="comment_t">'+comment_detail(test.aromaPositive,0)+comment_detail(test.aromaNegative,1)+'</td>'
                +'<td id="Flavor_Tatol" class="comment_t">'+comment_detail(test.flavorPositive,0)+comment_detail(test.flavorNegative,1)+'</td>'
                +'<td id="Sweetness_Tatol" class="comment_t">'+comment_detail(test.sweetnessPositive,0)+comment_detail(test.sweetnessNegative,1)+'</td>'
                +'<td id="Body_Tatol" class="comment_t">'+comment_detail(test.bodyPositive,0)+comment_detail(test.bodyNegative,1)+'</td></tr></tbody>'
                +'<thead><tr><th>質地</br>Texture</th><th>餘韻</br>Aftertaste</th><th>平衡性</br>Balance</th><th>瑕疵</br>Defect</th></tr></thead>'
                +'<tbody><tr><td class="score_t" width="100px">'+test.textureScore+'</td>'
                +'<td class="score_t" width="100px">'+test.aftertasteScore+'</td>'
                +'<td class="score_t" width="100px">'+test.balanceScore+'</td>'
                +'<td class="score_t" width="100px">'+test.defectScore+'</td></tr>'
                +'<tr><td id="Texture_Tatol" class="comment_t">'+comment_detail(test.texturePositive,0)+comment_detail(test.textureNegative,1)+'</td>'
                +'<td id="Aftertaste_Tatol" class="comment_t">'+comment_detail(test.aftertastePositive,0)+comment_detail(test.aftertasteNegative,1)+'</td>'
                +'<td id="Balance_Tatol" class="comment_t">'+comment_detail(test.balancePositive,0)+comment_detail(test.balanceNegative,1)+'</td>'
                +'<td id="Defect_Tatol" class="comment_t">'+comment_detail(test.defectNegative,1)+'</td></tr></tbody></table>'*/



            }

        }

    
    mes+='<div class="box button_type" onclick="add_new_test('+(count+1)+')">增加評鑑項目</div>';
    mes+='<div class="box button_type" onclick="send_DB()">送出評鑑結果</div>';

    document.getElementById("container").innerHTML=mes;


    //var marksCanvas = document.getElementById("marksChart");

   
    /* radar display */
    for(const [key, value] of Object.entries(data)){

        temp=key.substring(9);

        test=localStorage.getItem(key);

        if(test!="unset"){
            test=JSON.parse(test);


            marksData = {
                labels: ["香氣", "風味", "甜感", "體質感", "質地", "餘韻","平衡性"],
                datasets: [{
                  label: key,
                  backgroundColor: "rgba(200,0,0,0.2)",
                  data: [test.aromaScore,test.flavorScore,test.sweetnessScore,test.bodyScore,test.textureScore,test.aftertasteScore,test.balanceScore]
                }]
              };
    
            new Chart(document.getElementById("marksChart_"+temp), {
                type: 'radar',
                data: marksData,
                options: {
                elements: {
                    line: {
                    borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 10,
                        ticks: {stepSize: 2},
                        grid: {circular: true,
                            
                        },
                        
                    
                    }
                }
                }
            });

        }


        

    }



}


function all_comment(data,type){

    var commentArr=[];

    var mes="";

    if(type==1){
        commentArr=(data.aromaPositive).concat(data.flavorPositive,data.sweetnessPositive,data.bodyPositive,data.texturePositive,data.aftertastePositive,data.balancePositive);
    }
    else{
        commentArr=(data.aromaNegative).concat(data.flavorNegative,data.sweetnessNegative,data.bodyNegative,data.textureNegative,data.aftertasteNegative,data.balanceNegative,test.defectNegative);
    }

    //window.alert(commentArr);
    //window.alert(data.balanceNegative);

    for(var a=0;a<commentArr.length;a++){
        if(a!=0){
            mes+="、";
        }
        mes+=commentArr[a];
        
    } 

    return mes;
}

function comment_detail(comment,m){

    mes="";

    if(m==0){

        //window.alert(comment);
        for(var a=0;a<comment.length;a++){
            mes+='<div class="PS"># '+comment[a]+'</div>';
        } 

        
    }

    else{
        for(var a=0;a<comment.length;a++){
            mes+='<div class="NS"># '+comment[a]+'</div>';
        } 
    }
    


    return(mes);
}


function delete_test(key){

    //window.alert(key);

    localStorage.removeItem("milktest "+key);
    list_test();

}


function new_cuppings(){

    var long = localStorage.length;

    for (var a = 0; a < long; a++){

        key=localStorage.key(a);

        //window.alert(key+" : "+localStorage.getItem(key));

        if (key!=null && key.match('milktest')) {

            localStorage.removeItem(key);

        }

        else{
            continue;
        }

    }

    localStorage.setItem("milktest 0", "unset");
    window.location.href = "form.html";

}


function add_new_test(new_test_id){
 

    localStorage.setItem("milktest " + parseInt(new_test_id), "unset");
    //localStorage.setItem("milktest " + parseInt(new_test_id), JSON.stringify(json_text));
    list_test();

}




function send_DB(){


    var long = localStorage.length;

    //var count=0,t_key="";


    //是甚麼身分就丟哪個DB
    var test_url="https://eva-dev.bettermilk.com.tw/normalComments/create";

    if(localStorage.getItem("milk_role")=="expert"){
        test_url="https://eva-dev.bettermilk.com.tw/expertComments/create";
    }


    for (var a = 0; a < long; a++){

        var key_name="";
        key_name=localStorage.key(a);



        //是牛奶品鑑
        if (key_name != null && key_name.startsWith('milktest')) {

            

            //是有填資料的牛奶品鑑
            if(localStorage.getItem(key_name)!="unset"){

                window.alert(localStorage.getItem(key_name));


                $.ajax({
                    url: test_url,
                    headers: {
                        "Authorization": localStorage.getItem("milk_token")
                    },
                    type: "POST",
                    tokenFlag: true,
                    data : localStorage.getItem(key_name),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    
                
                    success: function(){
                                                
                        window.alert(key_name+"ok");
    
                        //window.location.href = "two_ways.html";
    
                    },
                    
                    error: function(){
                        window.alert('上傳評論失敗');    
                        
    
                    }
                });

            }


        }

        //
        //localStorage.removeItem(key_name);
        

    }

    sleep(500);
    localStorage.removeItem("milk_event");
    window.alert("上傳完成");
    window.location.href = "two_ways.html";

}

function sleep(milliseconds) { 
    var start = new Date().getTime(); 
    while(1)
        if ((new Date().getTime() - start) > milliseconds)
            break;
}





