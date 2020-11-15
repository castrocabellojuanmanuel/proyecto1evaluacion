db.jugadores.find( {} ).count()
/* (CUENTA EL NÚMERO DE DOCUMENTOS EN LA COLECCIÓN)
41 
*/
db.jugadores.find({$and: [ {PosicionPrincipal: {$eq: "Portero"}}, {Valor: {$lte: 100000000}},{Valor: {$gte: 60000000}},{Altura: {$gte: 1.90}}]  }).pretty()
/* MUESTRA LOS JUGADORES QUE SU POSICION PRINCIPAL SEA LA DE PORTERO, UN VALOR MENOR O IGUAL A 100.000.000 Y MAYOR O IGUAL A 60.000.000 Y CON UNA ALTURA MAYOR O IGUAL A 1.90
{
        "_id" : ObjectId("5faffdf71a3766a93251c459"),
        "Jugador" : "Thibaut Courtois",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Española",
        "Equipo" : "Real Madrid CF",
        "Edad" : 28,
        "PosicionPrincipal" : "Portero",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Izquierdo",
        "Valor" : 75000000,
        "Estadisticas" : {
                "Partidos" : 43,
                "Goles" : 0,
                "Asistencias" : 0,
                "GolesContra" : 32
        },
        "Altura" : 1.99
}
{
        "_id" : ObjectId("5faffdf71a3766a93251c465"),
        "Jugador" : "Gianluigi Donnarumma",
        "Nacionalidad" : "Italia",
        "Liga" : "Liga Italiana",
        "Equipo" : "AC Milan",
        "Edad" : 21,
        "PosicionPrincipal" : "Portero",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 39,
                "Goles" : 0,
                "Asistencias" : 0,
                "GolesContra" : 45
        },
        "Altura" : 1.96
} */
db.jugadores.find({$and: [ {PosicionPrincipal: {$eq: "Defensa Central"}},{PosicionesSecundarias: {$eq: "Lateral Derecho"}},
{Valor: {$lte: 50000000}},{Valor: {$gte: 10000000}},{PieHabil: {$eq:"Derecho"}},{"Estadisticas.Goles": {$gte: 5}}]  }).pretty()

/* (MUESTRA LOS JUGADORES CUYA POSICION PRINCIPAL SEA DEFENSA CENTRAL, QUE PUEDAN JUGAR DE LATERAL DERECHO, CON UN VALOR DE AL MENOS 10.000.000 PERO QUE NO PASE DE 50.000.000,
    QUE SEA DIESTRO Y HAYA ANOTADO AL MENOS 5 GOLES )

    {
        "_id" : ObjectId("5faffdf71a3766a93251c44a"),
        "Jugador" : "Sergio Ramos",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "Real Madrid CF",
        "Edad" : 34,
        "PosicionPrincipal" : "Defensa Central",
        "PosicionesSecundarias" : [
                "Lateral Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 14000000,
        "Estadisticas" : {
                "Partidos" : 44,
                "Goles" : 13,
                "Asistencias" : 1
        },
        "Altura" : 1.84
} */

