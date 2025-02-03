const http = require("http");
const serveur = http.createServer((req, res) => {
    res.end("Allo");
});

serveur.listen(3000, () => {
    console.log("le serveur est démarré sur le port 3000");
});