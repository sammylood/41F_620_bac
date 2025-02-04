const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const serveur = express();
dotenv.config();

// pour pouvoir avoir accès aux dossiers public comme assets/CSS/style.css 
const dossierPublic = path.join(__dirname, "public"); 
serveur.use(express.static(dossierPublic));

//Middle ware
function authentifier(req, res, next){
    console.log("authentification en cours");
    next();
}

// serveur.get("/", (req, res)=>{ //vers l'accueil
//     const reponse = {
//         msg: "Tiguidou",
//     };
//     //res.header("content-type", "application/json") //MIME TYPE par defaut json nous donne cette info
//     //res.statusCode = 200; /tout est OK
//     res.json(reponse);
// });


// serveur.post()
// serveur.put()
// serveur.delete()


/**
 * Route servant à récupérer tous les films de la base de données
 */
serveur.get("/films",  authentifier, (req, res)=>{
    return res.json({ msg: "ok" });
});

/**
 * Route servant à récupérer un film spécifique de la base de données
 */
serveur.get("/films/:id", (req, res)=>{
    return res.json({ msg: "ok" });
}); // les deux points sont pour un élément variable

serveur.post("/films",  (req, res)=>{
    return res.json({ msg: "ok" });
});


serveur.put("/films/:id", (req, res)=>{
   return res.json({ msg: "ok" });
});

serveur.post("/films/initialiser", (req, res)=>{
    return res.json({ msg: "ok" });
});

serveur.delete("/films:id", (req, res)=>{
    return res.json({ msg: "ok" });
});

// serveur.get("/films/:id", (req, res)=>{
//     return res.json({ msg: "ok" });
// });

// const serveur = http.createServer((req, res) => {
//     // res.end("Allo");
//     if (req.method =="GET" && req.url == "/") {
//         res.end("Accueil");
//     }else{       
//         res.end("Patate 2");
//     }
// });

// Ressources 404 
    serveur.use((req, res)=>{
    res.statusCode = 404;
    return res.json({ msg: "Ressource non trouvée" }); //return res.status(404).json({ msg: "Ressource non trouvée" }); 
});

serveur.listen(process.env.PORT, () => {
    console.log(`le serveur est démarré sur le port ${process.env.PORT}`);
});