
Você foi solicitado a desenvolver uma API que contenha os seguintes critérios listados abaixo. Na reunião de alinhamento técnico, foi ​sugerido​ que você utilizasse a metodologia TDD para odesenvolvimento, e portanto foram levantados os seguintes requisitos:

●Um get na rota /products deverá listar um array de produtos;

●A rota /products/:id deverá retornar um produto único;

●Um post na rota /products deve inserir o produto na lista passado no corpo da requisição;

●Um produto não deve ser inserido se a quantidade de caracteres da descrição for menor que 10;

●Um produto não deve ser inserido se o preço for menor ou igual a 0

Após a definição de requisitos, você deverá construir uma API que tenha as seguintes funcionalidadesnas respectivas rotas indicadas:

●GET /products - Exibir todos os produtos de uma lista;

●GET /products/:id - Exibir um JSON com os dados de um produto (em memória, ​não énecessário nenhuma persistência no banco​), seguindo a estrutura como no exemplo:


{id: ​1​,name: “Nome do usuário”,description: “Descrição do produto aqui”,price: ​19.00}


●POST /products - Inserir um novo produto na lista.
