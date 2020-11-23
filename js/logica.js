var cesar = cesar || (function(){
    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x','y', 'z'];
            var l = abc.length;
            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                if(i != -1){
                    var pos = i;
                    if(action){
                        pos += desp;
                        pos = (pos > abc.length)? pos - abc.length : pos;
                        pos -= (pos>=1)?1:0;
                    }else{
                        pos -= desp;
                        pos++;
                        pos = (pos < 0)?abc.length + pos: pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });

        
    }
        return{
            encode : function(txt, desp){
                return doStaff(txt, desp, true);
            },
            decode : function(txt, desp){
                return doStaff(txt, desp, false);
            }
        };
})();

 var expreg = new RegExp("^[0-9]");
function codificar(){
    var salto = parseInt(document.getElementById('salto').value);

    if(salto>=0 && expreg.test(document.getElementById('salto').value)){

        document.getElementById('resultado').innerHTML = cesar.encode(
        document.getElementById('cadena').value, salto
        );

    }else{
        document.getElementById('resultado').innerHTML = "☆No escribes bien unu☆ ";
    }    
    
}

function decodificar(){
            var salto = parseInt(document.getElementById('salto').value);

    if(salto>=0 && expreg.test(document.getElementById('salto').value)){

        
    document.getElementById('resultado').innerHTML = cesar.decode(
        document.getElementById('cadena').value, salto
    );

    }else{
        document.getElementById('resultado').innerHTML = "☆No escribes bien unu☆";
    } 


}


function codificar2(){
    var ayuda=0;
    var texto=document.getElementById('cadena2').value;
    var k=parseInt(document.getElementById('salto2').value);
    var coded="";
    var c="";
    var abc = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x','y', 'z'];
    for (var i = 0 ; i < texto.length ; i++) {
        for (var j = 0 ; j < abc.length; j++) {
                ayuda=0;
                if(texto.charAt(i)==abc[j]){
                        ayuda = ayuda + ( (k * j)+1 );
                        coded=coded+abc[ayuda%28];
                }
                


        }        
    }
    document.getElementById('resultado2').innerHTML =coded;
}



function decodificar2(){
    var ayuda=0;
    var abc = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x','y', 'z'];
    var texto=document.getElementById('cadena2').value;
    var k=parseInt(document.getElementById('salto2').value);
    var descoded="";
    for (var i = 0 ; i < texto.length ; i++) {
        for (var j = 0 ; j < abc.length; j++) {
                ayuda=0;
                if(texto.charAt(i)==abc[j]){

                        ayuda = ayuda + ( (k * j)-1 );
                        descoded=descoded+abc[ayuda];
                }


        }        
    }
    document.getElementById('resultado2').innerHTML = "☆No c puede xd☆";

}