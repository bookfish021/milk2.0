function send_message(){

    for(var a=defectf.length-1;a>=0;a--){
        if(defectf[a]==1){
            DefectNegativeShow.unshift(defectform[a]);
        }
    }
    
    var json_text={
        
        "name" : namec,
        "date" : datec,
        "color" : colorc,
        "score" : final_score,
        "score_detail":  [AromaScore,FlavorScore,SweetnessScore,BodyScore,TextureScore,AftertasteScore,BalanceScore,DefectScore],
        "comment" : {
            "positive" : [AromaPositiveShow,FlavorPositiveShow,SweetnessPositiveShow,BodyPositiveShow,TexturePositiveShow,AftertastePositiveShow,BalancePositiveShow],
            "negative" :  [AromaNegativeShow,FlavorNegativeShow,SweetnessNegativeShow,BodyNegativeShow,TextureNegativeShow,AftertasteNegativeShow,BalanceNegativeShow,DefectNegativeShow]
        }
        
    };


    var json_text={
        "productName": namec,
        "date":datec,
        "color":colorc,
        "score":final_score,
        "aromaScore":AromaScore,
        "flavorScore":FlavorScore,
        "sweetnessScore":SweetnessScore,
        "bodyScore":BodyScore,
        "textureScore":TextureScore,
        "aftertasteScore":AftertasteScore,
        "balanceScore":BalanceScore,
        "defectScore":DefectScore,
        "aromaPositive":AromaPositiveShow,
        "flavorPositive":FlavorPositiveShow,
        "sweetnessPositive":SweetnessPositiveShow,
        "bodyPositive":BodyPositiveShow,
        "texturePositive":TexturePositiveShow,
        "aftertastePositive":AftertastePositiveShow,
        "balancePositive":BalancePositiveShow,
        "aromaNegative":AromaNegativeShow,
        "flavorNegative":FlavorNegativeShow,
        "sweetnessNegative":SweetnessNegativeShow,
        "bodyNegative":BodyNegativeShow,
        "textureNegative":TextureNegativeShow,
        "aftertasteNegative":AftertasteNegativeShow,
        "balanceNegative":BalanceNegativeShow,
        "defectNegative":DefectNegativeShow
      };

    //window.alert(json_text);



    localStorage.setItem("milktest " + parseInt(test_id), JSON.stringify(json_text));


    window.location.href = "form.html";


    //alert(typeof select_range[0])
    console.log(
        JSON.stringify(json_text)  // 序列化成 JSON 字串
    );
    //document.getElementById("menu").innerHTML="";
    /*
    $.ajax({
        url: "http://127.0.0.1:5000/prediction",
        type: "POST",
        data : JSON.stringify(json_text),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
       
        success: function(data){
            console.log(data);
        },
        
        error: function(){
        //window.alert('uh oh :(');        
        }
    });
    
    show();
    */
}
