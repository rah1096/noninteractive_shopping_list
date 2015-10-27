$(document).ready(function() {
    $('.clr').click(function() {
        $('input').val('');
    });

    $('.add-button').on('click', function() {
        if ($('input').val()) {
            $('.list-items:first').before('<div class="list-items">' +
                '<div class="ind-items">' +
                '<div class="check-box"></div>' +
                '<div class="check">' +
                '<div class="left"></div>' +
                '<div class="right"></div>' +
                '</div>' +
                '<h3 class="not-lined"></h3>' +
                '<div class="del"><h1>X</h1></div>' +
                '</div>');
            $('.not-lined:first').prepend($('input').val());
            $('input').val('');
        };
    });

    $('.left').hover(function() {
        $(this).css({border: '2px solid lightgrey', cursor: 'pointer'});
        $(this).siblings().css({border: '2px solid lightgrey', cursor: 'pointer'});
    }, function() {
        $(this).css({border: '1px solid lightgrey'});
        $(this).siblings().css({border: '1px solid lightgrey'});
    });

    $('.right').hover(function() {
        $(this).css({border: '2px solid lightgrey', cursor: 'pointer'});
        $(this).siblings().css({border: '2px solid lightgrey', cursor: 'pointer'});
    }, function() {
        $(this).css({border: '1px solid lightgrey'});
        $(this).siblings().css({border: '1px solid lightgrey'});
    });

    //check items
    $(document).on('click', '.check-box', function() {
        $(this).hide();
        $(this).next().show();
        $(this).next().next().css({'text-decoration': 'line-through', 'color': 'lightgrey'});
    });

    $(document).on('click', '.check-box1', function() {
        $(this).hide();
        $(this).next().show();
        $(this).next().next().css({'text-decoration': 'line-through', 'color': 'lightgrey'});
    });

    //uncheck items
    $(document).on('click', '.check', function() {
        $(this).next().css({'text-decoration': 'none', 'color': 'black', 'cursor': 'pointer'});
        $(this).hide();
        $(this).prev().show();
    });

    $(document).on('click', '.check1', function() {
        $(this).hide();
        $(this).prev().show();
        $(this).next().css({'text-decoration': 'none', 'color': 'black'});
    });

    $(document).on('click', '.del', function() {
        $(this).parent().parent().remove();
    });

});

