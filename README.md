# Consulta CEP

Este projeto oferece uma interface para consulta de endereços brasileiros a partir de um CEP, utilizando a API pública ViaCEP. O usuário pode inserir um CEP e obter informações como logradouro, bairro, cidade e estado. Este projeto foi desenvolvido com Vue 3, Vuetify, Pinia e TypeScript.

## Funcionalidades

- Consulta rápida e intuitiva de CEPs.
- Exibição de informações detalhadas sobre o endereço.
- Histórico de consultas realizadas.
- Opções para limpar resultados individuais ou todos de uma vez.

## Tecnologias Utilizadas

- **Vue 3**: Um framework JavaScript progressivo.
- **Vuetify**: Uma biblioteca de componentes Vue.js que segue o Material Design.
- **Pinia**: O armazenamento de estado oficial para Vue.js.
- **TypeScript**: Um superset de JavaScript que adiciona tipagem e alguns outros recursos.
- **Jest**: Um framework de teste em JavaScript.

## Como Executar

Para rodar o projeto localmente, siga estes passos:

1. Clone o repositório:

    ```bash
    git clone https://github.com/grilomatheus/jedis-front.git
    ```

2. Entre no diretório do projeto:

    ```bash
    cd jedis-front
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o servidor de desenvolvimento:

    ```bash
    npm run serve
    ```

Acesse `http://localhost:8080` no seu navegador para ver a aplicação.


## API Utilizada

Este projeto utiliza a API pública [ViaCEP](https://viacep.com.br) para consulta de endereços a partir de CEPs brasileiros.

### Endpoint

- `GET https://viacep.com.br/ws/{cep}/json/`

Substitua `{cep}` pelo CEP que deseja consultar. A API retornará um objeto JSON com as informações do endereço.

### Exemplo de Uso

Para consultar o CEP `22010-000`, faça uma requisição GET para:
https://viacep.com.br/ws/22010000/json/


A resposta será um objeto JSON contendo os dados do endereço associado ao CEP.


## Testes

Para executar os testes, use o comando:

	npm run test:unit
    

## Contribuindo
Contribuições são sempre bem-vindas! Para contribuir, por favor, faça um fork do repositório, crie uma branch para sua feature, faça commit das suas alterações e envie um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para mais detalhes.


Desenvolvido por Matheus Grilo com ❤️.
