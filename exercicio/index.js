$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefa = $('#inputTarefa').val();
        let criaLinha = $(`<li>${tarefa}</li>`);
        $(criaLinha).appendTo('ul')

        $('li').on('click', function(){
        $(this).addClass('feito');
    })
    $('#inputTarefa').val("")
    })

    
})