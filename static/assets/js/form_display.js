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
                test=JSON.parse(test);

                mes+='<div class="box">'
                +'<span class="test_title">'+test.name+'</span>(批號 : <span>'+test.date+'</span>)的評測結果</br>'
                +'<div>總分<div>'+test.score+'</div></div></br>'
                +'<table class="test_table  total">'
                +'<thead><tr><th>香氣</br>Aroma</th><th>風味</br>Flavor</th><th>甜感</br>Sweetness</th><th>體質感</br>Body</th></tr></thead>'
                +'<tbody><tr><td class="score_t" width="100px">'+test.score_detail[0]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[1]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[2]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[3]+'</td></tr>'
                +'<tr><td id="Aroma_Tatol" class="comment_t">'+comment_detail(test.comment,0)+'</td>'
                +'<td id="Flavor_Tatol" class="comment_t">'+comment_detail(test.comment,1)+'</td>'
                +'<td id="Sweetness_Tatol" class="comment_t">'+comment_detail(test.comment,2)+'</td>'
                +'<td id="Body_Tatol" class="comment_t">'+comment_detail(test.comment,3)+'</td></tr></tbody>'
                +'<thead><tr><th>質地</br>Texture</th><th>餘韻</br>Aftertaste</th><th>平衡性</br>Balance</th><th>瑕疵</br>Defect</th></tr></thead>'
                +'<tbody><tr><td class="score_t" width="100px">'+test.score_detail[4]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[5]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[6]+'</td>'
                +'<td class="score_t" width="100px">'+test.score_detail[7]+'</td></tr>'
                +'<tr><td id="Texture_Tatol" class="comment_t">'+comment_detail(test.comment,4)+'</td>'
                +'<td id="Aftertaste_Tatol" class="comment_t">'+comment_detail(test.comment,5)+'</td>'
                +'<td id="Balance_Tatol" class="comment_t">'+comment_detail(test.comment,6)+'</td>'
                +'<td id="Defect_Tatol" class="comment_t">'+comment_detail(test.comment,7)+'</td></tr></tbody></table>'
                +'<div style="display:inline-block; "><canvas id="marksChart_'+temp+'" width="20"></canvas></div>'
                +'<div><a href="cupping.html?test='+temp+'"><span class="change_test">編輯</span></a><span class="change_test" onclick="delete_test('+temp+')">刪除</span></div></div>';
                
           



                




            }

        }

        
        

    

    
    mes+='<div class="box button_type" onclick="add_new_test('+(count+1)+')">增加評鑑項目</div>';

    document.getElementById("container").innerHTML=mes;


    //var marksCanvas = document.getElementById("marksChart");

   
    for(const [key, value] of Object.entries(data)){

        temp=key.substring(9);

        test=localStorage.getItem(key);

        if(test!="unset"){
            test=JSON.parse(test);


            marksData = {
                labels: ["香氣", "風味", "甜感", "體質感", "質地", "餘韻","平衡性"],
                datasets: [{
                  label: "Student A",
                  backgroundColor: "rgba(200,0,0,0.2)",
                  data: [test.score_detail[0], test.score_detail[1], test.score_detail[2], test.score_detail[3], test.score_detail[4], test.score_detail[5], test.score_detail[6]]
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
                        suggestedMin: 5,
                        suggestedMax: 10,
                        ticks: {stepSize: 1},
                        grid: {circular: true,
                            
                        },
                        
                    
                    }
                }
                }
            });

        }


        

    }



}

function comment_detail(comment,m){

    mes="";

    if(m!=7){

        for(var a=0;a<(comment.positive[m]).length;a++){
            mes+='<div class="PS"># '+comment.positive[m][a]+'</div>';
        } 

        
    }

    for(var a=0;a<(comment.negative[m]).length;a++){
        mes+='<div class="NS"># '+comment.negative[m][a]+'</div>';
    } 


    return(mes);
}


function delete_test(key){

    window.alert(key);

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

    window.location.href = "form.html";

}


function add_new_test(new_test_id){

    var json_text={
        
        "name" : "",
        "date" : "",
        "color" : "",
        "score" : "",
        "score_detail":  [,,,,,,,],
        "comment" : {
            "positive" : [[],[],[],[],[],[],[]],
            "negative" :  [[],[],[],[],[],[],[],[]]
        }
        
    };

    localStorage.setItem("milktest " + parseInt(new_test_id), "unset");
    //localStorage.setItem("milktest " + parseInt(new_test_id), JSON.stringify(json_text));
    list_test();

}




