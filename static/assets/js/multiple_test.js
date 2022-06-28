
var datap = [];





//method_1 = count test //other test order
function tidy_test(method){

    var data={};

    var long = localStorage.length;

    var count=0,t_key="";

    for (var a = 0; a < long; a++){

        if ((localStorage.key(a)).startsWith('milktest')) {

            t_key=localStorage.key(a);

            temp=t_key.substring(9);

            if(count<parseInt(temp)){count=parseInt(temp);}

            data[t_key]=localStorage.getItem(t_key);

        }

    }

    if(method==1){
        return(count);
    }

    else{

        var test_data={}

        var keys = Object.keys(data); 
        keys.sort(); 
        for (var i=0; i<keys.length; i++) { // now lets iterate in sort order
            var key = keys[i];
            var value = data[key];
    /* do something with key & value here */
            test_data[key]=value;

            //window.alert(value);
            
        } 

        return(test_data);

    }




}