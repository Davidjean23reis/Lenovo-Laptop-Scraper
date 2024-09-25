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

Coloquei aqui abaixo um exemplo de retorno: "JSON"

[
   {
      "title": "Lenovo V110-15...",
      "price": 321.94,
      "description": "Lenovo V110-15IAP, 15.6\" HD, Celeron N3350 1.1GHz, 4GB, 128GB SSD, Windows 10 Home",
      "reviews": 5,
      "imageUrl": "/images/test-sites/e-commerce/items/cart2.png",
      "link": "/test-sites/e-commerce/static/product/63"
   },
   {
      "title": "Lenovo ThinkPa...",
      "price": 404.23,
      "description": "Lenovo ThinkPad E31-80, 13.3\" HD, Celeron 3855U 1.6GHz, 4GB, 128GB SSD, Windows 10 Home",
      "reviews": 12,
      "imageUrl": "/images/test-sites/e-commerce/items/cart2.png",
      "link": "/test-sites/e-commerce/static/product/72"
   },
   {
      "title": "Lenovo Legion...",
      "price": 1112.91,
      "description": "Lenovo Legion Y520-15IKBM, Black, 15.6\" FHD IPS, Core i5-7300HQ, 8 GB, 128GB SSD + 2 TB HDD, NVIDIA GeForce GTX 1060 6 GB, FreeDOS + Windows 10 Home",
      "reviews": 1,
      "imageUrl": "/images/test-sites/e-commerce/items/cart2.png",
      "link": "/test-sites/e-commerce/static/product/101"
   }
]

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
Enviar requisição:

Devemos ter o seguinte retorno:
Ao enviar a requisição, você deverá receber um retorno com os notebooks da marca Lenovo, com os preços de menor para o maior, e todos os dados do produto, conforme o exemplo de retorno fornecido acima.