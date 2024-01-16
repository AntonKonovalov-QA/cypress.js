describe('Автотесты формы логина', function () {
   it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели правильный логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельная
        cy.get('#loginButton').click(); //Нажали кнопку войти
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
    })
   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikofff.ru'); //Ввели не правильный логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#forgotEmailButton').click(); //Нажали забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); //Кнопка видимая
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Совпадение текста
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
        cy.get('#mailForgot').type('german@dolnikofff.ru'); //Ввели не правильный логин
        cy.get('#restoreEmailButton').click(); //Нажали отправить код
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
     })
   it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели правильный логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio100'); //Ввели не правильный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельная
        cy.get('#loginButton').click(); //Нажали кнопку войти
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
     })
   it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikofff.ru'); //Ввели не правильный логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельная
        cy.get('#loginButton').click(); //Нажали кнопку войти
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
     })
   it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('germandolnikofff.ru'); //Ввели логин без @
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельная
        cy.get('#loginButton').click(); //Нажали кнопку войти
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
     })
   it('Логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с заглавными буквами
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельная
        cy.get('#loginButton').click(); //Нажали кнопку войти
        cy.get('#messageHeader').should('be.visible'); //Текст должен быть видимым
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик должен быть видимым
    })
})