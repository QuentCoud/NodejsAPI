import express from "express";

import consumption_controller from "../controller/consumption_controller.js";

const router = express.Router()

/**
 * @openapi
 * /:
 *   get:
 *     tags: 
 *      - Home
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', consumption_controller.getHelloWorld)
/**
 * @openapi
 * /:
 *   post:
 *     tags: 
 *      - post
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/create', consumption_controller.createConsumption)
/**
 * @openapi
 * /list:
 *   get:
 *     tags: 
 *      - List
 *     description: List all consumptions
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/getConsumptions', consumption_controller.getConsumptions)
/**
 * @openapi
 * /retrieve:
 *   get:
 *     tags: 
 *      - Retrieve
 *     description: Retrieve a consumption
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/retrieve/:id', consumption_controller.retrieveConsumption)
/**
 * @openapi
 * /update:
 *   get:
 *     tags: 
 *      - Update
 *     description: Update a consumption
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/update/:id/:country', consumption_controller.updateConsumption)
/**
 * @openapi
 * /delete:
 *   get:
 *     tags: 
 *      - Delete
 *     description: Delete a consumption
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/delete', (req, res) => {
  console.log("delete")
})

export default router