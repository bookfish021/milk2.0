
var fack_data={
    "data":[
        {"productName":"豐樂","date":"2022-08-17","color":4,"score":21.5,"aromaScore":8.5,"flavorScore":1.5,"sweetnessScore":3,"bodyScore":8.5,"textureScore":0.5,"aftertasteScore":8,"balanceScore":7,"defectScore":10,"aromaPositive":[],"flavorPositive":["風味不錯"],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":["平衡優"],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["餘韻差"],"balanceNegative":[],"defectNegative":["塑膠"]},
        {"productName":"A2","date":"","color":0,"score":35.5,"aromaScore":8.5,"flavorScore":9,"sweetnessScore":8,"bodyScore":2,"textureScore":9,"aftertasteScore":1,"balanceScore":1,"defectScore":20,"aromaPositive":[],"flavorPositive":["玉米香"],"sweetnessPositive":["十分甜"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["怪怪的"],"balanceNegative":[],"defectNegative":["塑膠","臭"]},
        {"productName":"小嘉明","date":"","color":0,"score":68.5,"aromaScore":10,"flavorScore":10,"sweetnessScore":7.5,"bodyScore":4,"textureScore":8,"aftertasteScore":8.5,"balanceScore":3,"defectScore":0,"aromaPositive":["奶香味","草香"],"flavorPositive":[],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":["嘉明最對味"],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":["種種的"],"textureNegative":[],"aftertasteNegative":[],"balanceNegative":[],"defectNegative":[]},
        {"productName":"大嘉明","date":"","color":0,"score":67,"aromaScore":8.5,"flavorScore":10,"sweetnessScore":7.5,"bodyScore":7,"textureScore":7.5,"aftertasteScore":1.5,"balanceScore":7.5,"defectScore":10,"aromaPositive":[],"flavorPositive":[],"sweetnessPositive":[],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":[],"balanceNegative":[],"defectNegative":["沒見過"]},
        {"productName":"幸運兒","date":"","color":0,"score":55,"aromaScore":10,"flavorScore":0.5,"sweetnessScore":8.5,"bodyScore":8.5,"textureScore":10,"aftertasteScore":8,"balanceScore":0.5,"defectScore":0,"aromaPositive":["是黃色的"],"flavorPositive":[],"sweetnessPositive":["1","2","3","4","5"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":[],"textureNegative":[],"aftertasteNegative":["4","3","2","1","0"],"balanceNegative":[],"defectNegative":[]},
        {"productName":"許慶良","date":"","color":0,"score":49,"aromaScore":9,"flavorScore":1.5,"sweetnessScore":8,"bodyScore":2.5,"textureScore":2.5,"aftertasteScore":8,"balanceScore":8,"defectScore":10,"aromaPositive":["爸爸"],"flavorPositive":["的"],"sweetnessPositive":["最愛"],"bodyPositive":[],"texturePositive":[],"aftertastePositive":[],"balancePositive":["家樂福有賣"],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":[],"bodyNegative":["每次"],"textureNegative":["都"],"aftertasteNegative":["買他"],"balanceNegative":[],"defectNegative":["酸味"]},
        {"productName":"雙福","date":"","color":0,"score":56.5,"aromaScore":8,"flavorScore":8.5,"sweetnessScore":1.5,"bodyScore":8.5,"textureScore":1.5,"aftertasteScore":9,"balanceScore":9.5,"defectScore":10,"aromaPositive":["每"],"flavorPositive":["一格"],"sweetnessPositive":["都"],"bodyPositive":["填"],"texturePositive":["起來"],"aftertastePositive":["啦"],"balancePositive":["!!"],"aromaNegative":["看看"],"flavorNegative":["爆炸"],"sweetnessNegative":["多"],"bodyNegative":["評價"],"textureNegative":["的時候"],"aftertasteNegative":["會"],"balanceNegative":["發生甚麼"],"defectNegative":["事"]},
        {"productName":"桂芳","date":"","color":0,"score":49.5,"aromaScore":8.5,"flavorScore":1,"sweetnessScore":8.5,"bodyScore":3.5,"textureScore":8.5,"aftertasteScore":8,"balanceScore":2,"defectScore":0,"aromaPositive":["最後"],"flavorPositive":["一個"],"sweetnessPositive":[],"bodyPositive":["快樂"],"texturePositive":[],"aftertastePositive":[],"balancePositive":[],"aromaNegative":[],"flavorNegative":[],"sweetnessNegative":["啦"],"bodyNegative":[],"textureNegative":["評價"],"aftertasteNegative":["看看"],"balanceNegative":["就好"],"defectNegative":[]}
    ]

}



function start(){


    var mes="";
    data=fack_data.data;

    for(var a=0;a<data.length;a++){

        test=data[a];

        mes+='<div class="box"><div class="one_test"><div class="test_detail">'
        +'<h4><div class="test_title test_detail_row">品項 : <span class="test_detail_output">'+test.productName+'</span></div>'
        +'<div class="test_detail_row">總分 : <span class="test_detail_output">'+test.score+'</span></div>'
        +'<div class="test_detail_row test_detail_comment" style="background-color:#FBF5DF;">正面描述 : <br>'+all_comment(test,1)+'</div>'
        +'<div class="test_detail_row test_detail_comment" style="background-color:#F1F8FE;">負面描述 : <br>'+all_comment(test,0)+'</div></div></h4>'
        +'<div style="display:inline-block; "><canvas id="marksChart_'+a+'" width="20"></canvas></div></div>'
        +'</div>';


    }

    

   

    document.getElementById("container").innerHTML=mes;


        /* radar display */
        for(var a=0;a<data.length;a++){

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









window.addEventListener("load",start, false);