db.jugadores.find({$and: [ {PosicionPrincipal: {$eq: "Defensa Central"}},{ Liga: { $ne: "Liga Inglesa" }},{ $nor: [{ Edad: {$gt: 30} }]} ] }).pretty()
/* (MUESTRA LOS JUGADORES CUYA POSICION PRINCIPAL ES DEFENSA CENTRAL , QUE NO SEA DE LA LIGA INGLESA Y NO TENGA MAS DE 30 AÑOS)

{
        "_id" : ObjectId("5faffdf71a3766a93251c456"),
        "Jugador" : "Jules Kounde",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 22,
        "PosicionPrincipal" : "Defensa Central",
        "PosicionesSecundarias" : [
                "Lateral Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 40000000,
        "Estadisticas" : {
                "Partidos" : 40,
                "Goles" : 2,
                "Asistencias" : 1
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffdf71a3766a93251c457"),
        "Jugador" : "Diego Carlos",
        "Nacionalidad" : "Brasil",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 27,
        "PosicionPrincipal" : "Defensa Central",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 50000000,
        "Estadisticas" : {
                "Partidos" : 45,
                "Goles" : 2,
                "Asistencias" : 1
        },
        "Altura" : 1.86
} */
db.jugadores.find({$and: [ {PosicionPrincipal: {$eq: "Lateral Izquierdo"}},{ PieHabil: { $eq: "Izquierdo" }},{ $nor: [{ Edad: {$gt: 25} }]},
{"Estadisticas.Goles": {$gte: 1}},{"Estadisticas.Asistencias": {$gte: 4}}] }).pretty()
/* (MUESTRA LOS JUGADORES CUYA POSICION SEA LATERAL IZQUIERDO , QUE SEAN ZURDOS, QUE NO TENGAN MAS DE 25 AÑOS Y HAYAN ANOTADO AL MENOS 1 GOL Y DADO AL MENOS  4 ASISTENCIAS)
{
        "_id" : ObjectId("5faffdf71a3766a93251c455"),
        "Jugador" : "Ferland Mendy",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Española",
        "Equipo" : "Real Madrid CF",
        "Edad" : 25,
        "PosicionPrincipal" : "Lateral Izquierdo",
        "PosicionesSecundarias" : [
                "Interior Izquierdo"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 40000000,
        "Estadisticas" : {
                "Partidos" : 32,
                "Goles" : 1,
                "Asistencias" : 4
        },
        "Altura" : 1.8
}
{
        "_id" : ObjectId("5faffdf71a3766a93251c45a"),
        "Jugador" : "Alphonso Davies",
        "Nacionalidad" : "Canada",
        "Liga" : "Liga Alemana",
        "Equipo" : "Bayern Munich",
        "Edad" : 20,
        "PosicionPrincipal" : "Lateral Izquierdo",
        "PosicionesSecundarias" : [
                "Extremo Izquierdo",
                "Extremo Derecho"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 46,
                "Goles" : 3,
                "Asistencias" : 10
        },
        "Altura" : 1.81
} */
db.jugadores.find({$and: [ {PosicionPrincipal: {$eq: "Lateral Derecho"}},{"Estadisticas.Partidos": {$gte: 40}}] }).pretty()
/* (MUESTRA LOS JUGADORES CUYA POSICION SEA LATERAL DERECHO Y HAYAN JUGADO AL MENOS 40 PARTIDOS)

{
        "_id" : ObjectId("5faffdf71a3766a93251c44e"),
        "Jugador" : "Jesus Navas",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 34,
        "PosicionPrincipal" : "Lateral Derecho",
        "PosicionesSecundarias" : [
                "Extremo Derecho",
                "Interior Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 3000000,
        "Estadisticas" : {
                "Partidos" : 47,
                "Goles" : 0,
                "Asistencias" : 10
        },
        "Altura" : 1.72
}
{
        "_id" : ObjectId("5faffdf71a3766a93251c452"),
        "Jugador" : "Daniel Carvajal",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "Real Madrid CF",
        "Edad" : 28,
        "PosicionPrincipal" : "Lateral Derecho",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 40000000,
        "Estadisticas" : {
                "Partidos" : 42,
                "Goles" : 1,
                "Asistencias" : 8
        },
        "Altura" : 1.73
} */
db.jugadores.find({$and: [{PosicionPrincipal:{$in:["Mediocentro","Mediapunta","Pivote"]}},{PosicionesSecundarias:{$in:["Mediocentro","Mediapunta","Pivote"]}},
{"Estadisticas.Partidos":{$gt: 40}}] }).pretty()

/* (MUESTRA LOS JUGADORES QUE CUYA POSICION PRINCIPAL SEA MEDIOCENTRO, MEDIAPUNTA O PIVOTE Y PUEDAN JUGAR AL MENOS DE MEDIOCENTRO, MEDIAPUNTA O PIVOTE 
    Y HAYAN JUGADO MAS DE 40 PARTIDOS)

    {
        "_id" : ObjectId("5faffd961a3766a93251c435"),
        "Jugador" : "Frankie De Jong",
        "Nacionalidad" : "Holanda",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 23,
        "PosicionPrincipal" : "Mediocentro",
        "PosicionesSecundarias" : [
                "Pivote",
                "Defensa Central"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 70000000,
        "Estadisticas" : {
                "Partidos" : 42,
                "Goles" : 2,
                "Asistencias" : 4
        },
        "Altura" : 1.81
}
{
        "_id" : ObjectId("5faffd961a3766a93251c438"),
        "Jugador" : "Fernando Reges",
        "Nacionalidad" : "Brasil",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 33,
        "PosicionPrincipal" : "Pivote",
        "PosicionesSecundarias" : [
                "Defensa Central",
                "Mediocentro"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 4000000,
        "Estadisticas" : {
                "Partidos" : 42,
                "Goles" : 3,
                "Asistencias" : 3
        },
        "Altura" : 1.83
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43e"),
        "Jugador" : "Bruno Fernandes",
        "Nacionalidad" : "Portugal",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester United",
        "Edad" : 26,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 50,
                "Goles" : 27,
                "Asistencias" : 22
        },
        "Altura" : 1.79
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43f"),
        "Jugador" : "Kevin De Bruyne",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho",
                "Interior Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 48,
                "Goles" : 16,
                "Asistencias" : 23
        },
        "Altura" : 1.81
} */

