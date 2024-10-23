
# Dashboard + Vite e Firebase

Neste projeto eu pude por em prática meus aprendizados em Rotas no react, gerenciamento de estados globais, fluxo de login e bloqueio de rotas não autorizadas no React,consumo de api não relacional e além de aplicar e testar otimas estilizações na aplicação.  

# Conceitos e Tecnologias utilizadas

- **Styled-Components** e uma biblioteca muito utilizada em aplicações React pois conseguimos passar props de estilização para componentes. 
- **Componentização** e estrutura de organização que o React nos permite utilizar componentes diversas vezes
- **Global-Styles** estilos globais e uma forma que o styled components nos da para controlar css de forma global em nossa aplicação.
- **Context-Api** e uma das formas que utilizamos para gerenciar estados de forma global no react nela utilizamos useContext e createContext com o Provider para prover estados de forma global.
- **Firebase** e um banco de dados não relacional, muito utilizado para aplicações rápidas e de facil escalabilidade com ele foi utilizado FirebaseAuth(Para auteticação) e FirebaseStorage(Para armazenar imagens).
- **React-Router-Dom** e uma biblioteca que nos permite gerenciar rotas no React. Com ele temos opções de renderizar rotas aninhadas e passar Providers de contextos para darmos acesso a rota especifica.
- **Dotenv** utilizada para deixarmos nossa chave da api de forma segura na aplicação.
- **React-Icons** e uma biblioteca que nos da uma infinidade de icones para utilizarmos em nossa aplicação
- **React-Toastfiy** e uma biblioteca utilizada para exibirmos notificação para o usuário na aplicação muito prática pois ja vem com estilização pronta.




## Rotas

- **/login** - Rota destinada a registro e login do usuário.
- **/** - Rota destinada há minhas redes.
- **/Perfil** - Rota destinada a edição de perfil do usuário logado.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_REACT_API_URL`, `VITE_REACT_FIREBASE_AUTH_DOMAIN`,  `VITE_REACT_FIREBASE_PROJECT_ID`, `VITE_REACT_FIREBASE_STORAGE_BUCKET` ,`VITE_REACT_FIREBASE_MESSAGING_SENDER_ID`, `VITE_REACT_FIREBASE_APP_ID` e `VITE_REACT_FIREBASE_MEASUREMENT_ID`



## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:Pedrooaj/Dashboard.git
```

Entre no diretório do projeto

```bash
  cd Api-Rest
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```



## Stack utilizada

**Front-end:** React,Vite e Styeled-Components.

**Back-end:** Firebase, Firebase Auth e Firebase Storage.






## Autores

- [@pedroooaj](https://www.github.com/pedrooaj)
