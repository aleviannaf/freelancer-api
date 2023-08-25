# freelancer-api
The "freelancer api" is a simple API for managing freelance job advertisements for developers, allowing you to view, register, update and delete advertisements.

## Rotas

1. **Criar conta developer**

    Endpoint: `GET /developers`

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
    ``
    Exemplo de retorno de erro (status 500):
    ```json
    {
        "message": "Internal server error"
    }
    ```
