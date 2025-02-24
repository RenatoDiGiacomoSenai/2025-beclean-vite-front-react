# 2025 Base Vite React

Este é um template base para projetos simples utilizando Vite e React. Ele foi criado para facilitar o início de novos projetos, fornecendo uma estrutura básica e pronta para uso.

## Requisitos

- Node.js (versão 20.10.0 ou superior)
- pnpm (versão 9.12.13 ou superior)
- Docker (versão 26.1.4 ou superior) ou Docker Desktop instalado

### Dica

É recomendado utilizar o `Vs Code` como editor de código para esse projeto, para utilizar ao máximo as funcionalidades e as extensões que facilitam o desenvolvimento que estão recomendadas para esse projeto.

## Design System

Este projeto foi desenvolvido utilizando os componentes do Design System `ISTIC UI`, onde a documentação dos componentes disponíveis está no link abaixo:

[https://frontdesignsystem.azurewebsites.net/?path=/docs/istic-ui-introdu%C3%A7%C3%A3o--documentation](https://frontdesignsystem.azurewebsites.net/?path=/docs/istic-ui-introdu%C3%A7%C3%A3o--documentation)

## Passo a Passo para Execução do Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/istic-sp/2025-base-vite-front-react.git
```

2. **Navegue até o diretório do projeto:**

```bash
cd 2025-base-vite-front-react
```

3. **Instale as dependências com o gerenciador de dependências pnpm:**

Este projeto utiliza o pnpm devido a sua velocidade em instalar os pacotes e pela sua otimização do espaço em disco.

```bash
pnpm install
```

Link para a documentação do pnpm: [https://pnpm.io/pt/](https://pnpm.io/pt/)

4. **Crie o arquivo .env do projeto:**

Copie o arquivo `.env.example` na pasta raiz do projeto e renomeie para `.env`

4. **Execute o projeto:**

```bash
pnpm dev
```

5. **Abra o navegador e acesse:**

[http://localhost:3000](http://localhost:3000)

**Dica**

Com o projeto rodando, você pode executar o projeto no Vs Code com as teclas `CTRL + F5`, e pode utilizar as ferramentas do editor como por exemplo o debug.

## Estrutura do Projeto

- `nginx/`: Contém o arquivo de configuração do nginx para executar o projeto pelo Docker
- `public/`: Contém os arquivos públicos do site como o favicon por exemplo.
- `src/`: Contém o código fonte do projeto.
- `src/vite-env.d.ts`: Arquivo de definição dos tipos e declaração das variáveis de ambiente.
- `src/assets`: Contém os arquivos estáticos por exemplo imagens, fontes e arquivos json.
- `src/features`: Contém os arquivos core da aplicação, divididos por pastas para cada funcionalidade.
- `src/settings`: Contém os arquivos de configuração de bibliotecas de terceiras, como o axios por exemplo.
- `src/shared`: Contém os arquivos e componentes compartilhados por toda a aplicação.
- `index.html`: Arquivo HTML principal.
- `.env.example`: Estrutura base do arquivo `.env` do projeto.
- `vite.config.js`: Configuração do Vite.

## Docker

Este projeto está pronto para ser executado via docker. As varáveis de ambiente que o projeto necessita para funcionar estão presentes nio arquivo `.env.example`. Para passar essas variáveis para o container, você deve passar as mesmas como argumentos no momento do build da imagem.

Antes de fazer o build, vamos verificar a seção de variáveis no arquivo `Dockerfile` na raiz do projeto:

```docker
# Set the environment variables from the .env.example file
ARG VITE_APP_NAME="Vite App"
ARG VITE_AUTH_STORAGE_KEY="auth"
ARG VITE_BACKEND_API_URL="http://localhost:5000"
ARG VITE_HOME_PAGE="/users"

# Set the environment variable
ENV NODE_ENV=${NODE_ENV}
ENV VITE_APP_NAME=${VITE_APP_NAME}
ENV VITE_AUTH_STORAGE_KEY=${VITE_AUTH_STORAGE_KEY}
ENV VITE_BACKEND_API_URL=${VITE_BACKEND_API_URL}
ENV VITE_HOME_PAGE=${VITE_HOME_PAGE}
```

Garanta que todas as variáveis de ambiente do arquivo `.env.example` estejam relacionadas tanto nos argumentos quanto nas variáveis de ambiente em si.

Com as variáveis configuradas, na raiz do projeto execute o comando abaixo para gerar a imagem do projeto:

```bash
docker build --build-arg VITE_APP_NAME="Vite App" --build-arg VITE_AUTH_STORAGE_KEY="auth" --build-arg VITE_BACKEND_API_URL="http://localhost:5000" --build-arg VITE_HOME_PAGE="/users" -t 2025-base-vite-front-react .
```

Lembre-se sempre de atualizar os valores das variáveis para as necessidades do seu projeto.

Após a imagem ser gerada com sucesso, você pode rodar um container do projeto com o comando a seguir:

```bash
docker run -p 80:80 -d 2025-base-vite-front-react
```

Agora acesse o link [http://localhost](http://localhost) para acessar o projeto no seu navegador.

**Dica**

Para utilizar o intellisense do typescript e auto-completar as variáveis de ambiente durante o desenvolvimento, sempre que precisar adicionar uma variável nova não se esqueça de atualizar o arquivo `src/vite-env.d.ts`.

```ts
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_AUTH_STORAGE_KEY: string
  readonly VITE_BACKEND_API_URL: string
  readonly VITE_HOME_PAGE: string
  readonly VITE_NEW_VARIABLE: string
  // more env variables...
}
```

Você agora pode acessar a variável `VITE_NEW_VARIABLE` no código através da seguinte forma:

```ts
import.meta.env.VITE_NEW_VARIABLE
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie uma branch para sua feature ou correção, e envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
