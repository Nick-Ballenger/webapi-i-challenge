// implement your API here
const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');
const server = express();
const port = '9001';


server.use(express.json());

server.use(cors({ origin: 'http://localhost:3000' }));

//Add User


server.post('/api/users', (req, res) => {
    
    const user = req.body;
   
    db
      .insert(user)

      .then(user => res.status(201).json(user))

      .catch(() => res.status(500).json({error: "Excuse us while we fix this....Something went wrong when trying to add a user"}));
  });


  //Get User List

  server.get('/api/users', (req, res) => {

    db

      .find()

      .then(users => res.json(users))

      .catch(() => res.status(code).json({error: "Something went wrong in the Matrix, User Info couldn't be retrieved."}));
  });

  //Get Users with ID

  server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db

      .findById(id)

      .then(user => user ? res.json(user) : res.status(404).json({message: "Whoa, you're trying to get a user with an ID that isn't here."}))

      .catch(() => res.status(500).json({error: "Something went wrong in the Matrix, User Info couldn't be retrieved."}));
  });

//Update User by ID

  server.put('/api/users/:id', (req, res) => {
    
    const { id } = req.params;
    
    const userUpdate = req.body;
    
    db
      
    .update(id, userUpdate)

      .then(user => user ? res.json(user) : res.status(404).json({message: "The user with the specified ID does not exist."}))

      .catch(() => res.status(500).json({error: "The user information could not be modified."}));
  });
  //Delete User by ID

  server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db

      .remove(id)

      .then(user => user ? res.json(user) : res.status(404).json({message: "The user with the specified ID does not exist."}))

      .catch(() => res.status(500).json({error: "The user could not be removed"}));

  });

  server.listen(port, ()=>{
    console.log("The power level is over 9000! on port 9001")});

