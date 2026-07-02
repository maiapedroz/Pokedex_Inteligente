25/06
Depois de ser notificado na quinta-feira, dado o prazo grande, dei uma lida no projeto e deixei para começar após o fim de semana e o jogo do Brasil.

30/06
Apesar de ser graduando em Ciência da Computação, meus professores de webDev foram bem medíocres, portanto eu não entendo muito além de HTML/CSS, já cheguei a usar React, mas não foi muito didático. Este projeto, com sugestões de IA, farei com as seguintes tecnologias:

Frontend: React + Vite
Estilo: CSS puro
Linguagem: Python
Backend: FastAPI
Pedi para o chat me explicar as várias opções e apesar da sugestão de usar Express, percebi que FastAPI se encaixaria melhor. Considerei também o Django pois já me foi recomendado aprender, mas não acho que é uma boa hora.
Requisições: Axios

Conheci hoje a ferramenta de gestão de dependencias uv, porém eu pretendia usar o venv do python mesmo, acabou ficando meio bagunçado e misturado e decidi remover do projeto, espero que não sobre muito resíduo.

Ok, deu muito estresse, apaguei o projeto inteiro e usei o uv sim.

Fluxo:

Utilizando a FastAPI, criei a primeira rota (/health) para ver se a aplicação estava ligando

Criei o modelo de requisição da API em pokemon_service.py e especifiquei as rotas em pokemon_routes.py

01/07
Para a página inicial quero listar todos os pokemons com informações minimas, clicando em um deles leva a página do pokemon com informações mais profundas. Na página inicial para evitar a magnitude da pokedex inteira, irei separar as gerações através de abas de seleção (Gen 1, Gen 2, ...).

A função para requisição de geração eu fiz de forma mais autoral (menos I.A) do que a de requisição de pokemon específico, lutei um pouco para entender a parte depois da básica de list comprehension e para entender a sintaxe da manipulação JSON que ocorre aqui.

Aqui em grande parte foi encerrada a parte da pokeAPI.
Edit: Coloquei a url da imagem do pokemon na busca de geração.

Consegui listar toda Gen 1 na página (id e nome), apaguei o css do vite, coloquei a imagem de cada pokemon e ajustei o tamanho. Dividi a apresentação em: cada Pokemon é contido em um Card, que faz parte de um Grid com vários Cards.
Fiz um CSS simples pra eles.

Algo legal que a I.A me ensinou é criar funções do jsx que representam e podem ser exportadas como elementos html. Foi exatamente o que eu fiz com os Cards, Grid e Abas de Geração. Cada item é escrito a parte e chamado pelo App.jsx de forma que tudo fique compartimentalizado e simplificado.

Fiz também uma Search Bar simples, que altera a lista de pokemons que é enviada para o Grid.

Eu to me incomodando um pouco com a demora para carregar as imagens ao clicar nos botões pela primeira vez.

Nossa só vi agora que commits com o histórico de desenvolvimento é um dos critérios de desenvolvimento