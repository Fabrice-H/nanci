//permet de prendre en compte la syntaxe de javascript ES6
require('babel-register')
//va nous permettre de creer les route et presque toute la logiue de notre app nodejs
const express = require('express')
//permet de voir en console le status de la requete, le nom da la route demander et le temps d'execution
const morgan = require('morgan')
//initialisation de notre variabe app a partir du require express fait a la rigne 2
const app = express()
//parser les données (vous allez comprendre mieu pendant son utilisation)
const bodyParser = require('body-parser')
//permet de faire des requetes via votre base de données (en ligne) sans complication
const cors = require('cors')
//appelle du module mysql pour nous permettre de faire de sinteractions vers notre bd
const mysql = require('mysql')

const PORT = 3000 //numero de port

//initialisation du model de template (moi j'utilise ejs et s'est ce qui est conseiller pour les nouveaux mais vous pouvez utiliser celui que vous voulez)
app.set('view engine', 'ejs')
//indiquez ou es ce que votre serveur doit aller chercher les pages (html) que vous renvoyez au travers de vos requetes
app.set('views', './views')

//appel des middlewares (https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

//je vais d'abord en premiere position initialiser le coordonnées de la base de données pour pouvoir me connecter a la bd
// const db = mysql.createConnection({
//     host: 'localhost', //hostaname
//     database:'nodejs', //nom de ma base de donnée
//     user: 'root', //username (mysql)
//     password: '' //password (mysql)
// })

// db.connect((err)=>{
//     if(err){
//         console.log(err.message); // s'il ya une erreur le script va s'arreter ici et va afficher l'erreur de connexion dans votre console (évidemment)
//     }else{
//     	//par contre s'il n'y a pas d'erreur cette partie va s'executer !
//         console.log('Vous êtes connecté a la base de donnée')
//     }
// })


//je vais maintenant creer mes routes avec express au travers de ma variable app

app.get('/', (req, res) => {
    //si le status est 200 alors renvoie la page d'accueil
    let name = "oracle le code source" //je cree une variable nom
    let age = 999 //et ici je cree une variable age

    //si le status de la requete est 200 (cest a dire que tout cest bien passé) alors je renvoie a l'utilisater la vue index.ejs et je passe mes deux variable dans la vue index.ejs
    res.status(200).render('index', {
        monNom: name,
        monAge: age
    })
})

 
//lancer l'application sur un port quelconque ! par default nodejs ecoute sur le 3000
app.listen(PORT, () => {
    console.log(`le serveur est lancé sur le port ${PORT}`) //syntaxe ES6
    console.log('le serveur est lancé sur le port ' + PORT) //syntaxe javascript basique
})