import http from "http";
import fs from "fs";
// import { printMessage as printMessageFromModule} from "./module_cours1.js";
// import someUtilsFunction from "./module_cours1.js"

const webServer = http.createServer((request, response) => {
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
      console.log(message)
    })
    response.statusCode = 302;
    response.setHeader("Location", "/")
    return response.end()
  }
})

webServer.listen(3000);