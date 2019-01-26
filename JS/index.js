// function praise() {
//     var temp = $('num').innerText;
//     temp++;
//     document.getElementById('num').innerText = '2000';
//     $('num').innerText = 'dfasf';


// }

// function reply() {
//     $('#answer').hidden = false;

// }
$(document).ready(function() {
    $('#reply').click(function() {
        $('#answer').show();
    });
    $('#parise').click(function() {
        var temp = $('#num').text();
        temp++;
        $('#num').text(temp.toString());
    })
    $('#new').click(function() {
        $.post("/new", {
                text: $('#newText').val()
            },
            function(data) {
                alert(data);
                $('#newText').val(data);
            }
        );
    })
    $('#ShowComment').click(function() {
        $('#comment_block').show();
    });
})