# freelancer-api
The "freelancer api" is a simple API for managing freelance job advertisements for developers, allowing you to view, register, update and delete advertisements.

## Rotas

1. **Realizar login**

    Endpoint: `POST /login`

    Parâmetros no Corpo da Requisição:
    - `email` (string) - Email do desenvolvedor .
    - `password` (string) - Senha do desenvolvedor 

    Esta rota permite realizar login, retonando com o token para autenticar o desenvolvedor.

    Exemplo de corpo de requisição:
    ```json
    {
        "email": "alexandrevianna511@gmail.com",
        "password": "senhasegura"
    }
    ```
    Exemplo de retorno de sucesso (status 200):
    ```json
    {
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhhbmRyZXZpYW5uYTUxMUBnbWFpbC5jb20iLCJpYXQiOjE2OTI5ODkyNzQsImV4cCI6MTY5MzA3NTY3NCwic3ViIjoiMSJ9.VpDXyavwTfLR-tSxCxYRtKcyI_6C-6rAtDRSVepMNzY"
    }
    ```
    Exemplo de retorno de erro (status 400):
    ```json
    {
        "password": [
            "Required"
        ]
    }
    ``
    Exemplo de retorno de erro (status 401):
    ```json
    {
        "message": "Username or password is incorrect"
    }
    ```

2. **Criar conta developer**

    Endpoint: `POST /developers`

    Parâmetros no Corpo da Requisição:
    - `name` (string) - Nome do desenvolvedor.
    - `email` (string) - Email do desenvolvedor .
    - `password` (string) - Senha do desenvolvedor 

    Esta rota permite cadastrar uma nova conta com o nome, email e senha fornecidos no corpo da requisição. Ela retorna os dados cadastrados juntamente com o ID gerado para a conta, status da conta e omitindo a senha.

    Exemplo de corpo de requisição:
    ```json
    {
        "name": "Alexanddre Viana",
        "email": "Alexadrevianna@gmail.com",
        "password": "senh@$egur@"
    }
    ```

    Exemplo de retorno de sucesso (status 201):
    ```json
    {
        "id": 3,
        "name": "Alexanddre Viana",
        "email": "Alexadrevianna@gmail.com",
        "active": true
    }
    ```
    Exemplo de retorno de erro (status 400):
    ```json
    {
        "password": [
            "Required"
        ]
    }
    ```
    Exemplo de retorno de erro (status 500):
    ```json
    {
        "message": "Internal server error"
    }
    ```

3. **Listar de todos os projetos do desenvolvedor**

    Endpoint: `GET /developers/:id`

    Parâmetros:
    - `id` (numérico) - ID da conta do desenvolvedor.
    - Token - adquirido ao realizar login

    Esta rota traz os detalhes de todos os projetos que o desenvolvedor participa/paticipou, referente ao ID passado.

    Exemplo de retorno de sucesso (status 200):
    ```json
    [
        {
            "developerId": 1,
            "developerName": "Alexandre Vianna",
            "developerEmail": "alexandrevianna511@gmail.com",
            "developerIsActive": true,
            "projectId": 1,
            "projectTitle": "KenzieDevelopers",
            "projectDescription": "Projeto backend",
            "projectTechnology": "Express.js",
            "projectRepository": "github.com/kenzie-Academy-Brasil-Developers/kenziedevelopers",
            "projectStartDate": "2023-08-24T01:57:26.385Z"
        }
    ]
    ```

    Exemplo de retorno de erro (status 404):
    ```json
    {
        "message": "There is no project linked to this developer"
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "message": "Internal server error"
    }
    ```


