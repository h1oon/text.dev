function emailValidator(element) {
    var email = element.val();
    if ((email.indexOf('@') > 0 && email.indexOf('.') > 0) && email.length > 5) {

        element.css('border-color', '#009959');
        element.css('color', '#000');
    }
    else {
        element.css('border-color', '#ff7373');
        element.css('color', '#ff7373');
    }
}
function phoneValidator(element) {
    var phone = element.val();
    if (phone.indexOf('_') < 0) {

        element.css('border-color', '#009959');
        element.css('color', '#000');
    }
    else {
        element.css('border-color', '#ff7373');
        element.css('color', '#ff7373');
    }
}
$('.menu-content ul li').click(function () {
    var active_number=$(this).attr('data-active');
   $('.menu-content ul li').removeClass('active');
    $('.tab').removeClass('active');
    $('.menu-content ul li[data-active='+active_number+']').addClass('active');
    $('.tab[data-active='+active_number+']').addClass('active');

});