//Ceci est un export nommé
import fs from "fs";

export const handler = (request, response) => {
  const url = request.url;
  const method = request.method;
  if(url === "/") {
    response.write(`
      <html>
        <head>
          <title>WebServer Title</title>
        </head>
        <body>
          <form action="message" method="post">
            <label for="message">Enter your message: </label>
            <br/>
            <input type="text" name="message" id="message" required>
            <br/>
            <input type="submit" value="Send">
          </form>
        </body>
      </html>
    `);
    return response.end()
  }
  if(url === "/message" && method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk)
    })
    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split("=")[1]
      fs.writeFileSync("message.txt", message)
    })
    response.statusCode = 302;
    response.setHeader("Location", "/")
    return response.end()
  }
}

export const routes = {
  handler: handler,
}

export default routes;