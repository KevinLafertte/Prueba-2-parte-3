


$(document).ready(function() {
    //Botòn para matar a pikachu//
    
    $('#matar').click(function() {
        $('.cuerpo-pikachu').fadeOut(2000, function() {
            $('#mensaje-nuevo').html('¡TE LO DIJE!. HAZ MATADO A PIKACHU, LO DESINTEGRASTE :(.').fadeIn(1000);
        });
    });



   //Botòn animaciones//

    $('#animacion').click(function(){
        $('.ojo-izquierdo').css({
            transform: 'rotate(10turn)',
            
        });

        $('.ojo-derecho').css({
            transform: 'rotate(7turn)',
        })
        
    })


    $('#animacion').click(function(){
        $('.boca').animate({
        top:'46%'
        });

        $('.boca').animate({
        top:'47%'
         });

       
        
    })


    $('#animacion').click(function(){
        $('.brazo-izquierdo').animate({
        left:'28%'
        });

        $('.brazo-derecho').animate({
        left:'353px'
        })
        
    })

    $('#animacion').click(function(){
        $('.brazo-izquierdo').css({
            transform: 'rotate(0.6turn)'
        });

        $('.brazo-derecho').css({
            transform: 'rotate(0.4turn)'
        })
    })

    $('#animacion').click(function(){
        $('.brazo-izquierdo').animate({
          top:'52%'
        });

        $('.brazo-derecho').animate({
            top: '52%'
        })
        
    })

    $('#animacion').click(function(){
        $('.brazo-izquierdo').animate({
          top:'50%'
        });

        $('.brazo-derecho').animate({
            top: '50%'
        })
        
        $('#animacion').text('SIGUE APRETANDO')
    })

    
    
});





