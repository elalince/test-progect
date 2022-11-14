export function scrollToForm () {
    const scrollLink = document.querySelector( '.scrollToForm');

    scrollLink.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector('.formSection').scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

export function formModal() {
    const formBtn = document.querySelector( '.mainForm__btn');
    const formModal = document.querySelector( '.modalSection');
    const formModalFirst = document.querySelector( '.mainForm_first');
    const formModalSecond = document.querySelector( '.mainForm_second');
    const formBtnNext = document.querySelector( '.mainForm__btn_next');
    const formCompleted = document.querySelector( '.mainForm__btn_completed');
    const formClose = document.querySelector( '.modalSection__closeLink');
    const formProgressbar = document.querySelector( '.progressResult');

    $(formBtn).on('click', function() {
        $(formModal).addClass('modalSection_open')
        $(formProgressbar).addClass('progressResult_first')
        document.body.style.overflow = 'hidden';

    });

    $(formBtnNext).on('click', function() {
        $(formModalFirst).addClass('mainForm_hidden')
        $(formModalSecond).removeClass('mainForm_hidden')
        $(formProgressbar).removeClass('progressResult_first').addClass('progressResult_second')
    });

    $(formCompleted).on('click', function() {
        $(formModal).removeClass('modalSection_open')
        document.body.style.overflow = 'auto';

    });

    $(formClose).on('click', function() {
        $(formModal).removeClass('modalSection_open')
        document.body.style.overflow = 'auto';

    });
}
export function formChoice() {
    const radioValue = document.querySelector( '.mainForm__choiceValue');

    document.querySelector('.mainForm__btn_next').addEventListener('click', function () {
        var selected, inputs = document.querySelectorAll('input[type="radio"][name="radio"]');
        selected = [...inputs].find(el=>el.checked)
        radioValue.innerHTML = selected.value;
    })
}

