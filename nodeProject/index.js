import bodyParser from "body-parser";
import express from "express";
import consumptionRouter from "./routes/consumption.js"
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc";
import * as dotenv from 'dotenv'

async function main() {
  const app = express();
  dotenv.config()
  //Permet de lire les données d'une requete et décoder les caractères spéciaux
  app.use(bodyParser.urlencoded({ extended: false }))

  //Encode les requête au format json
  app.use(bodyParser.json())

  const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
  };

  const openapiSpecification = swaggerJsdoc(swaggerOptions);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

  app.use((req, res, next) => {
    console.log("je suis dans un middleware")
    next()
  });

  app.use("/consumption", consumptionRouter);

  app.use((req, res, next) => {
    console.log("je suis dans un autre middleware")
    next()
  });

  app.get("/", (req, res, next) => {
    res.send("hello world");
  });

  const connection = await mongoose.connect(process.env.URL)
  
  app.listen(process.env.PORT);
}

main()
