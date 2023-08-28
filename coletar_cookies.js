const { exec } = require('child_process');
const { Builder, By } = require('selenium-webdriver');

async function loginAndCollectCookies() {
    // Inicializar o driver do Selenium para o Google Chrome
    const driver = new Builder()
        .forBrowser('chrome')
        .build();

    try {
        // Abre o Google Chrome usando o atalho local
       // exec('"C:\Users\narottam_celestrino\Desktop\logar.lnk');

        // Navegar até a página de login
        await driver.get('https://www.roblox.com/login');

        // Aguardar até que o login seja processado (você pode ajustar esse tempo)
        await driver.sleep(150000); // Aguardar 5 segundos

        // Navegar até a página desejada após o login
        await driver.get('https://www.roblox.com');

        // Obter os cookies
        const cookies = await driver.manage().getCookies();
        console.log('Cookies:', cookies);
    } finally {
        // Fechar o navegador
        await driver.quit();
    }
}

loginAndCollectCookies().catch(err => console.error('Erro:', err));