db.jugadores.find( { Jugador: { $regex: /vinga$/ } }  ).pretty()

/* (MUESTRA LOS JUGADORES CUYO NOMBRE TERMINE POR "VINGA")
{
        "_id" : ObjectId("5faffd961a3766a93251c43b"),
        "Jugador" : "Eduardo Camavinga",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Francesa",
        "Equipo" : "Stade Rennais",
        "Edad" : 18,
        "PosicionPrincipal" : "Mediocentro",
        "PosicionesSecundarias" : [
                "Pivote"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 50000000,
        "Estadisticas" : {
                "Partidos" : 36,
                "Goles" : 1,
                "Asistencias" : 2
        },
        "Altura" : 1.82
} */
db.jugadores.find({$and: [ {PosicionPrincipal: {$regex: /^Medi/}},{Liga: {$eq: "Liga Inglesa"}},{Altura: {$lt: 1.85}},{"Estadisticas.Asistencias": {$gt: 20}}] }).pretty()
/* (MUESTRA LOS JUGADORES CUYA POSICION PRINCIPAL COMIENCE POR "MEDI", QUE SEAN DE LA LIGA INGLESA, MIDAN MENOS DE 1.85 Y HAYAN DADO MAS DE 20 ASISTENCIAS)

{
        "_id" : ObjectId("5faffd961a3766a93251c43e"),
        "Jugador" : "Bruno Fernandes",
        "Nacionalidad" : "Portugal",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester United",
        "Edad" : 26,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 50,
                "Goles" : 27,
                "Asistencias" : 22
        },
        "Altura" : 1.79
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43f"),
        "Jugador" : "Kevin De Bruyne",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho",
                "Interior Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 48,
                "Goles" : 16,
                "Asistencias" : 23
        },
        "Altura" : 1.81
} */

db.jugadores.find({$and: [ {PosicionPrincipal: {$in: ["Extremo Izquierdo","Extremo Derecho","Delantero Centro"]}},
{Nacionalidad: {$in: ["Brasil","Portugal","Argentina"]}},{Valor:{$not:{$lt: 55000000}}}] }).pretty()

/* (MUESTRA LOS JUGADORES QUE SEAN EXTREMO IZQUIERDO, EXTREMO DERECHO O DELANTERO CENTRO, QUE SU NACIONALIDAD SEA BRASIL,
    ARGENTINA O PORTUGAL Y QUE SU VALOR NO SEA MENOR DE 55.000.000)

    {
        "_id" : ObjectId("5faffd961a3766a93251c419"),
        "Jugador" : "Neymar Jr",
        "Nacionalidad" : "Brasil",
        "Liga" : "Liga Francesa",
        "Equipo" : "Paris Saint Germain",
        "Edad" : 28,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Mediapunta",
                "Delantero Centro"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 128000000,
        "Estadisticas" : {
                "Partidos" : 27,
                "Goles" : 19,
                "Asistencias" : 12
        },
        "Altura" : 1.75
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41a"),
        "Jugador" : "Lionel Messi",
        "Nacionalidad" : "Argentina",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 33,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Mediapunta"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 100000000,
        "Estadisticas" : {
                "Partidos" : 44,
                "Goles" : 31,
                "Asistencias" : 27
        },
        "Altura" : 1.7
}
{
        "_id" : ObjectId("5faffd961a3766a93251c424"),
        "Jugador" : "Cristiano Ronaldo",
        "Nacionalidad" : "Portugal",
        "Liga" : "Liga Italiana",
        "Equipo" : "Juventus",
        "Edad" : 35,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 46,
                "Goles" : 37,
                "Asistencias" : 7
        },
        "Altura" : 1.87
} */

