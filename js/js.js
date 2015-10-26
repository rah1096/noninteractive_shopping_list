$(document).ready(function() {
    $('.clr').click(function() {
        $('input').val('');
    });

    $('.add-button').on('click', function() {
        if ($('input').val()) {
            $('.list-items:first').before('<div class="list-items">' +
                '<div class="ind-items"> <div class="check-box"></div>' +
                '<h3 class="item-name"></h3> <div class="del"><h1>X</h1></div></div></div>');
            $('.item-name:first').prepend($('input').val());
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
    $('.list-container .list-phone .display .container .list-items').on('click', '.check-box', function() {
        $(this).replaceWith('<div class="check">' +
            '<div class="left"></div>' +
            '<div class="right"></div>' +
            '</div>');
        $(this).child().after('<div class="line"></div>');
        $(this).siblings('h3').css({color: 'lightgrey'});
    });

    //uncheck items
    //$('div.container').on('click', '.check', function() {
    //    $(this).replaceWith('<div class="check-box"></div>')
    //    $(this).eq(1).remove();
    //    $(this).siblings('h3').css({color: 'black'});
    //});
});

