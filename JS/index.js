// function praise() {
//     var temp = $('num').innerText;
//     temp++;
//     document.getElementById('num').innerText = '2000';
//     $('num').innerText = 'dfasf';


// }

// function reply() {
//     $('#answer').hidden = false;

// }
function del_html_tags(str, reallyDo, replaceWith) {
    var e = new RegExp(reallyDo, "g");
    words = str.replace(e, replaceWith);
    alert(words);
    return words;
}

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
        // alert($('#newText').val())
        $.post("/new", {
                text: $('#newText').val()
            },
            function(data) {
                var temp = $('#msg').html();
                data = JSON.parse(data);
                temp = del_html_tags(temp, "{{mid}}", data.mid);
                temp = del_html_tags(temp, "{{content}}", data.content);
                $('#msg_temp').append(temp);
            }
        );
    })
    $('#ShowComment').click(function() {
        $('#comment_block').show();
    });
})