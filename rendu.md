# REST API
REST (Representational State Transfer) est une forme d'architecture logicielle utilisé pour créer des services web.

Dans l'architecture REST, les ressources sont identifiées par des URL et peuvent être manipulées à l'aide de différentes opérations telles que GET, POST, PUT et DELETE.

Les services REST sont basés sur le protocole HTTP.

Afin de réaliser facilement une API REST avec nodejs, on peut utiliser express. Celui-ci facilite la mise en place du Routage des requêtes, la mise en place de Middleware, la gestion des requêtes et réponses ainsi que l'intégration d'autres modules comme Mongoose.

## Réalisation d'une API :

exemple 1 : 
```
app.get("/", (req, res, next) => {
  res.send("hello world");
});
```
Ici, on va faire un requête simple qui va envoyer "hello world" lors de l'appelle à l'url "http://localhost:3000/" car la route est "/" qui est l'adresse par défault de l'api fonctionnant sur le port 3000.

exemple 2 : 
```
app.use((req, res, next) => {
  console.log("je suis dans un middleware")
  next()
});
```
Dans ce cas, on apperçoit que nous sommes dans un middleware car on observe la fonction next(). En plaçant ce call avant celui précedemment présenté, l'API va pouvoir executer les deux car la première utilisant next(), elle autorise la seconde à être executé.

exemple 3 : 
```
import mongoose from "mongoose";

const connection = await mongoose.connect(process.env.URL)
```
Ici nous connectons notre API à une base de données mongoDB via le module mongoose avec les varibales d'environnement déclarer dans le fichier .env : 
```
URL = "mongodb://127.0.0.1:27017/alcohol_consumption"
PORT = "3000"
```
Désormais rentrons dans les détails de l'architecture logicielle d'une API REST sous node.js. Nous allons voir les principes de models de donnée, de routes et de controlleurs.

Commençons par le modèle de données qui ressemblera à quelque chose comme ceci : 
```
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const consumptionSchema = new Schema(
  {
    country: {
      type: String,
      required: true
    },
    beer_servings: {
      type: Number,
    },
    spirit_servings: {
      type: Number
    },
    wine_servings: {
      type: Number
    },
    total_litres_of_pure_alcohol: {
      type: Number
    }
  }
)

const Consumption = mongoose.model("Consumption", consumptionSchema, "Consumption");

export default Consumption;
```
Utilisant une base de donnée Mongo, nous importons mongoose afin de créer un nouveau schéma de données utilisable par la base et dans le reste du code. Dans ce schéma, nous définirons les différents attributs et type de donnée.

Par la suite, nous allons utiliser un controller afin d'interagir avec les différents models de données pour réaliser différent traitement sur celles-ci. Dans notre cas, nous allons réaliser la création d'une donnée.
```
import Consumption from "../models/consumption.js"

const createConsumption = (req, res, next) => {
  const consumption = new Consumption({
    country: "MonglooLand",
    beer_servings: 99,
    spirit_servings: 99,
    wine_servings: 99,
    total_litres_of_pure_alcohol: 99
  })
  consumption.save()
    .then((response) => {
      res
        .status(200)
        .json({
          message: "Consumption created successfully", response: response
        })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error)
  })
}
```

Ici, nous commençons par importer le modèle Consumption créer précedemment afin de pouvoir interagir avec. Par la suite, nous créons une fonction qui prend en paramètre une requete, un resultat et un contexte. Ensuite dans cette fonction, nous créons un nouvel objet basé sur le modèle de donnée dont on définit la valeur des attributs. Dans notre cas nous utilisons des données en dur. Nous sauvegardons par la suite l'objet dans la base de donnée avec la fonction save(). Une fois le save() terminé, la fonction va renvoyer un code http afin de savoir si le creation à bien été réaliser.

Notre models et notre controleur etant prêt, il nous reste plus qu'a faire le routing puis l'appeler dans l'execution de l'API.
```
import express from "express";

import consumption_controller from "../controller/consumption_controller.js";

const router = express.Router()

router.get('/create', consumption_controller.createConsumption)
```
Dans notre fichier de routing correspondant au modèle consumption, nous importons le controlleur précédent afin d'accéder à la fonction de creation. Nous importons aussi express afin d'utiliser son système de routage.
Enfin nous définissons notre route en spécifiant son URL (son adresse) en premier paramètre et la fonction associé de notre controlleur afin d'exectuer les diverses traitements souhaité (dans notre cas la création d'un objet).

Désormais dans le workflow de notre API, nous pouvons appelé notre route afin de créer notre objet Consumption : 
```
app.use("/consumption", consumptionRouter);
```

## Définition :
  Ressources : Les ressources dans une API REST correspondent aux actions réalisable par celle-ci comme la création de données, le listage ou encore la modification. Une ressource peut également faire référence à un modèle de donnée. Les ressources sont identifiées par des URI et sont accessibles via des requêtes HTTP.
  
  Représentation : La représentation fait référence au format dans laquel les donnée seront transmise par l'API par exemple JSON, XML,...
  
  URI : Un URI est une chaîne de caractères qui identifie une ressource sur Internet. Dans le contexte d'une API REST, les URIs sont utilisées pour identifier les ressources de l'API. Par exemple, l'URI "/consumption/123" peut être utilisée pour identifier un objet Consumption ayant l'identifiant "123". Les URIs sont également utilisées pour définir les routes et les endpoints.  

  HTTP : Les méthodes HTTP sont les actions standardisées que les clients peuvent utiliser pour interagir avec les ressources via une API REST. Les principales méthodes HTTP utilisées dans une API REST sont :

    GET : récupère une représentation d'une ressource. 
    POST : crée une nouvelle ressource. 
    PUT : met à jour une ressource existante.
    DELETE : supprime une ressource.
    
  Ces méthodes permettent de définir les actions à effectuer sur les ressources lors des requêtes HTTP.
  
  CRUD : Le CRUD fais référence au fonction généralement standards d'une API C = Create pour la création d'un objet, R = Retrieve pour récupérer un objet spécifique (généralement grâce à un ID), U = Update pour mettre à jour une donnée et D = Delete pour supprimer une donnée existante.
  
## Avantages :

Aujourd'hui, l'avantage principal d'une API REST selon moi est sa standardisation dans le monde professionnel qui permet à la plus part des développeurs de ne pas être déboussolé lors de leur intégration dans une nouvelle entreprise ainsi que de permettre une maintenabilité du projet asser fcailement. Mais l'API REST possède aussi de nombreux avantage comme l'interopérabilité et la scabilité qui facilite la communication avec la plus part des infrastructures web grâce au modèle HTTP

Sources : 
-Code du premier cours
-ChatGPT pour l'introduction