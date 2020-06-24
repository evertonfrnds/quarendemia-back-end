# Dicionario de dados

## Usuários:
| Field name  | Data type  | Data format  | Field size  | Example  |
|---|---|---|---|---|
| **id**  | Integer  | NNNNNN  | 6  | 1  |
| **nome**  |  Text |   |  32 |  everton fernandes |
| **email**  | Text  |   |  64 | email@email.com  |
| **cargo**  | Integer  | N  | 1  | 1 |
| **senha**  | Text  |   |21|  password |
| **status**  | Integer  |   | 1  | 1 |
| **token**  |  Text |   |  64 | asd1wd12da99ASj983  |
| **valid_date_token**  |  Text | YYYY/MM/DD  | 10  | 2020/06/21  |


## Planos:
| Field name  | Data type  | Data format  | Field size  | Example  |
|---|---|---|---|---|
| **id**  | Integer  | NNNNNN  | 6  |  1 |
| **nome**  |  Text |   | 32  | Completo |
| **descricao**  | Text  |   | 64  | Todos os planos atribuido |
| **valor**  | Float  | NNN,NN  | 10  | 50,00 |

## Clientes:
| Field name  | Data type  | Data format  | Field size  | Example  |
|---|---|---|---|---|
| **id**  | Integer  | NNNNNN  | 6  |  1 |
| **nome**  |  Text |   | 32  | Fernando |
| **email**  | Text  |   | 64  | email@email.com |
| **status**  | Integer  |   | 1  | 1 |

## Mensalidade:
| Field name  | Data type  | Data format  | Field size  | Example  |
|---|---|---|---|---|
| **id**  | Integer  | NNNNNN  | 6  |  1 |
  **id_cliente**  | Integer  | NNNNNN  | 6  | 1  |
| **mes**  |  Integer |   | 32  | 06 |
| **ano**  | Integer  |   | 64  | 2020 |
| **valor**  |  Float |   | 32  | 50,00 |
| **status**  | Integer  |   | 1  | 1 |

## Medidas 

| Field name  | Data type  | Data format  | Field size  | Example  |
|---|---|---|---|---|
| **id**  | Integer  | NNNNNN  | 6  | 1  |
  **id_cliente**  | Integer  | NNNNNN  | 6  | 1  |
| **altura**  |  Integer |   |  32 |  180 |
| **peso**  | Float  |   |  64 | 84  |
| **pescoco**  | Float  |   | 1  | 34 |
| **torax_sup**  | Float  |   |21|  99 |
| **torax_inf**  | Float  |   | 1  | 89 |
| **busto**  |  Float |   |  64 | 111  |
| **cintura**  |  Float |   | 10  | 90  |
| **abdomen**  |  Float |   | 10  | 94  |
| **quadril**  |  Float |   | 10  | 103  |
| **coxa**  |  Float |  {e: N, d: N} | 10  | {e: 66, d: 66}  |
| **panturrilha**  |  Float | {e: N, d: N}  | 10  | {e: 41, d: 40}  |
| **braco**  |  Float | {e: N, d: N}  | 10  | {e: 31, d: 30}  |
| **antebraco**  |  Float | {e: N, d: N}  | 10  | {e: 25, d: 24}  |
| **created_at**  |  Date |   | 10  | 2020/06/21  |


