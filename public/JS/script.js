$(document).ready(function () {
    //ESCONDE E MOSTRA O MENU HAMBURGUER
    let vpWidth = $(window).width();
    condition(vpWidth)

    $(window).resize(function() {
        let vpWidth = $(window).width();
        condition(vpWidth)
    })
    
    $('header .icon').click(function() {
        $('header .icon').toggleClass("close")
        $('#nav').toggle()
    })
    $('.img-container').click((e) =>{
        location.href = `/news/${e.currentTarget.dataset.url}`;
    })
    $('.scroll .card').click((e) =>{
        location.href = `/news/${e.currentTarget.dataset.url}`;
    })
})

function condition(vpWidth) {
    if(vpWidth <= 699) {
        $('header .icon').show()
        $('#nav').hide()
       
        if($('header .icon').hasClass('close')){
            $('header .icon').removeClass('close')
            $('#nav').show()
        }

        $('#nav li a').click(function() {
            $('header .icon').removeClass('close')
            $('#nav').hide()
        })
    }else if(vpWidth >= 700 ){
        $('header .icon').hide()
        $('#nav').show()

        $('#nav li a').click(function() {
            $('#nav').show()
        })
    }
}