db.jugadores.find({$or: [{PosicionPrincipal: {$eq: "Delantero Centro"}},{"Estadisticas.Goles": {$gte: 30}} ] }).pretty()

/* (MUESTRA LOS JUGADORES QUE CUYA POSICION PRINCIPAL SEA DELANTERO CENTRO O LOS JUGADORES QUE HAYAN ANOTADO AL MENOS 30 GOLES)
{
        "_id" : ObjectId("5faffd961a3766a93251c418"),
        "Jugador" : "Kylian Mbappe",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Francesa",
        "Equipo" : "Paris Saint Germain",
        "Edad" : 21,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 180000000,
        "Estadisticas" : {
                "Partidos" : 37,
                "Goles" : 30,
                "Asistencias" : 19
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41a"),
        "Jugador" : "Lionel Messi",
        "Nacionalidad" : "Argentina",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 33,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Mediapunta"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 100000000,
        "Estadisticas" : {
                "Partidos" : 44,
                "Goles" : 31,
                "Asistencias" : 27
        },
        "Altura" : 1.7
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41b"),
        "Jugador" : "Raheem Sterling",
        "Nacionalidad" : "Inglaterra",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 25,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Mediapunta",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 128000000,
        "Estadisticas" : {
                "Partidos" : 52,
                "Goles" : 31,
                "Asistencias" : 10
        },
        "Altura" : 1.7
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41e"),
        "Jugador" : "Erling Haaland",
        "Nacionalidad" : "Noruega",
        "Liga" : "Liga Alemana",
        "Equipo" : "Borussia Dortmund",
        "Edad" : 20,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [
                "Mediapunta"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 40,
                "Goles" : 44,
                "Asistencias" : 10
        },
        "Altura" : 1.94
}
{
        "_id" : ObjectId("5faffd961a3766a93251c424"),
        "Jugador" : "Cristiano Ronaldo",
        "Nacionalidad" : "Portugal",
        "Liga" : "Liga Italiana",
        "Equipo" : "Juventus",
        "Edad" : 35,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 46,
                "Goles" : 37,
                "Asistencias" : 7
        },
        "Altura" : 1.87
}
{
        "_id" : ObjectId("5faffd961a3766a93251c427"),
        "Jugador" : "Zlatan Ibrahimovic",
        "Nacionalidad" : "Suecia",
        "Liga" : "Liga Italiana",
        "Equipo" : "AC Milan",
        "Edad" : 39,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 3500000,
        "Estadisticas" : {
                "Partidos" : 20,
                "Goles" : 11,
                "Asistencias" : 5
        },
        "Altura" : 1.95
}
{
        "_id" : ObjectId("5faffd961a3766a93251c432"),
        "Jugador" : "Robert Lewandowski",
        "Nacionalidad" : "Polonia",
        "Liga" : "Liga Alemana",
        "Equipo" : "Bayern Munich",
        "Edad" : 32,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [
                "Mediapunta"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 47,
                "Goles" : 55,
                "Asistencias" : 10
        },
        "Altura" : 1.84
} */
db.jugadores.find({$and: [{PosicionPrincipal: {$eq: "Extremo Derecho"}},{"Estadisticas.Partidos": {$gte: 35}},
{Liga:{$in: ["Liga Española","Liga Inglesa"]}},{Valor:{$gte:1500000}},{Valor:{$lt:51000000}} ] }).pretty()

/* (MUESTRA LOS JUGADORES CUYA POSICION PRINCIPAL SEA EXTREMO DERECHO, LLEVEN AL MENOS 35 PARTIDOS, JUEGUEN EN LA LIGA ESPAÑOLA
    O EN LA LIGA INGLESA Y SU VALOR SEA AL MENOS 1.500.000 Y MENOR QUE 51.000.000)

    {
        "_id" : ObjectId("5faffd961a3766a93251c41f"),
        "Jugador" : "Lucas Ocampos",
        "Nacionalidad" : "Argentina",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 26,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Extremo Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 50000000,
        "Estadisticas" : {
                "Partidos" : 44,
                "Goles" : 17,
                "Asistencias" : 5
        },
        "Altura" : 1.87
}
{
        "_id" : ObjectId("5faffd961a3766a93251c426"),
        "Jugador" : "Joaquin Sanchez",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "Real Betis",
        "Edad" : 39,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Extremo Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 1500000,
        "Estadisticas" : {
                "Partidos" : 36,
                "Goles" : 10,
                "Asistencias" : 3
        },
        "Altura" : 1.81
} */

