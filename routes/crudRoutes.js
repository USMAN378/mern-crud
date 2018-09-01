const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/add', (req, res) => {
    const book = new Book({
        name: req.body.name,
        desc: req.body.desc
    });
    book.save().then(books => {
        res.send(book);
    }).catch(err => res.send(err));



});

router.get('/getAllBooks', (req, res) => {
    Book.find().then(resp => res.json(resp));
})

router.delete('/deleteBook', (req, res) => {
    Book.findByIdAndRemove({ _id: req.body.id }, (err, result) => {
        if (err) {
            return res.status(400).json(err);
        }
        res.send(result);

    })
})
router.put('/updateBook', (req, res) => {
    Book.findByIdAndUpdate({ _id: req.body.id }, { name: req.body.name, desc: req.body.desc }, (err, result) => {
        if (err) {
            return res.status(400).json(err);
        }
        res.send(result);
    })
});

router.get('/:id', (req, res) => {
    Book.findById( req.params.id,(err , result) => {

        if(err){
            return res.status(400).json(err);
        }
        res.json(result);
    })
        
})
module.exports = router;