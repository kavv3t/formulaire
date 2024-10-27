const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// Remplacez <db_password> et <db_name> par vos informations
const uri = 'mongodb+srv://benj0:A88hieyZsX6oBU52@testdb.2djst.mongodb.net/<db_name>?retryWrites=true&w=majority';
const client = new MongoClient(uri);

app.use(express.json()); // Pour parser les requêtes JSON

// Endpoint pour ajouter un document
app.post('/api/data', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('testDB');
        const collection = database.collection('testDB');
        
        const newDoc = req.body; // Les données envoyées dans le corps de la requête
        const result = await collection.insertOne(newDoc);
        res.status(201).json({ insertedId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'insertion dans la base de données' });
    } finally {
        await client.close();
    }
});

// Endpoint pour récupérer tous les documents
app.get('/api/data', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('testDB');
        const collection = database.collection('testDB');
        
        const docs = await collection.find({}).toArray();
        res.status(200).json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des documents' });
    } finally {
        await client.close();
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
