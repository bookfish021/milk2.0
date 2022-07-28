var test_id=0;

var namec="";
var datec="";
var colorc=0;
var final_score=0;

var AromaScore=0;
var FlavorScore=0;
var SweetnessScore=0;
var BodyScore=0;
var TextureScore=0;
var AftertasteScore=0;
var BalanceScore=0;
var DefectScore=0;

var Score=[0,0,0,0,0,0,0];

var AromaPositiveShow=[];
var FlavorPositiveShow=[];
var SweetnessPositiveShow=[];
var BodyPositiveShow=[];
var TexturePositiveShow=[];
var AftertastePositiveShow=[];
var BalancePositiveShow=[];


var AromaNegativeShow=[];
var FlavorNegativeShow=[];
var SweetnessNegativeShow=[];
var BodyNegativeShow=[];
var TextureNegativeShow=[];
var AftertasteNegativeShow=[];
var BalanceNegativeShow=[];
var DefectNegativeShow=[];

var defectform=["苦味","酸味","塑膠","霉味","金屬味"];
var defectf=[0,0,0,0,0];

var data="";



function choosename(){

    //tt=event.target.id;
    //window.alert(tt);
    var test=document.getElementById("input_name").value;

    namec=test;

    //document.getElementById("test_name").innerHTML=namec;
}



function choosedate(event){
    tt=event.target.id;
    datec=document.getElementById(tt).value;

    //document.getElementById("test_date").innerHTML=datec;

}



function  choosecolor(event){
    
    tt=event.target.id;

    temp=tt.split("_");

    colorc=parseInt(temp[1]);

    //window.alert(colorc);

    for(var a=1;a<=5;a++){

        var test=document.getElementById(temp[0]+"_"+a);

        if(a==colorc){
            test.style.border="2px solid #000000";
        }

        else{
            test.style.border="2px solid rgb(196, 195, 195)";
        }

    }


}



//input score
function inputScore(event){

    tt=event.target.id;
    //window.alert(tt);

    

    temp=tt.replace(/_/g,'');
    var score=0;
    var targetname="";
    targetname=temp.substr(0,5);

    score=document.getElementById(tt).value;
    //window.alert(targetname);

    m=tt[1];
    if(m=="r"){AromaScore=parseFloat(score);}
    else if(m=="l"){FlavorScore=parseFloat(score);}
    else if(m=="w"){SweetnessScore=parseFloat(score);}
    else if(m=="o"){BodyScore=parseFloat(score);}
    else if(m=="e"){TextureScore=parseFloat(score);}
    else if(m=="f"){AftertasteScore=parseFloat(score);}
    else if(m=="a"){BalanceScore=parseFloat(score);}

    document.getElementById(tt+"_Show").innerHTML=score;
    //document.getElementById(tt+"_Tatol").innerHTML=score;

    showTatolScore(targetname);

    

}




//input hastag
function inputHastag(event){

    if(event.key === "Enter"){

        tt=event.target.id;
        text=document.getElementById(tt).value;
        document.getElementById(tt).value="";

        tt+="_Show";

        temp=tt.replace(/_/g,'');

        array=choosearray(temp);

        array.push(text);
        

        showArray(tt, array, temp);
    }
    
}


function add_defect(event){

    tt=event.target.id;
    temp=tt.split("_");

    m=parseInt(temp[1])

    var test=document.getElementById(tt);

    if(defectf[m]==0){

        defectf[m]=1;
        test.style.border="3px solid #f1f8fe";
        test.style.background ="#f1f8fe";

    }

    else{

        defectf[m]=0;
        test.style.border="3px solid #ffffff";
        test.style.background="#ffffff";

    }

    showDefectScore();
    //showTatolComment("Defect");
    

}


function choosearray(arrayname){

    if(arrayname.match('Positive')!=null){
        if(arrayname.match('Aroma')!=null){return AromaPositiveShow;}
        else if(arrayname.match('Flavor')!=null){return FlavorPositiveShow;}
        else if(arrayname.match('Sweetness')!=null){return SweetnessPositiveShow;}
        else if(arrayname.match('Body')!=null){return BodyPositiveShow;}
        else if(arrayname.match('Texture')!=null){return TexturePositiveShow;}
        else if(arrayname.match('Aftertaste')!=null){return AftertastePositiveShow;}
        else if(arrayname.match('Balance')!=null){return BalancePositiveShow;}
        
    }
    else{
        if(arrayname.match('Aroma')!=null){return AromaNegativeShow;}
        else if(arrayname.match('Flavor')!=null){return FlavorNegativeShow;}
        else if(arrayname.match('Sweetness')!=null){return SweetnessNegativeShow;}
        else if(arrayname.match('Body')!=null){return BodyNegativeShow;}
        else if(arrayname.match('Texture')!=null){return TextureNegativeShow;}
        else if(arrayname.match('Aftertaste')!=null){return AftertasteNegativeShow;}
        else if(arrayname.match('Balance')!=null){return BalanceNegativeShow;}
        else{return DefectNegativeShow;}
    }
    
}




