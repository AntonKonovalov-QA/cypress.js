describe('Aвтотесты покемонов', function () {
   it('Покупк нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login'); //Посетили сайт
        cy.get(':nth-child(1) > .auth__input').type('coomir@yandex.ru'); //Ввели правильный логин
        cy.get('#password').type('Bmegapixel123'); //Ввели правильный пароль
        cy.get('.auth__button').click(); //Нажали кнопку войти
        cy.get('.header__btns > [href="/shop"]').click(); //Нажали кнопку магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); //Выбрали фото и нажали купить
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); //Ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1028'); //Ввели срок действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Ввели код cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('admin admin'); //Ввели имя
        cy.get('.pay-btn').click(); //Нажали кнопку оплатить
        cy.get('#cardnumber').type('56456'); //Ввели код из смс
        cy.get('.payment__submit-button').click(); //Нажали кнопку отправить
        cy.get('.payment__font-for-success').should('be.visible'); //Текст должен быть видимым
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Совпадение текста
        cy.get('.payment__adv').should('be.visible'); //Кнопка вернуться в магазин должна быть видимой
        cy.get('.payment__adv').click(); //Нажали кнопку вернуться в магазин
    })
})