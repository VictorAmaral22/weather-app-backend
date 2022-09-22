Partindo dos conteúdos apresentados em aula. Desenvolva uma API Rest, utilizando as técnicas de desenvolvimento, concentrando-se na legibilidade do código e boas práticas de programação.

● Todos os trabalhos terão uma tabela usuário, com pelo menos os parâmetros name, email, senha (criptografada)

● O objeto será definido pelo aluno, deverá conter pelo menos 4 atributos, sendo um deles uma associação 1:N.

Exemplo:
    Série
        Nome
        Plataformas
        Temporadas [ Eps[] ]
        Atores
        Usuário que cadastrou

Deverão ser implementados os endpoints para as operações de CRUD, respeitando as camadas da aplicação e regra de negócio, dentro dos padrões apresentados em aula.

– É obrigatória a utilização do Sequelize

    1. (1,0) Organização do código e usabilidade do sistema quanto ao exercício proposto.

    2. (1,0) Cadastro de usuário na plataforma

    3. (2,0) Autenticação - Rotas de Criação / Update / Delete; Utilizando algum TOKEN / JWT / Builtin no caso de frameworks no cabeçalho das requisições.
        a. (1,0) Verificação do email/senha e geração do token
        b. (1,0) Proteção das rotas
        
    4. (2,0) Create - Criar um recurso a partir de uma requisição do tipo POST enviado os dados por JSON
        a. (1,0) Recurso Principal
        b. (1,0) Recursos associados 1:N
    
    5. (2,0) Read - Listar recursos através do método GET
        a. (1,0) Listar todos - sem detalhes 1:N
        b. (1,0) Listar pelo ID com detalhes 1:N, retornando erro caso o ID não exista

    6. (1,0) Update - Atualizar um recurso através do ID com o método PUT, retornando o novo elemento, erro caso o ID
        a. (0,5) - Recurso principal Utilizar o cascade para remover automaticamente as relações.
        b. (0,5) - Recurso associado

    7. (1,0) DELETE - Deletar um recurso pelo ID através do método DELETE retornando uma resposta vazia. Erro caso o ID não exista;
        a. (0,5) - Recurso principal Utilizar o cascade para remover automaticamente as relações.
        b. (0,5) - Recurso associado


======================================    