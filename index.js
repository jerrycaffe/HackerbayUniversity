const express = require('express');
const router = express.Router();
const app = new express();


app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Success"
    })
});

app.post('/', (req, res)=>{
    res.status(200).json({
        message: "POST Success"
    });
});

app.patch('/', (req, res)=>{
    res.status(200).json({
        message: 'The URL has been updated successfully'
    })
})

app.listen(3000, ()=>{
    console.log("Application started on Port 300");
})

