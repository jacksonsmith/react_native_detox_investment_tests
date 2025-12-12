# **Projeto de Prática de Testes E2E com Detox em React Native**

Este repositório foi criado para demonstrar como configurar e executar testes end-to-end (E2E) em um aplicativo **React Native** utilizando o **Detox**. Ele inclui um exemplo prático de cenário de teste que cobre um fluxo importante da aplicação, focado em exibir informações de investimentos em diferentes telas. Durante a aula, os alunos deverão corrigir um erro proposital introduzido no teste.

---

## 🚀 **Início Rápido**

> **IMPORTANTE PARA USUÁRIOS WINDOWS**: Este projeto agora possui suporte completo para Windows! Use os comandos específicos do Windows (como `npm run detox:build:android:windows`) e o arquivo `.detoxrc.windows.js` será usado automaticamente.

### **Passos Iniciais**

1. Instale as dependências: `npm install`
2. Configure o nome do seu emulador no arquivo correto (veja seção "Configuração do Detox para Seu Dispositivo")
3. Faça o build do app:
   - **Windows**: `npm run detox:build:android:windows`
   - **Mac/Linux**: `npm run detox:build:android`
   - **iOS**: `npm run detox:build:ios`
4. Execute os testes:
   - **Windows**: `npm run detox:test:android:windows`
   - **Mac/Linux**: `npm run detox:test:android`
   - **iOS**: `npm run detox:test:ios`

---

## 📚 **O que são Testes E2E?**

Testes end-to-end verificam o funcionamento completo de um aplicativo, do início ao fim, simulando o comportamento do usuário. Esses testes:

- Garantem que todos os fluxos principais estão funcionando corretamente.
- Identificam problemas em interações entre diferentes camadas do aplicativo (UI, lógica de negócios, APIs).
- Oferecem confiança no produto final ao validar a experiência do usuário.

---

## 🎯 **Objetivos do Projeto**

1. Demonstrar como configurar o Detox em um aplicativo React Native.
2. Ensinar práticas de escrita e execução de testes E2E.
3. Identificar e corrigir erros introduzidos nos testes, praticando debugging.
4. Validar fluxos principais do aplicativo, garantindo a experiência do usuário.

---

## 🛠 **Ferramentas Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **Detox**: Framework de testes E2E para aplicativos React Native.
- **Jest**: Utilizado como executor de testes.

---

## 📋 **Dependências Necessárias (Comum)**

### **Java 17**

Instale o Java Development Kit (JDK) versão 17:

- Links de download: [Windows](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_windows-x64_bin.zip), [Mac AArch64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_macos-aarch64_bin.tar.gz), [Mac x64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_macos-x64_bin.tar.gz), [Linux AArch64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_linux-aarch64_bin.tar.gz), [Linux x64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_linux-x64_bin.tar.gz).

Verifique a instalação:
```bash
java -version
```

### **Node.js**

