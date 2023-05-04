$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const endereçoImagem = $('#UrlImagem').val();
        const novoItem = $('<li style = "display:none"></li>');
        $(`<img src="${endereçoImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay_img">
                <a href="${endereçoImagem}" target ="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000);
        $('#UrlImagem').val('')
    })
})