db.jugadores.find({$and: [{PosicionPrincipal: {$eq: "Delantero Centro"}},{PosicionesSecundarias: {$nin:["Extremo Derecho","Extremo Izquierdo","Mediapunta"]}},
{Altura:{$gte: 1.95}},{PieHabil: {$ne: "Izquierdo"}} ] }).pretty()

/* (MUESTRA LOS JUGADORES CUYA POSICION PRINCIPAL SEA DELANTERO, QUE SUS POSICIONES SECUNDARIAS NO SEAN EXTREMO DERECHO, EXTREMO IZQUIERDO O MEDIAPUNTA,
    QUE MIDAN 1.95 O MAS Y QUE SU PIE HABIL NO SEA EL IZQUIERDO)

    {
        "_id" : ObjectId("5faffd961a3766a93251c427"),
        "Jugador" : "Zlatan Ibrahimovic",
        "Nacionalidad" : "Suecia",
        "Liga" : "Liga Italiana",
        "Equipo" : "AC Milan",
        "Edad" : 39,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 3500000,
        "Estadisticas" : {
                "Partidos" : 20,
                "Goles" : 11,
                "Asistencias" : 5
        },
        "Altura" : 1.95
} */

db.jugadores.find({$or: [ {Jugador: {$regex: /^K/}},{Altura: {$gte: 1.95}},{Altura: {$lt: 1.70}},{"Estadisticas.Partidos": {$lt: 10}}] }).pretty()

/* (MUESTRA LOS JUGADORES CUYO NOMBRE EMPIECE POR "K", LOS QUE MIDAN 1.95 O MAS, LOS QUE MIDAN MENOS DE 1.70 Y LOS QUE HAYAN JUGADO MENOS DE 10 PARTIDOS)

{
        "_id" : ObjectId("5faffd961a3766a93251c418"),
        "Jugador" : "Kylian Mbappe",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Francesa",
        "Equipo" : "Paris Saint Germain",
        "Edad" : 21,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 180000000,
        "Estadisticas" : {
                "Partidos" : 37,
                "Goles" : 30,
                "Asistencias" : 19
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffd961a3766a93251c420"),
        "Jugador" : "Ousmane Dembele",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 23,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Extremo Izquierdo"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 50000000,
        "Estadisticas" : {
                "Partidos" : 9,
                "Goles" : 1,
                "Asistencias" : 0
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffd961a3766a93251c427"),
        "Jugador" : "Zlatan Ibrahimovic",
        "Nacionalidad" : "Suecia",
        "Liga" : "Liga Italiana",
        "Equipo" : "AC Milan",
        "Edad" : 39,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 3500000,
        "Estadisticas" : {
                "Partidos" : 20,
                "Goles" : 11,
                "Asistencias" : 5
        },
        "Altura" : 1.95
}
{
        "_id" : ObjectId("5faffd961a3766a93251c430"),
        "Jugador" : "Thibaut Courtois",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Española",
        "Equipo" : "Real Madrid CF",
        "Edad" : 28,
        "PosicionPrincipal" : "Portero",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Izquierdo",
        "Valor" : 75000000,
        "Estadisticas" : {
                "Partidos" : 43,
                "Goles" : 0,
                "Asistencias" : 0,
                "GolesContra" : 32
        },
        "Altura" : 1.99
}
{
        "_id" : ObjectId("5faffd961a3766a93251c436"),
        "Jugador" : "Ngolo Kante",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Chelsea",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediocentro",
        "PosicionesSecundarias" : [
                "Pivote"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 70000000,
        "Estadisticas" : {
                "Partidos" : 28,
                "Goles" : 3,
                "Asistencias" : 0
        },
        "Altura" : 1.68
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43c"),
        "Jugador" : "Gianluigi Donnarumma",
        "Nacionalidad" : "Italia",
        "Liga" : "Liga Italiana",
        "Equipo" : "AC Milan",
        "Edad" : 21,
        "PosicionPrincipal" : "Portero",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 39,
                "Goles" : 0,
                "Asistencias" : 0,
                "GolesContra" : 45
        },
        "Altura" : 1.96
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43f"),
        "Jugador" : "Kevin De Bruyne",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho",
                "Interior Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 48,
                "Goles" : 16,
                "Asistencias" : 23
        },
        "Altura" : 1.81
}
{
        "_id" : ObjectId("5faffd961a3766a93251c440"),
        "Jugador" : "Keylor Navas",
        "Nacionalidad" : "Costa Rica",
        "Liga" : "Liga Francesa",
        "Equipo" : "Paris Saint Germain",
        "Edad" : 33,
        "PosicionPrincipal" : "Portero",
        "PosicionesSecundarias" : [ ],
        "PieHabil" : "Derecho",
        "Valor" : 10000000,
        "Estadisticas" : {
                "Partidos" : 35,
                "Goles" : 0,
                "Asistencias" : 0,
                "GolesContra" : 26
        },
        "Altura" : 1.85
} */

