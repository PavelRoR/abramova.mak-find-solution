//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var phone = $('.phone', this),
            button = $('.button_mail', this);
        $(".form").on("submit", function () {
            var reNone = /.+/,
                rePh = /^[+]?\d*\.?\d*$/;
            if (!phone.val().match(reNone)) {
                phone.css('borderColor', 'red');
                button.text('Введите Телефон');
                return false;
            }
            if (!phone.val().match(rePh)) {
                phone.css('borderColor', 'red');
                button.text('Только цифры');
                phone.val('');
                return false;
            }
            if (phone.val()) {
                // button.text('Отправляем...');
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
            }
        });
        phone.click(function () {
            phone.css("borderColor", "rgba(80,61,37,.1)");
            // message.slideUp(500);
            button.text('Напомнить о мероприятии по смс');
        });
    });

    /*Конец документа*/
});