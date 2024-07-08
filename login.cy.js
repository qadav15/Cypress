describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio//');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    
        it('Неверный пароль и верный логин', function () {
             cy.visit('https://login.qa.studio//');
             cy.get('#mail').type('german@dolnikov.ru')
             cy.get('#pass').type('polovinka1.')
             cy.get('#loginButton').click();
             cy.get('#messageHeader').contains('Такого логина или пароля нет');
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

            it('Верный пароль и неверный логин', function () {
                cy.visit('https://login.qa.studio//');
                cy.get('#mail').type('kemran@olnikoev.ru')
                cy.get('#pass').type('iLoveqastudio1')
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })

               it('Валидация @', function () {
                cy.visit('https://login.qa.studio//');
                cy.get('#mail').type('germandolnikov.ru')
                cy.get('#pass').type('iLoveqastudio1')
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })

               it('приведение к строчным буквам в логине', function () {
                cy.visit('https://login.qa.studio//');
                cy.get('#mail').type('geRman@dolnikov.ru')
                cy.get('#pass').type('iLoveqastudio1')
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Авторизация прошла успешно');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })
           

   

        })