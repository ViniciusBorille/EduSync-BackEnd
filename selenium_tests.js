const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const axios = require('axios');

(async function testCadastroUsuario() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:5173/cadastrousuario');

        await driver.findElement(By.name('nome')).sendKeys('Teste');
        await driver.findElement(By.name('sobrenome')).sendKeys('Automatizado');
        await driver.findElement(By.name('cpf')).sendKeys('12345678901');
        await driver.findElement(By.name('email')).sendKeys('teste@email.com');
        await driver.findElement(By.name('senha')).sendKeys('senha123');
        await driver.findElement(By.name('telefone')).sendKeys('999999999');
        await driver.findElement(By.name('telefone2')).sendKeys('888888888');
        await driver.findElement(By.name('data_nascimento')).sendKeys('2000-01-01');
        await driver.findElement(By.name('tipo_usuario')).sendKeys('aluno');

        await driver.findElement(By.id('cadastro-button')).click();

        await driver.wait(until.urlContains('login'), 5000);
        let currentUrl = await driver.getCurrentUrl();

        assert.strictEqual(currentUrl.includes('login'), true);
        console.log('✅ Teste de cadastro passou!');
    } catch (error) {
        console.error('❌ Erro no teste de cadastro:', error);
    } finally {
        await driver.quit();
    }
})();

(async function testBackendCadastro() {
    try {
        const response = await axios.post('http://localhost:3001/api/cadusuario', {
            nome: 'Teste',
            sobrenome: 'Automatizado',
            cpf: '12345678901',
            email: 'teste@email.com',
            senha: 'senha123',
            telefone: '999999999',
            telefone2: '888888888',
            data_nascimento: '2000-01-01',
            tipo_usuario: 'aluno'
        });
        assert.strictEqual(response.status, 201);
        console.log('✅ Teste da API de cadastro passou!');
    } catch (error) {
        console.error('❌ Erro no teste da API de cadastro:', error.response ? error.response.data : error);
    }
})();