Requer **Node.js** versão 18 ou superior: [Baixe aqui](https://nodejs.org/).

---

## 🖥 **Configuração iOS**

### Pré-requisitos

1. Instale o **Xcode**: [Baixe aqui](https://developer.apple.com/xcode/).
2. Configure o simulador no Xcode (recomenda-se o iPhone 13 ou superior com iOS 15.5+).

Verifique se o `xcodebuild` está funcionando:
```bash
xcodebuild -version
```

### Instalando Dependências iOS

1. Instale o `applesimutils`:
   ```bash
   brew tap wix/brew
   brew install applesimutils
   ```

---

## 🤖 **Configuração Android**

### Pré-requisitos

1. Instale o **Android Studio**: [Baixe aqui](https://developer.android.com/studio).
2. Configure um emulador (exemplo: Pixel 3a com API Level 30+).

Verifique se o `adb` está funcionando:
```bash
adb --version
```

### Seleção do Java 17 no Android Studio

1. Abra o Android Studio.
2. Vá para **File > Project Structure > SDK Location**.
3. Selecione **Java 17** como versão do JDK.

---

## 📂 **Estrutura do Projeto**

```
react_native_detox_investment_tests/
├── e2e/
│   ├── tests/
│   │   └── earning_wallet.test.js
│   └── jest.config.js
├── src/
├── ios/
├── android/
├── .detoxrc.js (Mac/Linux)
├── .detoxrc.windows.js (Windows)
├── package.json
└── README.md
```

---

## ⚙️ **Configuração do Detox para Seu Dispositivo**

O projeto já vem com arquivos de configuração do Detox, mas você precisa ajustá-los para seu emulador/simulador específico.

### **Escolhendo o Arquivo de Configuração Correto**

- **Mac/Linux**: Use `.detoxrc.js`
- **Windows**: Use `.detoxrc.windows.js` (já configurado com `gradlew.bat`)

### **Configurando o Nome do Seu Emulador Android**

1. **Descobrir o nome do seu emulador:**
   ```bash
   emulator -list-avds
   ```
   Este comando lista todos os AVDs (Android Virtual Devices) disponíveis.

2. **Exemplo de saída:**
   ```
   Pixel_3a_API_30
   Medium_Phone_API_35
   Pixel_5_API_33
   ```

3. **Editar o arquivo de configuração:**
   - **Mac/Linux**: Abra `.detoxrc.js`
   - **Windows**: Abra `.detoxrc.windows.js`

4. **Localizar e substituir o nome do emulador:**
   ```javascript
   emulator: {
     type: 'android.emulator',
     device: {
       avdName: 'Medium_Phone_API_35'  // SUBSTITUA AQUI pelo nome do seu emulador
     }
   }
   ```

### **Configurando o Simulador iOS (Mac apenas)**

1. **Descobrir simuladores disponíveis:**
   ```bash
   xcrun simctl list devices
   ```

2. **Exemplo de saída:**
   ```
   -- iOS 17.0 --
       iPhone 14 (12345678-1234-1234-1234-123456789012)
       iPhone 15 (87654321-4321-4321-4321-210987654321)
       iPhone 16 (ABCDEFGH-ABCD-ABCD-ABCD-ABCDEFGHIJKL)
   ```

3. **Editar `.detoxrc.js` e substituir:**
   ```javascript
   simulator: {
     type: 'ios.simulator',
     device: {
       type: 'iPhone 16'  // SUBSTITUA AQUI pelo modelo do seu simulador
     }
   }
   ```

### **Como Verificar se o Emulador Android Está Acessível**

```bash
adb devices
```
Este comando mostra todos os dispositivos Android conectados ou emuladores em execução.

---

## 📝 **Atividades da Aula**

A aula é dividida em 3 atividades práticas que devem ser realizadas seguindo os passos abaixo:

### **Atividade 1: Configuração do Ambiente**

1. **Configure o nome do seu emulador/simulador** seguindo as instruções da seção anterior.

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Compile o app para a plataforma desejada:**

   **Para iOS (Mac apenas):**
   ```bash
   npm run detox:build:ios
   ```

   **Para Android (Mac/Linux):**
   ```bash
   npm run detox:build:android
   ```

   **Para Android (Windows):**
   ```bash
   npm run detox:build:android:windows
   ```

---

### **Atividade 2: Execução do Teste E2E**

1. **Certifique-se de que o emulador/simulador está em execução antes de rodar os testes.**

2. **Execute o teste E2E no Detox:**

   **Para iOS (Mac apenas):**
   ```bash
   npm run detox:test:ios
   ```

   **Para Android (Mac/Linux):**
   ```bash
   npm run detox:test:android
   ```

   **Para Android (Windows):**
   ```bash
   npm run detox:test:android:windows
   ```

3. Observe que o teste para a aba **Wallet** falha de propósito.

---

### **Atividade 3: Debugging e Correção**
1. Abra o arquivo de teste localizado em `e2e/tests/earning_wallet.test.js`.
2. Analise o seguinte código com erro:
   ```javascript
   it('should display MXRF11 on Earnings screen and in Wallet', async () => {
     await element(by.text('Earnings')).tap();
     await expect(element(by.text('MXRF11'))).toBeVisible();

     await element(by.text('Wallet')).tap();
     await expect(element(by.text('MXRF10'))).toBeVisible();
   });
   ```
3. Corrija o código para que ele valide corretamente a presença de "MXRF11" na aba Wallet.
4. Reexecute o teste utilizando os comandos customizados para confirmar que o problema foi solucionado.

---

## 🔧 **Dicas e Troubleshooting**

### **Comandos Úteis**

#### **Listar todos os emuladores Android disponíveis:**
```bash
emulator -list-avds
```

#### **Listar dispositivos Android conectados/em execução:**
```bash
adb devices
```

#### **Iniciar um emulador Android manualmente:**
```bash
emulator -avd NOME_DO_SEU_EMULADOR
```

#### **Listar simuladores iOS disponíveis (Mac apenas):**
```bash
xcrun simctl list devices
```

#### **Iniciar um simulador iOS manualmente (Mac apenas):**
```bash
open -a Simulator
```

### **Problemas Comuns**

#### **Windows: "O termo 'gradlew' não é reconhecido"**
Certifique-se de usar os comandos específicos para Windows que apontam para `.detoxrc.windows.js`:
```bash
npm run detox:build:android:windows
npm run detox:test:android:windows
```

#### **Erro: "ANDROID_HOME não está definido"**
Configure a variável de ambiente `ANDROID_HOME`:
- **Windows**: Adicione nas variáveis de ambiente do sistema apontando para a pasta do Android SDK (geralmente `C:\Users\SeuUsuario\AppData\Local\Android\Sdk`)
- **Mac/Linux**: Adicione ao `.bashrc` ou `.zshrc`:
  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

#### **Erro: "No device found"**
1. Certifique-se de que o emulador/simulador está em execução
2. Verifique se o nome do dispositivo no arquivo `.detoxrc` está correto
3. Execute `adb devices` (Android) ou `xcrun simctl list devices` (iOS) para confirmar

#### **Erro: "Cannot find emulator"**
Adicione o diretório do emulador ao PATH:
- **Windows**: Adicione `%ANDROID_HOME%\emulator` ao PATH
- **Mac/Linux**: Adicione ao `.bashrc` ou `.zshrc`:
  ```bash
  export PATH=$PATH:$ANDROID_HOME/emulator
  ```

### **Scripts Disponíveis para Referência**

| Comando | Plataforma | Descrição |
|---------|-----------|-----------|
| `npm run detox:build:ios` | Mac | Build iOS (Release) |
| `npm run detox:test:ios` | Mac | Teste iOS (Release) |
| `npm run detox:build:android` | Mac/Linux | Build Android (Release) |
| `npm run detox:test:android` | Mac/Linux | Teste Android (Release) |
| `npm run detox:build:android:windows` | Windows | Build Android (Release) |
| `npm run detox:test:android:windows` | Windows | Teste Android (Release) |
| `npm run detox:build:android:debug:windows` | Windows | Build Android (Debug) |
| `npm run detox:test:android:debug:windows` | Windows | Teste Android (Debug) |

---

## 📧 **Contato**

- **Email**: [jackson.96@gmail.com](mailto:jackson.96@gmail.com)
- **LinkedIn**: [linkedin.com/in/3jacksonsmith](https://linkedin.com/in/3jacksonsmith)

Divirta-se explorando e testando! 🚀

