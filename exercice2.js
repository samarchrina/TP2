const express = require('express');
const app = express();
app.use(express.json());
//Middleware de validation des champs "username" et "password"
const validateUserFields=(req,res,next)=>{
    const{username,password}=req.body
    // Middleware pour vérifier les champs dans req.body
const validateRequestBody = (req, res, next) => {
    const { username, password } = req.body;
  //vérifie si les champs username et password sont présents
    if (!username || !password) {
      return res.status(400).send('Erreur : Les champs "username" et "password" sont requis.');
    }
  //passe au middleware ou route suivant 
    next(); 
  };
  
  // Route d'exemple utilisant le middleware de validation
  app.post('/login', validateUserFields, (req, res) => {
    res.send('connexion réussie!');
  });
  
  // Démarrage du serveur
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
}