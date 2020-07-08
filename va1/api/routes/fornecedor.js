const express = require('express');
const router = express.Router();
const fornecedor = require('../models/fornecedor');
const mongoose = require('mongoose')

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET request para /fornecedor'
    });
});

router.post('/', (req, res, next) =>{
    
    const fornecedor = new Fornecedor({
        _id: new mongoose.Types.ObjectId(),
                 nome: req.body.nome,
                 cnpj: req.body.cnpj,
                 tipo: req.body.tipo
    });
    fornecedor.save()
    .then(result => {
        res.status(201).json({
            message: 'POST request para /fornecedor',
            fornecedorCriado: fornecedor
        });
    })
    .catch(err => {
        error.status(500).json({
            error: err

        });
    });

    
});

router.get('/:fornecedorId', (req, res, next) =>{
    const id = req.params.fornecedorId;
    fornecedor.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    })
    
});


    router.put('/:atualizafornecedorId', (req, res, next) => {
       const id = req.params.ordemId;
       Ordem.updateOne(id, {
          $set: {
             name: req.body.name,
             cnpi: req.body.cnpi,
             type: req.body.type
          }
       })
          .then(result => {
             res.status(201).json({
                message: "Fornecedor apagado com sucesso!"
             });
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });
    

    router.delete('/:deletefornecedorId', (req, res, next) => {
       const id = req.params.fornecedorId;
       Fornecedor.deleteOne(id)
          .exec()
          .then(result => {
             console.log(result);
             res.status(200).json({
                message: 'Fornecedor apagado com sucesso!'
             })
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });

    vm.listarFornecedor = function () {
        $http.get(HOST_HTTP + '/fornecedor').then(
           function (response) {
              vm.fornecedor = response.data;
           },
           function (err) {
              console.log(err)
           }
        );
     };

    vm.adicionarFornecedor = function () {

        vm.fornecedor.push(angular.copy(vm.fornecedo));
     };



module.exports = router;