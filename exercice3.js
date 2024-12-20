const express = require('express');
const app = express();
app.use(express.json());

// Middleware pour la validation du champs age
const validateAge = (req, res, next) => {
  const { age } = req.body;
//verification que le champs est defini et négatif
  if (age !== undefined && age < 0) {
    const error = new Error("L'âge ne peut pas être négatif.");
    error.status = 400; 
    return next(error); 
  }

  next(); // Passe au middleware ou  route suivant
};

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  const statusCode = err.status || 500; // Par défaut 500 
  res.status(statusCode).send(err.message);
});

// Route d'exemple utilisant le middleware de validation
app.post('/register', validateAge, (req, res) => {
  res.send('Requête valide, utilisateur enregistré.');
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});