var item;
var btn = $(".add-icon");
var display = $(".regiao");
var notas =[]
var id=1;
var win = window.localStorage;
var idSave=1;
var qtd=1;
var lis = JSON.parse(localStorage.getItem('lis')) || [];



btn.click(function(){    
    var nota = $(`.Nota:first`).clone();
    notas[id] =nota;
    $(".regiao").append(notas[id])
    var trash= $(".trash").eq(id);
    $(trash).attr("myId",id)
    var texto = $(".text").eq(id);
    $(texto).change(function(){
        var txt = $(texto).val();
        win.setItem(id,txt)
        console.log("boa noite "+txt  )
    })
    id++;
    $(trash).click(function(){
        ident = $(trash).attr("myId");
        for(i=0;i<=id;i++){
            if(ident==i){                
                $(notas[ident]).remove();
                id--;
            }
            
        }
    })
    win.setItem(idSave,id);
})

window.onload = function(){
    qtd = win.getItem(idSave);

    for(i=1;i<qtd;i++){
        
        var nota = $(`.Nota:first`).clone();
        notas[i] =nota;
        $(".regiao").append(notas[i])


        var trash= $(".trash").eq(i);
        $(trash).attr("myId",i)

        var texto = $(".text").eq(i);
        var ide =i+1;
        $(texto).text(win.getItem(ide))

        $(texto).change(function(){
            var txt = $(texto).val();
            win.setItem(i,txt)
        })
        id = i;
        $(trash).click(function(){
            ident = $(trash).attr("myId");
            console.log(ident)
            for(i=0;i<=qtd;i++){
                if(ident==i){                
                    $(notas[ident]).remove();
                    qtd--;
                }
                
            }
        })
        }            
}

