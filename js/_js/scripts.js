//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend scroller.min.js

$(document).ready(function() {
    $("[data-paroller-factor]").paroller();
   /* Работа формы */
   $(function () {
    var check = $('.check', this),
        email = $('.mail', this),
        message = $('.alert_message', this),
        button = $('.button_mail', this);
    $(".form").on("submit", function () {
        var check = $('.check', this),
            message = $('.alert_message', this),
            reNone = /.+/;
        if (!email.val().match(reNone)) {
            email.css('borderColor', 'red');
            // message.text('Введите email').slideDown(500);
            button.text('Введите email');
            return false;
        }
        if (!check.prop("checked")) {
            check.next().css("color", "#000");
            check.next().children().css("color", "#000");
            message.text('Подтвердите соглашение').slideDown(500);
            return false;
        }
        if (email.val() && check) {
            // button.text('Отправляем...');
            button.text('Отправляем...');
            setTimeout(function () {
                button.text('Отправлено!');
            }, 500);
        }
    });
    email.click(function () {
        email.css("borderColor", "rgba(80,61,37,.1)");
        // message.slideUp(500);
        button.text('Участвовать бесплатно');
    });
    check.click(function () {
        check.next().css("color", "rgba(255,255,255, .9)");
        check.next().children().css("color", "rgba(255,255,255, .9)");
        message.slideUp(500);
    });
});

/*Конец документа*/
});