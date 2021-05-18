# **API De Finanças**

Trabalho prático da disciplina Arquitetura de Web Services do curso de pós graduação em arquitetura de sistemas distribuidos. 
Aplicação desenvolvida como conceito para uma API de finanças com opções de investimento

# Stack de tecnologia
A API foi construída baseada em NodeJS, com Typescript. No mecanismo de persistência, é utilizado um banco MongoDB em memória.
Na parte de testes automatizados, é utilizado um projeto/Collection do Postman com as requisições para os endpoints disponíveis e código de validação

# Documentação
Para documentar o objetivo e contrato de cada endpoint, é utilizado o Swagger. Após subir o servidor localmente (veja instruções abaixo), navegue para localhost:8000/api-docs

# Como Executar a aplicação
Assumindo que npm e nodejs já estão instalados no ambiente:

* Clone este repositório para sua máquina
* Execute `npm i` na raíz do projeto para instalar as dependencias
* Execute `npm run start` para executar o script de inicialização do servidor
* Acesse http://localhost:8000/api-docs para ver os endpoints disponíveis, juntamente com a documentação de cada um

# Como Executar os testes
* Faça o download da aplicação Postman (https://www.postman.com/), caso ainda não a tenha
* Abra a aplicação Postman e importe a collection disponível dentro da pasta `postman`
* Execute as requests, caso queira invocar manualmente os endpoints
* Execute a suite de teste automatizado disponível dentro da mesma collection importada

