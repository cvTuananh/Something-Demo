$(document).ready(function() {
    $('#loginModal').modal('show');
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);

function myFunction() {
    var x = document.getElementById('list-view');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction1() {
    var x = document.getElementById('history-view');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}