//deletHastag
function deletHastag(event){

    tt=event.target.id;
    //window.alert("id="+tt);

    text=tt.split("_");
    //window.alert(text[1]);

    array=choosearray(text[0]);
    //window.alert("array: "+array);

    //delete the hastag which is choosen
    array.splice(parseInt(text[1]), 1);
    //window.alert("array: "+array);
   
    temp=text[0].toString();
    //window.alert("id*="+temp);
    temp=temp.splice(-4,0,"_");
    temp=temp.splice(-13,0,"_");
    //window.alert("id="+temp);

    showArray( temp, array, text[0]);
    
}

//refresh and show the hashtag
function showArray(showplace, array, arrayname){

    classname="NS";

    if(arrayname.match('Positive')!=null){
        classname="PS";
    }

    show = document.getElementById(showplace);
        hashtag="";
        for(var a=0;a<array.length;a++){
            hashtag+='<div id="'+arrayname+'_'+a+'" class="'+classname+'"># '+array[a]
                +'<button id="'+arrayname+'_'+a+'_C" type="button" class="'+classname+'C" onclick="deletHastag(event)">x</button></div>';
        }
    //window.alert(hashtag);
    show.innerHTML=hashtag;

    text=showplace.split("_");
    //showTatolComment(text[0]);


    //count Defect score
    if(arrayname.match('Defect')!=null){

        showDefectScore();

    }


}

function showDefectScore(){

    DefectScore=0;

    for(var a=0;a<defectf.length;a++){
        if(defectf[a]==1){
            DefectScore+=10;
        }
    }

    DefectScore+=(DefectNegativeShow.length)*10;

    document.getElementById("Defect_Score_Show").innerHTML=parseInt(DefectScore);
    //document.getElementById("Defect_Score_Tatol").innerHTML=parseInt(-DefectScore);


}



function showTatolScore(mask){


    var a=0;
    a=parseFloat(AromaScore+(FlavorScore+SweetnessScore)*2+BodyScore+TextureScore+AftertasteScore+BalanceScore-DefectScore);
    final_score=parseFloat(a);

    document.getElementById("final_score").innerHTML=parseFloat(final_score);
    
    
}


/* Tatol table deleted
function showTatolComment(feature){

    //window.alert(feature);

    show = document.getElementById(feature+"_Tatol");
    hashtag="";

    if(feature.match('Defect')!=null){

        array=eval(feature+"NegativeShow");

        for(var a=0;a<defectf.length;a++){
            if(defectf[a]==1){
                hashtag+='<div class="NS"># '+defectform[a]+'</div>';
            }
        }
        
        for(var a=0;a<array.length;a++){
            hashtag+='<div class="NS"># '+array[a]+'</div>';
        } 

        
        
    }


    else{

        array=eval(feature+"PositiveShow");

        //window.alert(array.length);

        for(var a=0;a<array.length;a++){
            hashtag+='<div class="PS"># '+array[a]+'</div>';
        } 

        array=eval(feature+"NegativeShow");

        //window.alert(array.length);

        for(var a=0;a<array.length;a++){
            hashtag+='<div class="NS"># '+array[a]+'</div>';
        } 

    }


    //window.alert(hashtag);
    show.innerHTML=hashtag;

}
*/


