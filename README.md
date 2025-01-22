# **Projeto de Prática de Testes E2E com Detox em React Native**

Este repositório foi criado para demonstrar como configurar e executar testes end-to-end (E2E) em um aplicativo **React Native** utilizando o **Detox**. Ele inclui um exemplo prático de cenário de teste que cobre um fluxo importante da aplicação, focado em exibir informações de investimentos em diferentes telas.

---

## 📚 **O que são Testes E2E?**

Testes end-to-end verificam o funcionamento completo de um aplicativo, do início ao fim, simulando o comportamento do usuário. Esses testes:

- Garantem que todos os fluxos principais estão funcionando corretamente.
- Identificam problemas em interações entre diferentes camadas do aplicativo (UI, lógica de negócios, APIs).
- Oferecem confiança no produto final ao validar a experiência do usuário.

---

## 🛠 **Ferramentas Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **Detox**: Framework de testes E2E para aplicativos React Native.
- **Jest**: Utilizado como executor de testes.

---

## 🔌 **Extensões Recomendadas para VS Code**

Para facilitar o desenvolvimento e a execução dos testes, recomendamos instalar as seguintes extensões no Visual Studio Code:

1. **[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)**
   - Monitora e executa os testes em tempo real enquanto você edita o código.
   - Oferece feedback visual diretamente no editor.

2. **[React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)**
   - Auxilia no desenvolvimento e depuração de aplicativos React Native.

### Como Instalar
1. Abra o VS Code.
2. Acesse a aba de extensões (Ctrl+Shift+X ou Cmd+Shift+X no Mac).
3. Pesquise por "Jest" e "React Native Tools".
4. Clique em "Install" nas extensões listadas.

---

## 📁 **Estrutura do Projeto**

A estrutura do projeto está organizada para separar os testes E2E do código principal:

```
react_native_detox_investment_tests/
├── e2e/
│   ├── tests/
│   │   └── earning_wallet.test.js
│   └── jest.config.js
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   └── InvestmentCard.tsx
│   ├── constants/
│   │   └── Colors.ts
│   └── screens/
│       ├── EarningScreen/
│       │   └── index.tsx
│       ├── WalletScreen/
│       │   └── index.tsx
├── ios/
├── android/
├── package.json
├── .detoxrc.js
└── README.md
```

### Pastas principais:
- **`e2e/`**: Contém os testes E2E e os arquivos de configuração do Detox.
- **`src/`**: Contém o código principal do aplicativo, incluindo ativos, componentes e telas.

---

## 📝 **Teste Implementado**

### **Earnings and Wallet Screen Test (`earning_wallet.test.js`)**

Este teste cobre o seguinte fluxo:

1. Lança o aplicativo.
2. Navega até a aba **Earnings**.
3. Verifica se o investimento **MXRF11** é exibido na tela de Earnings.
4. Navega até a aba **Wallet**.
5. Verifica se o investimento **MXRF11** é exibido na tela de Wallet.

Este teste é importante porque garante que os dados exibidos na interface do usuário estão consistentes entre diferentes telas relacionadas ao portfólio financeiro. Ao validar a presença de **MXRF11** em ambas as telas, asseguramos que:
- O fluxo de navegação entre abas está funcionando corretamente.
- As informações financeiras exibidas são coerentes e refletem o mesmo estado de dados em toda a aplicação.

Exemplo do teste:

```javascript
describe('Earnings and Wallet Screen Tests', () => {
  beforeAll(async () => {
    // Launch the app before running tests
    await device.launchApp();
  });

  it('should display MXRF11 on Earnings screen and in Wallet', async () => {
    // Step 1: Tap on the Earnings tab
    await element(by.text('Earnings')).tap();

    // Step 2: Verify MXRF11 investment card is displayed on the Earnings screen
    expect(element(by.text('MXRF11'))).toBeVisible();

    // Step 3: Tap on the Wallet tab
    await element(by.text('Wallet')).tap();

    // Step 4: Verify MXRF11 is displayed on the Wallet screen
    expect(element(by.text('MXRF11'))).toBeVisible();
  });
});
```

---

## 🚀 **Executando os Testes**

### Pré-requisitos

1. Instale o Detox globalmente:
   ```bash
   npm install -g detox-cli
   ```

2. Configure o ambiente de simulação:
   - **iOS**: Certifique-se de que o Xcode está instalado.
   - **Android**: Configure o Android Studio e os emuladores.

### Passos para rodar os testes

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Compile o aplicativo para testes:
   ```bash
   detox build -c ios.sim.debug
   ```
   ou para Android:
   ```bash
   detox build -c android.emu.debug
   ```

3. Execute os testes:
   ```bash
   detox test -c ios.sim.debug
   ```
   ou para Android:
   ```bash
   detox test -c android.emu.debug
   ```

---

## 🎯 **Objetivos do Projeto**

1. Demonstrar como configurar o Detox em um aplicativo React Native.
2. Ensinar práticas de escrita e execução de testes E2E.
3. Validar fluxos principais do aplicativo, garantindo a experiência do usuário.

---

## 📧 **Contato**

Se tiver dúvidas ou sugestões, entre em contato comigo:
- **Email**: [jackson.96@gmail.com](mailto:jackson.96@gmail.com)
- **LinkedIn**: [linkedin.com/in/3jacksonsmith](https://linkedin.com/in/3jacksonsmith)

---

Divirta-se explorando e testando! 🚀