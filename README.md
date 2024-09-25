Documentação do Projeto

Nessa API estou fornecendo uma de lista de notebooks Lenovo via um endpoint HTTP

Este projeto tem como objetivo exibir uma lista de notebooks da marca Lenovo, ordenados do mais barato ao mais caro, com detalhes como preço, título, descrição, número de avaliações, link para o produto e imagem.

Como testar o projeto
Obtenha a lista de produtos Acesse o endpoint adequado para obter uma lista de notebooks Lenovo. O retorno será no formato JSON, contendo os seguintes campos:

title: O nome do notebook.
price: O preço do notebook, utilizado para ordenação.
description: Descrição técnica do produto (processador, memória, armazenamento, sistema operacional, etc.).
reviews: Quantidade de avaliações recebidas pelo produto.
imageUrl: Caminho da imagem do produto.
link: Link para mais detalhes sobre o produto.

Descrição dos campos:

title: Nome abreviado do produto.
price: Preço do produto em dólares.
description: Informações técnicas do notebook, incluindo tamanho da tela, processador, RAM, armazenamento e sistema operacional.
reviews: Número de avaliações que o produto recebeu.
imageUrl: URL da imagem do produto.
link: Endereço para acessar mais informações sobre o produto.
Ordenação Os produtos são retornados já ordenados pelo preço, do mais barato para o mais caro.

Como rodar o projeto
Clone o repositório:

bash
Copiar código
git clone <url-do-repositório>
Navegue até o diretório do projeto:

bash
Copiar código
cd nome-do-projeto
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Acesse o endpoint definido no projeto para obter a lista de produtos e suas informações.

Para o teste da API usei a ferramenta insomnia 

Como testar no Insomnia
Certifique-se de que a API está rodando no servidor local. Se o servidor estiver rodando na porta padrão http://localhost:3000, utilize esta URL no Insomnia: ((http://localhost:3000/laptops/lenovo))

bash
Copiar código
http://localhost:3000/laptops/lenovo
Método de requisição:

Selecione o método GET.
Clique em Send para enviar a requisição, então você terá a lista de produtos conforme foi solicitado

Devemos ter o seguinte retorno:
Ao enviar a requisição, você deverá receber um retorno com os notebooks da marca Lenovo, com os preços de menor para o maior, e todos os dados do produto, conforme citado acima.
