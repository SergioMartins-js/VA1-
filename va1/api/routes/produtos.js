const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');
const mongoose = require('mongoose')

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET request para /produtos'
    });
});

router.post('/', (req, res, next) =>{
    
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            preco: req.body.preco
    });
    produto.save()
    .then(result => {
        res.status(201).json({
            message: 'POST request para /produtos',
            produtoCriado: produto
        });
    })
    .catch(err => {
        error.status(500).json({
            error: err

        });
    });

    
});

router.get('/:produtoId', (req, res, next) =>{
    const id = req.params.produtoId;
    Produto.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    })
    
});



    router.put('/:atualizaProdutoId', (req, res, next) => {
       const id = req.params.produtoId;
       Produto.updateOne(id, {
          $set: {
             name: req.body.name,
             price: req.body.price
          }
       })
          .then(result => {
             res.status(201).json({
                message: "Produto atualizado com sucesso!"
             });
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });
    

    router.delete('/:deleteProdutoId', (req, res, next) => {
       const id = req.params.produtoId;
       Produto.deleteOne(id)
          .exec()
          .then(result => {
             console.log(result);
             res.status(200).json({
                message: 'Produto apagado com sucesso!'
             })
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });



module.exports = router;