db.jugadores.find({$and: [{Nacionalidad: {$in: ["Portugal","Noruega","España","Francia",]}},{Edad:{$lt:22}} ] }).pretty()

/* (MUESTRA LOS JUGADORES CUYA NACIONALIDAD SEA PORTUGAL,NORUEGA,ESPAÑA O FRANCIA Y SU EDAD SEA MENOR DE 22 AÑOS)

{
        "_id" : ObjectId("5faffd961a3766a93251c418"),
        "Jugador" : "Kylian Mbappe",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Francesa",
        "Equipo" : "Paris Saint Germain",
        "Edad" : 21,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 180000000,
        "Estadisticas" : {
                "Partidos" : 37,
                "Goles" : 30,
                "Asistencias" : 19
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41e"),
        "Jugador" : "Erling Haaland",
        "Nacionalidad" : "Noruega",
        "Liga" : "Liga Alemana",
        "Equipo" : "Borussia Dortmund",
        "Edad" : 20,
        "PosicionPrincipal" : "Delantero Centro",
        "PosicionesSecundarias" : [
                "Mediapunta"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 40,
                "Goles" : 44,
                "Asistencias" : 10
        },
        "Altura" : 1.94
}
{
        "_id" : ObjectId("5faffd961a3766a93251c42a"),
        "Jugador" : "Joao Felix",
        "Nacionalidad" : "Portugal",
        "Liga" : "Liga Española",
        "Equipo" : "Atletico De Madrid",
        "Edad" : 21,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 36,
                "Goles" : 9,
                "Asistencias" : 3
        },
        "Altura" : 1.8
}
{
        "_id" : ObjectId("5faffd961a3766a93251c42b"),
        "Jugador" : "Ansu Fati",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 18,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 33,
                "Goles" : 8,
                "Asistencias" : 1
        },
        "Altura" : 1.78
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43b"),
        "Jugador" : "Eduardo Camavinga",
        "Nacionalidad" : "Francia",
        "Liga" : "Liga Francesa",
        "Equipo" : "Stade Rennais",
        "Edad" : 18,
        "PosicionPrincipal" : "Mediocentro",
        "PosicionesSecundarias" : [
                "Pivote"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 50000000,
        "Estadisticas" : {
                "Partidos" : 36,
                "Goles" : 1,
                "Asistencias" : 2
        },
        "Altura" : 1.82
} */

db.jugadores.find({$and: [{Equipo: {$in: ["Manchester City","Liverpool FC",]}},{Valor:{$gt:100000000}},
{Jugador: {$not:{$regex: /Salah$/}}}] }).pretty()

/* (MUESTRA LOS JUGADORES CUYO EQUIPO SEA EL MANCHESTER CITY O EL LIVERPOOL , QUE SU VALOR SEA SUPERIOR A 100.000.000, Y SU NOMBRE NO ACABE
    EN "SALAH")

    {
        "_id" : ObjectId("5faffd961a3766a93251c41b"),
        "Jugador" : "Raheem Sterling",
        "Nacionalidad" : "Inglaterra",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 25,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Mediapunta",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 128000000,
        "Estadisticas" : {
                "Partidos" : 52,
                "Goles" : 31,
                "Asistencias" : 10
        },
        "Altura" : 1.7
}
{
        "_id" : ObjectId("5faffd961a3766a93251c41c"),
        "Jugador" : "Sadio Mane",
        "Nacionalidad" : "Senegal",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Liverpool FC",
        "Edad" : 28,
        "PosicionPrincipal" : "Extremo Izquierdo",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 47,
                "Goles" : 22,
                "Asistencias" : 12
        },
        "Altura" : 1.74
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43f"),
        "Jugador" : "Kevin De Bruyne",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho",
                "Interior Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 48,
                "Goles" : 16,
                "Asistencias" : 23
        },
        "Altura" : 1.81
} */

