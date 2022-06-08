function bin(){
    var str=document.getElementById("contents").value;
    
    var textToBinary = (str = '') => {
       var res = '';
       res = str.split('').map(char => {
          return char.charCodeAt(0).toString(2);
       }).join(' ');
       return res;
    };
    document.getElementById("decrypt").innerHTML=textToBinary(str);
    }
