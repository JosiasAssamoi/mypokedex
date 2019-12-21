const express  = require('express')

//pour la coloration syntaxique
const chalk = require('chalk')


const app = express()
const port = 4242
const api = require('./routes/api')


//page d'accueil de la page
app.get('/',(req,res)=>{
    res.send("  Accueil du serveur")
})

//middleware  qui va creer les routes de l'api pour retourner la data
app.use('/api',api)



//Ecoute du serveur
app.listen(port,()=>{
    console.log(chalk.yellow(`listening http://localhost:4242/ on port ${port}`))
})