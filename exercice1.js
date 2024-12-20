const express = require("express");
const app=express();

//Middleware de journalisation 
const loggerMiddleware=(req,res,next)=>{
    const now=new Date();
    const date = now.toLocaleDateString();
    const time =now.toLocaleTimeString();
    console.log('[${date} ${time} ${req.method} ${req.path}');

    next();
};

//utiliser le middleware dans l'application 
app.use(loggerMiddleware);

// Exemple de route pour tester le middleware
app.get('/',(req,res)=>{
    res.send('Exercice1 !');

});
app.get('/exercice 1',(req,res)=>{
    res.send("une deuxieme API")
});
app.listen(3000,()=>{
    console.log('serveur démarré sur le port 3000');
});