function test_number(){

    var thisURL = document.URL;      
    var  getval =thisURL.split('?')[1];    
    test_id= getval.split("=")[1];


    if (localStorage.getItem("milktest "+parseInt(test_id)) != "unset") {

        data=localStorage.getItem("milktest "+test_id);
        //window.alert(data);
        data=JSON.parse(data);


        //name
        namec=data.productName;
        document.getElementById("input_name").value=namec;
        //document.getElementById("test_name").innerHTML=namec;

        //date
        datec=data.date;
        document.getElementById("test_date_choose").value=datec;
        //document.getElementById("test_date").innerHTML=datec;


        //t score
        final_score=data.score;
        document.getElementById("final_score").innerHTML=parseFloat(final_score);


        //color
        colorc=data.color;
        if(colorc!=0){
            //window.alert(colorc);
            document.getElementById("color_"+colorc).style.border="2px solid #000000";
        }
        


        //score
        AromaScore=data.aromaScore;
        document.getElementById("Aroma_Score_Show").innerHTML=AromaScore;
        //document.getElementById("Aroma_Score_Tatol").innerHTML=AromaScore;

        FlavorScore=data.flavorScore;
        document.getElementById("Flavor_Score_Show").innerHTML=FlavorScore;
        //document.getElementById("Flavor_Score_Tatol").innerHTML=FlavorScore;

        SweetnessScore=data.sweetnessScore;
        document.getElementById("Sweetness_Score_Show").innerHTML=SweetnessScore;
        //document.getElementById("Sweetness_Score_Tatol").innerHTML=SweetnessScore;

        BodyScore=data.bodyScore;
        document.getElementById("Body_Score_Show").innerHTML=BodyScore;
        //document.getElementById("Body_Score_Tatol").innerHTML=BodyScore;

        TextureScore=data.textureScore;
        document.getElementById("Texture_Score_Show").innerHTML=TextureScore;
        //document.getElementById("Texture_Score_Tatol").innerHTML=TextureScore;

        AftertasteScore=data.aftertasteScore;
        document.getElementById("Aftertaste_Score_Show").innerHTML=AftertasteScore;
        //document.getElementById("Aftertaste_Score_Tatol").innerHTML=AftertasteScore;

        BalanceScore=data.balanceScore;
        document.getElementById("Balance_Score_Show").innerHTML=BalanceScore;
        //document.getElementById("Balance_Score_Tatol").innerHTML=BalanceScore;

        DefectScore=data.defectScore;
        document.getElementById("Defect_Score_Show").innerHTML=DefectScore;
        //document.getElementById("Defect_Score_Tatol").innerHTML=(-DefectScore);


        //comment
        AromaPositiveShow=data.aromaPositive;
        showArray("Aroma_Positive_Show", AromaPositiveShow, "AromaPositiveShow");

        FlavorPositiveShow=data.flavorPositive;
        showArray("Flavor_Positive_Show", FlavorPositiveShow, "FlavorPositiveShow");

        SweetnessPositiveShow=data.sweetnessPositive;
        showArray("Sweetness_Positive_Show", SweetnessPositiveShow, "SweetnessPositiveShow");

        BodyPositiveShow=data.bodyPositive;
        showArray("Body_Positive_Show", BodyPositiveShow, "BodyPositiveShow");

        TexturePositiveShow=data.texturePositive;
        showArray("Texture_Positive_Show", TexturePositiveShow, "TexturePositiveShow");

        AftertastePositiveShow=data.aftertastePositive;
        showArray("Aftertaste_Positive_Show", AftertastePositiveShow, "AftertastePositiveShow");

        BalancePositiveShow=data.balancePositive;
        showArray("Balance_Positive_Show", BalancePositiveShow, "BalancePositiveShow");


        AromaNegativeShow=data.aromaNegative;
        showArray("Aroma_Negative_Show", AromaNegativeShow, "AromaNegativeShow");

        FlavorNegativeShow=data.flavorNegative;
        showArray("Flavor_Negative_Show", FlavorNegativeShow, "FlavorNegativeShow");

        SweetnessNegativeShow=data.sweetnessNegative;
        showArray("Sweetness_Negative_Show", SweetnessNegativeShow, "SweetnessNegativeShow");

        BodyNegativeShow=data.bodyNegative;
        showArray("Body_Negative_Show", BodyNegativeShow, "BodyNegativeShow");

        TextureNegativeShow=data.textureNegative;
        showArray("Texture_Negative_Show", TextureNegativeShow, "TextureNegativeShow");

        AftertasteNegativeShow=data.aftertasteNegative;
        showArray("Aftertaste_Negative_Show", AftertasteNegativeShow, "AftertasteNegativeShow");

        BalanceNegativeShow=data.balanceNegative;
        showArray("Balance_Negative_Show", BalanceNegativeShow, "BalanceNegativeShow");


        
        DefectNegativeShow=data.defectNegative;

        for(var a=0;a<DefectNegativeShow.length;a++){
            var index = defectform.indexOf(DefectNegativeShow[a]);

            if(index!=-1){ //代表原本有
                DefectNegativeShow.splice(a, 1);
                a--;
                defectf[index]=1;

                temp=document.getElementById("defect_"+index);
                temp.style.border="3px solid #f1f8fe";
                temp.style.background ="#f1f8fe";
            }

        }
        showArray("Defect_Negative_Show", DefectNegativeShow, "DefectNegativeShow");


        
    }



}







if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};






//run the function start when the web load
//window.addEventListener("load");