db.jugadores.find( { PosicionesSecundarias: { $size: 3 } } ).pretty()

/* (MUESTRA LOS JUGADORES CUYAS POSICIONES SECUNDARIAS SEAN 3)

{
        "_id" : ObjectId("5faffd961a3766a93251c43f"),
        "Jugador" : "Kevin De Bruyne",
        "Nacionalidad" : "Belgica",
        "Liga" : "Liga Inglesa",
        "Equipo" : "Manchester City",
        "Edad" : 29,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Mediocentro",
                "Interior Derecho",
                "Interior Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 120000000,
        "Estadisticas" : {
                "Partidos" : 48,
                "Goles" : 16,
                "Asistencias" : 23
        },
        "Altura" : 1.81
} */
db.jugadores.find({$and: [{Nacionalidad: {$in: ["España","Alemania","Argentina"]}},{ PosicionesSecundarias: { $size: 2 }},
{Edad:{$gt:20}} ] }).pretty()

/* (MUESTRA LOS JUGADORES CUYA NACIONALIDA SEA ESPAÑA, ALEMANIA O ARGENTINA, QUE SUS POSICIONES SECUNDARIAS SEAN 2 Y TENGAN MAS DE 20 AÑOS)

{
        "_id" : ObjectId("5faffd961a3766a93251c41a"),
        "Jugador" : "Lionel Messi",
        "Nacionalidad" : "Argentina",
        "Liga" : "Liga Española",
        "Equipo" : "FC Barcelona",
        "Edad" : 33,
        "PosicionPrincipal" : "Extremo Derecho",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Mediapunta"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 100000000,
        "Estadisticas" : {
                "Partidos" : 44,
                "Goles" : 31,
                "Asistencias" : 27
        },
        "Altura" : 1.7
}
{
        "_id" : ObjectId("5faffd961a3766a93251c425"),
        "Jugador" : "Jesus Navas",
        "Nacionalidad" : "España",
        "Liga" : "Liga Española",
        "Equipo" : "Sevilla FC",
        "Edad" : 34,
        "PosicionPrincipal" : "Lateral Derecho",
        "PosicionesSecundarias" : [
                "Extremo Derecho",
                "Interior Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 3000000,
        "Estadisticas" : {
                "Partidos" : 47,
                "Goles" : 0,
                "Asistencias" : 10
        },
        "Altura" : 1.72
}
{
        "_id" : ObjectId("5faffd961a3766a93251c433"),
        "Jugador" : "Paulo Dybala",
        "Nacionalidad" : "Argentina",
        "Liga" : "Liga Italiana",
        "Equipo" : "Juventus",
        "Edad" : 26,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Derecho"
        ],
        "PieHabil" : "Izquierdo",
        "Valor" : 80000000,
        "Estadisticas" : {
                "Partidos" : 46,
                "Goles" : 17,
                "Asistencias" : 14
        },
        "Altura" : 1.77
}
{
        "_id" : ObjectId("5faffd961a3766a93251c437"),
        "Jugador" : "Marco Reus",
        "Nacionalidad" : "Alemania",
        "Liga" : "Liga Alemana",
        "Equipo" : "Borussia Dortmund",
        "Edad" : 31,
        "PosicionPrincipal" : "Mediapunta",
        "PosicionesSecundarias" : [
                "Delantero Centro",
                "Extremo Izquierdo"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 25000000,
        "Estadisticas" : {
                "Partidos" : 26,
                "Goles" : 12,
                "Asistencias" : 7
        },
        "Altura" : 1.8
}
{
        "_id" : ObjectId("5faffd961a3766a93251c43a"),
        "Jugador" : "Leon Goretzka",
        "Nacionalidad" : "Alemania",
        "Liga" : "Liga Alemana",
        "Equipo" : "Bayern Munich",
        "Edad" : 25,
        "PosicionPrincipal" : "Mediocentro",
        "PosicionesSecundarias" : [
                "Mediapunta",
                "Interior Derecho"
        ],
        "PieHabil" : "Derecho",
        "Valor" : 60000000,
        "Estadisticas" : {
                "Partidos" : 38,
                "Goles" : 8,
                "Asistencias" : 11
        },
        "Altura" : 1.89
} */