# Ignite Teams - React Native (rocketseat)
Projeto 2 da trilha de React Native da plataforma RocketSeat

## Comando utilizado na criação
- npx create-expo-app igniteteams --template

## Para baixar as dependencias antes de executar o projeto utilzie o seguinte comando:
- npm install

## Para executar use o seguinte comando:
- npx expo start

## Recursos adicionados a esse projeto:
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/tree/master)
  - Simplificar caminho de importações;
  - Comando utilizado: ```npm install --save-dev babel-plugin-module-resolver```
  - Configurações em: [babel.config.js](./babel.config.js) e [tsconfig.json](./tsconfig.json);
  - Adicionado em: 2025/02/21.

- [styled-components](https://styled-components.com/docs)
  - CSS in JS / Padronização de estilos;
  - Comando utilizado: ```npm install styled-components```
  - Declaração de tipo em: [styled-components.d.ts](./src/styled-components.d.ts);
  - Observações: Ao instalar eu tive um erro de incompatibilidade que foi resolvida com o seguinte comando:
    - npm install react@18.2.0 react-dom@18.2.0
    - npm install @types/styled-components --save-dev
  - Adicionado em: 2025/02/21.

- [expo-google-fonts](https://docs.expo.dev/develop/user-interface/fonts/)
  - Fonte personalizada da Google (Roboto)
  - Comando utilizado: ```npx expo install expo-font @expo-google-fonts/roboto```
  - Adicionado em: 2025/02/24
  
- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native)
  - Icones personalizados
  - Comando utilizado: ```npm install --save phosphor-react-native```
  - Dependência instalada: ```npx expo install react-native-svg```
  - Consultar icones disponíveis no [site oficial](https://phosphoricons.com)
  - Adicionado em: 2025/02/24

- [react-navigation](https://reactnavigation.org/docs/getting-started)
  - Navegação da aplicação
  - Comando utilizado: ```npm install @react-navigation/native```
  - Dependências instaladas: ```npx expo install react-native-screens react-native-safe-area-context```
  - Estratégia de navegação Stack: ```npm install @react-navigation/native-stack```
  - Adicionado em: 2025/02/28