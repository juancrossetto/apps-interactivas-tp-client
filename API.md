###Crear usuario

POST

/user/:nick


Retorna:

- Si lo pudo crear: 200

- Si ya existe ó es vacío: 400 bad request



###Obtener juegos

GET

/games?type=math&level=easy    //El type puede ser math ó language, el level: easy,medium,hard

Retorna: un array de juegos

````
[
{
"id" : "uuid",
"type":"math",
"level":"easy",
"layout" : {
"8 + ${answer} = 10"
},
},
{
"id" : "uuid",
"type":"language",
"level":"easy",
"layout" : {
"Escritorio tiene ${answer} sílabas"
},
},
]
````

###Para submitear la respuesta de un nene

POST

/games/submit

Body

````
{
"id":"uuid", //el que previamente retornamos en el get
"answer": "lalala",
"start_game": "timestamp", //esto es el time now desde que se le muestra el juego
"end_game": "timestamp",   // esto es una vez que submitea la respuesta, por que los necesitamos?
}                            //Para crear el ranking basados en el tiempo que le llevo resolverlo
````

Retorna:

- Sí era la respuesta correcta: 200 Ok

- Sí fue incorrecto: 400 bad request



### Para obtener el ranking

GET

/ranking

Retorna: un array con usuarios rankeados

````
[
{
"user": "pepe",
"points" : "100"
},
{
"user": "lolo",
"points" : "80"
}
]
````


200 OK si lo pudo calcular

500 Internal server error sí no pudo leer el mongo o algo parecido.
