# 🚀 Ignite Teams - React Native (Rocketseat)

Projeto desenvolvido como parte do **Projeto 2** da trilha de React Native na plataforma [Rocketseat](https://www.rocketseat.com.br/).
O objetivo é criar uma aplicação para gerenciamento de times, permitindo a criação, listagem e organização de grupos e participantes. Durante o desenvolvimento, são aplicados conceitos essenciais do **React Native** com **Expo**, além do uso de **navegação** para transição entre telas, **Styled Components** para a estilização da interface e **Async Storage** para o armazenamento local dos dados.

## 📁 **Criando o Projeto**
Para criar este projeto, foi utilizado o seguinte comando:
```
npx create-expo-app igniteteams --template
```

## 📦 **Instalação**
Antes de executar o projeto, instale as dependências com:
```
npm install
```

## ▶️ **Execução**
Para iniciar a aplicação, utilize o comando:
```
npx expo start
```

O comando abrirá o **Expo DevTools** no navegador.  
Você pode rodar o app em um emulador ou escanear o QR code com o app **Expo Go** no celular.

## 📸 **Pré-visualização do App**

Confira abaixo algumas capturas de tela do aplicativo em funcionamento:

<p align="center">
  <img src="./assets/screenshot_01.png" alt="Tela Inicial" width="45%"/>
  <img src="./assets/screenshot_02.png" alt="Criação de turma" width="45%"/>
</p>
<p align="center">
  <img src="./assets/screenshot_03.png" alt="Time A" width="45%"/>
  <img src="./assets/screenshot_04.png" alt="Time B" width="45%"/>
</p>

## 🛠️ **Tecnologias & Conceitos Aplicados**
- **📱 Componentes Básicos**
  - View, Text, TextInput, TouchableOpacity, StatusBar
- **🎨 Estilização**
  - Utilização do **Styled Components** para criar estilos organizados e reutilizáveis
- **🗺️ Navegação**
  - Implementação da navegação entre telas utilizando **React Navigation** com a estratégia **Stack Navigation**
- **📋 Listas Dinâmicas**
  - Uso de **FlatList** para exibição eficiente de listas de times e participantes
- **💾 Armazenamento Local**
  - Utilização do **Async Storage** para persistência de dados no dispositivo
- **⚡ Feedbacks Visuais**
  - Uso de **Alert** para exibição de mensagens interativas e **ActivityIndicator** para indicar carregamento
- **💡 Hooks**
  - Gerenciamento de estados com **useState** e efeitos colaterais com **useEffect**
- **📂 Organização de Código**
  - Estruturação do projeto com **babel-plugin-module-resolver** para caminhos de importação mais intuitivos

## 🛠 Recursos e Bibliotecas Utilizadas
A seguir, uma lista das bibliotecas e recursos adicionados ao projeto, com links para a documentação oficial:

### 1️⃣ [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/tree/master)
- Facilita importações utilizando caminhos absolutos.
- Instalação:
  ```
  npm install --save-dev babel-plugin-module-resolver
  ```
- Configurado em:
  - [`babel.config.js`](./babel.config.js)
  - [`tsconfig.json`](./tsconfig.json)
- 📅 **Adicionado em:** 21/02/2025.

### 2️⃣ [styled-components](https://styled-components.com/docs)
- Permite utilizar CSS-in-JS para estilização.
- Instalação:
  ```
  npm install styled-components
  ```
- Para evitar incompatibilidades, foi necessário rodar:
  ```
  npm install react@18.2.0 react-dom@18.2.0
  npm install @types/styled-components --save-dev
  ```
- Declaração de tipos: [`styled-components.d.ts`](./src/styled-components.d.ts)
- 📅 **Adicionado em:** 21/02/2025.

### 3️⃣ [expo-google-fonts](https://docs.expo.dev/develop/user-interface/fonts/)
- Utilização de fontes personalizadas do Google (Roboto).
- Instalação:
  ```
  npx expo install expo-font @expo-google-fonts/roboto
  ```
- 📅 **Adicionado em:** 24/02/2025.

### 4️⃣ [phosphor-react-native](https://github.com/duongdev/phosphor-react-native)
- Biblioteca de ícones para React Native.
- Instalação:
  ```
  npm install --save phosphor-react-native
  npx expo install react-native-svg
  ```
- Ícones disponíveis no [site oficial](https://phosphoricons.com).
- 📅 **Adicionado em:** 24/02/2025.

### 5️⃣ [react-navigation](https://reactnavigation.org/docs/getting-started)
- Implementação da navegação no aplicativo.
- Instalação:
  ```
  npm install @react-navigation/native
  ```
- Dependências adicionais:
  ```
  npx expo install react-native-screens react-native-safe-area-context
  ```
- Estratégia de navegação Stack:
  ```
  npm install @react-navigation/native-stack
  ```
- 📅 **Adicionado em:** 28/02/2025.

### 6️⃣ [async-storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- Armazena dados localmente no dispositivo.
- Instalação:
  ```
  npx expo install @react-native-async-storage/async-storage
  ```
- 📅 **Adicionado em:** 28/02/2025.

## 📌 Observações
- Caso encontre problemas ao instalar as dependências, tente remover a pasta `node_modules` e o arquivo `package-lock.json`, e reinstale com:
  ```
  rm -rf node_modules package-lock.json
  npm install
  ```

## 📖 **Objetivo do Projeto**
Desenvolver uma aplicação para gerenciamento de times, permitindo a criação, listagem e remoção de grupos e participantes. O projeto explora conceitos de navegação, armazenamento local e estilização dinâmica.

## 💡 **Sobre o Curso**
Projeto guiado pela trilha de **React Native** da Rocketseat, focado em aprofundar o uso de **Styled Components**, **React Navigation** e **Async Storage**, aplicando esses conceitos na construção de uma aplicação mobile com **Expo**.


Feito com ❤️ por Cesar August

