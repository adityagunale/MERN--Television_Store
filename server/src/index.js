const express = require('express')
const app = express();

const Television  = require('./models/telModel')

const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())

require('./database/conn')

// PUT 

app.post('/television', async (req, res) => {

    try{

        const tData = new Television(req.body);
        const responce = await tData.save();
        res.status(201).send(responce)

    }catch(error) {

        console.error(error);
    }
})

// GET 

app.get('/television', async (req, res) => {

    try{

        const responce = await Television.find()
        res.status(200).send(responce)

    }catch(error) {

        console.error(error);
    }
})

// Get By ID 

app.get('/television', async (req, res) => {

    try{

        const _id = req.params.id;
        const responce = await Television.findById(_id);
        res.status(200).send(responce)

    }catch(error) {

        console.error(error);
    }
})

// PUT/PATCH

app.patch('/television/:id', async (req, res) => {

    try{

        const _id = req.params.id;
        const responce = await Television.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(responce)

    }catch(error) {

        console.error(error);
    }
})

// DELETE 

app.delete('/television/:id', async (req, res) => {

    try{

        const _id = req.params.id;
        const responce = await Television.findByIdAndDelete(_id);
        res.status(200).send(responce)

    }catch(error) {

        console.error(error);
    }
})


app.listen(8000, () => {
    console.log('listening on http://localhost:8000');
})