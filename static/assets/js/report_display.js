var milk_product=["豐樂","A2","小嘉明","大嘉明","幸運兒","許慶良","雙福","桂芳","milk"];



var fack_data={
    "data":[
        {"productName":"豐樂","date":"2022-08-17","color":4,"score":21.5,"aromaScore":8.5,"flavorScore":1.5,"sweetnessScore":3,"bodyScore":8.5,"textureScore":0.5,"aftertasteScore":8,"balanceScore":7,"defectScore":10,"aromaPositive":[],"flavorPositive":["風味不錯"],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":["平衡優"],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["餘韻差"],"balanceNegative":[],"defectNegative":["塑膠"]},
        {"productName":"A2","date":"2022-08-09","color":0,"score":35.5,"aromaScore":8.5,"flavorScore":9,"sweetnessScore":8,"bodyScore":2,"textureScore":9,"aftertasteScore":1,"balanceScore":1,"defectScore":20,"aromaPositive":[],"flavorPositive":["玉米香"],"sweetnessPositive":["十分甜"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["怪怪的"],"balanceNegative":[],"defectNegative":["塑膠","臭"]},
        {"productName":"小嘉明","date":"2022-08-09","color":0,"score":68.5,"aromaScore":10,"flavorScore":10,"sweetnessScore":7.5,"bodyScore":4,"textureScore":8,"aftertasteScore":8.5,"balanceScore":3,"defectScore":0,"aromaPositive":["奶香味","草香"],"flavorPositive":[],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":["嘉明最對味"],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":["種種的"],"textureNegative":[],"aftertasteNegative":[],"balanceNegative":[],"defectNegative":[]},
        {"productName":"大嘉明","date":"2022-08-09","color":0,"score":67,"aromaScore":8.5,"flavorScore":10,"sweetnessScore":7.5,"bodyScore":7,"textureScore":7.5,"aftertasteScore":1.5,"balanceScore":7.5,"defectScore":10,"aromaPositive":[],"flavorPositive":[],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":[],"balanceNegative":[],"defectNegative":["沒見過"]},
        {"productName":"幸運兒","date":"2022-08-09","color":0,"score":55,"aromaScore":10,"flavorScore":0.5,"sweetnessScore":8.5,"bodyScore":8.5,"textureScore":10,"aftertasteScore":8,"balanceScore":0.5,"defectScore":0,"aromaPositive":["是黃色的"],"flavorPositive":[],"sweetnessPositive":["1","2","3","4","5"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["4","3","2","1","0"],"balanceNegative":[],"defectNegative":[]},
        {"productName":"許慶良","date":"2022-08-09","color":0,"score":49,"aromaScore":9,"flavorScore":1.5,"sweetnessScore":8,"bodyScore":2.5,"textureScore":2.5,"aftertasteScore":8,"balanceScore":8,"defectScore":10,"aromaPositive":["爸爸"],"flavorPositive":["的"],"sweetnessPositive":["最愛"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":["家樂福有賣"],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":["每次"],"textureNegative":["都"],"aftertasteNegative":["買他"],"balanceNegative":[],"defectNegative":["酸味"]},
        {"productName":"雙福","date":"2022-08-09","color":0,"score":56.5,"aromaScore":8,"flavorScore":8.5,"sweetnessScore":1.5,"bodyScore":8.5,"textureScore":1.5,"aftertasteScore":9,"balanceScore":9.5,"defectScore":10,"aromaPositive":["每"],"flavorPositive":["一格"],"sweetnessPositive":["都"],"bodyPositive":["填"],"texturePositive":["起來"],"aftertastePositive":["啦"],"balancePositive":["!!"],"aromaNegative":["看看"],"flavorNegative":["爆炸"],"sweetnessNegative":["多"],"bodyNegative":["評價"],"textureNegative":["的時候"],"aftertasteNegative":["會"],"balanceNegative":["發生甚麼"],"defectNegative":["事"]},
        {"productName":"桂芳","date":"2022-08-09","color":0,"score":49.5,"aromaScore":8.5,"flavorScore":1,"sweetnessScore":8.5,"bodyScore":3.5,"textureScore":8.5,"aftertasteScore":8,"balanceScore":2,"defectScore":0,"aromaPositive":["最後"],"flavorPositive":["一個"],"sweetnessPositive":[],"bodyPositive":["快樂"],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":["啦"],"bodyNegative":[],"textureNegative":["評價"],"aftertasteNegative":["看看"],"balanceNegative":["就好"],"defectNegative":[]}
    ]

};

var m_data={};
var e_data={};



function start(){

    //window.alert(localStorage.getItem("milk_token"));

    //抓專家綜合評論 
    
    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/result.json",
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",
        
    
        success: function(data){
                                    
            //window.alert("ok");

            //console.log(JSON.stringify(data));

            expert_report(data);
            e_data=data;

        },
        
        error: function(){

            window.alert('專家評論失敗');    
        
        }
    });

    const today = new Date().getTime();

    var json_text={

        "startDate":count_time(2),
        "endDate":today,
        "limit":100,
        "skip":0
    };

    //"startDate":count_time(2),"endDate":today,
    //window.alert(count_time(2));
    


    //查看自己評論
    $.ajax({
        url: "https://eva-dev.bettermilk.com.tw/normalComments/list",
        headers: {
            "Authorization": localStorage.getItem("milk_token")
        },
        type: "POST",
        tokenFlag: true,
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        
    
        success: function(data){
                                    
            //console.log(JSON.stringify(data));
            
            
            if(localStorage.getItem("milk_role")=="expert"){
                data=data.expertComments;
                
            }

            else{
                data=data.normalComments;
                
                //console.log(JSON.stringify(data));
            }

            //data=JSON.stringify(data);
            //console.log(data.length())
            
            my_report_list(data);
            my_report_chart(data);

            m_data=data;

        },
        
        error: function(){

            window.alert('查看一般評論失敗');    
        
        }
    });

    

}


function all_comment(data,type){

    //window.alert(data+"OUO");
    var commentArr=[];

    var mes="";

    
    if(type==1){
        //window.alert(data.aromaPositive);
        commentArr=data.aromaPositive;
        commentArr=(commentArr).concat(data.flavorPositive,data.sweetnessPositive,data.bodyPositive).concat(data.texturePositive,data.aftertastePositive,data.balancePositive);
        
    }
    else{
        
        commentArr=data.aromaNegative;
        commentArr=(commentArr).concat(data.flavorNegative,data.sweetnessNegative,data.bodyNegative,data.textureNegative,data.aftertasteNegative,data.balanceNegative,test.defectNegative);
    }

    

    
    for(var a=0;a<commentArr.length;a++){
        if(a!=0){
            mes+="、";
        }
        mes+=commentArr[a];
        
    } 
    

    return mes;
}




function my_report_chart(data){

    //

    var mes="";
    //data=m_data;

    //window.alert(data);

    for(var a=0;data[a]!=null;a++){

        test=data[a];
        //window.alert(test);

        mes+='<div class="box"><div class="one_test"><div class="test_detail">'
        +'<h4><div class="test_title test_detail_row">品項 : <span class="test_detail_output">'+test.productName+'</span></div>'
        +'<div class="test_detail_row">總分 : <span class="test_detail_output">'+test.score+'</span></div>'
        +'<div class="test_detail_row test_detail_comment" style="background-color:#FBF5DF;">正面描述 : <br>'+all_comment(test,1)+'</div>'
        +'<div class="test_detail_row test_detail_comment" style="background-color:#F1F8FE;">負面描述 : <br>'+all_comment(test,0)+'</div></div></h4>'
        +'<div style="display:inline-block; "><canvas id="myChart_'+a+'" width="20"></canvas></div></div>'
        +'</div>';

    }


    document.getElementById("container_mychart").innerHTML=mes;


        /* radar display */
        for(var a=0;data[a]!=null;a++){

            temp=a;
    
            test=data[a];
    
                marksData = {
                    labels: ["香氣", "風味", "甜感", "體質感", "質地", "餘韻","平衡性"],
                    datasets: [{
                      label: test.productName,
                      backgroundColor: "rgba(200,0,0,0.2)",
                      data: [test.aromaScore,test.flavorScore,test.sweetnessScore,test.bodyScore,test.textureScore,test.aftertasteScore,test.balanceScore]
                    }]
                  };
        
                new Chart(document.getElementById("myChart_"+temp), {
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

function my_report_list(data){

    //

    var mes="";
    //data=JSON.parse(data);
    //data=m_data;

    mes+='<div class="list_box"><table><thead><th>評鑑日期</th><th>評鑑項目</th><th>批號</th><th>總分</th>'
        +'<th>香氣</th><th>風味</th><th>甜感</th><th>體質感</th><th>口感</th><th>餘韻</th><th>平衡性</th><th>瑕疵</th>'
        +'<th>正面評價</th><th>負面評價</th></thead><tbody>';

    for(var a=0;data[a]!=null;a++){

        test=data[a];

        //test=JSON.parse(test);
        //window.alert(test+"a")

        mes+='<tr><th>評鑑日期</th><th>'+test.productName+'</th><th>'+test.date+'</th><th>'+test.score+'</th>'
            +'<th>'+test.aromaScore+'</th><th>'+test.flavorScore+'</th><th>'+test.sweetnessScore+'</th><th>'+test.bodyScore+'</th>'
            +'<th>'+test.textureScore+'</th><th>'+test.aftertasteScore+'</th><th>'+test.balanceScore+'</th><th>'+test.defectScore+'</th>'
            +'<th>'+all_comment(test,1)+'</th><th>'+all_comment(test,0)+'</th></tr>';

    }

    mes+='</tbody></table></div>';

    document.getElementById("container_mylist").innerHTML=mes;


}


function expert_report(data){

    //
    
    var mes="";
    //data=e_data;

    for(var a=0;a<milk_product.length;a++){

        test=data[milk_product[a]];

        if(test!=null){

            mes+='<div class="box"><div class="one_test"><div class="test_detail">'
                +'<h4><div class="test_title test_detail_row">品項 : <span class="test_detail_output">'+milk_product[a]+'</span></div>'
                +'<div class="test_detail_row">總分 : <span class="test_detail_output">'+test.avg_score+'</span></div>'
                +'<div class="test_detail_row test_detail_comment" style="background-color:#FBF5DF;">正面描述 : <br>'+(test.positive).join()+'</div>'
                +'<div class="test_detail_row test_detail_comment" style="background-color:#F1F8FE;">負面描述 : <br>'+(test.negative).join()+'</div></div></h4>'
                +'<div style="display:inline-block; "><canvas id="expertChart_'+a+'" width="20"></canvas></div></div>'
                +'</div>';


        }


    }


    document.getElementById("container_expert").innerHTML=mes;


    /* radar display */
    for(var a=0;a<milk_product.length;a++){

        test=data[milk_product[a]];

        if(test!=null){

            temp=a;
    
            //test=data[a];
    
                marksData = {
                    labels: ["香氣", "風味", "甜感", "體質感", "質地", "餘韻","平衡性"],
                    datasets: [{
                      label: milk_product[a],
                      backgroundColor: "rgba(200,0,0,0.2)",
                      data: [test.avg_aromaScore,test.avg_flavorScore,test.avg_sweetnessScore,test.avg_bodyScore,test.avg_textureScore,test.avg_aftertasteScore,test.avg_balanceScore]
                    }]
                };
        
                new Chart(document.getElementById("expertChart_"+temp), {
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


function count_time(mode){

    var duration=1;
    const cc = new Date().getTime()
    if(mode==1){ //一年
        duration = 365 * 24 * 3600 * 1000;
    }

    if(mode==2){ //半年
        duration = 365 / 2 * 24 * 3600 * 1000;
    }

    if(mode==3){ //三個月
        duration = 365 / 4 * 24 * 3600 * 1000;
    }

    if(mode==3){ //一個月
        duration = 365 / 12 * 24 * 3600 * 1000;
    }
    
    var pastResult = cc - duration;
    var pastDate = new Date(pastResult);
    pastYear = pastDate.getFullYear(),
    pastMonth = pastDate.getMonth() + 1,
    pastDay = pastDate.getDate();
    console.debug('过去半年时间', pastYear + '-' + pastMonth + '-' + pastDay)

    return pastDate;
}

function my_list(){

    document.getElementById("container_mychart").style.display="none";

    document.getElementById("container_expert").style.display="none";

    document.getElementById("container_mylist").style.display="flex";
}

function my_chart(){
    document.getElementById("container_mylist").style.display="none";

    document.getElementById("container_expert").style.display="none";

    document.getElementById("container_mychart").style.display="flex";
}

function expert_chart(){

    document.getElementById("container_mychart").style.display="none";

    document.getElementById("container_expert").style.display="flex";

    document.getElementById("container_mylist").style.display="none";
}



window.addEventListener("load",start, false);


