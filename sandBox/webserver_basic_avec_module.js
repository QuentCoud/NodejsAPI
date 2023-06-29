import http from "http";
import routes from "./routes_module_webserver_avec_module.js"

const webServer = http.createServer(routes.handler)

webServer.listen(3000);