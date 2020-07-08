const express = require('express');
const router = express.Router();
const ordem = require('../models/os');
const mongoose = require('mongoose')

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET request para /os'
    });
});

router.post('/', (req, res, next) =>{
    
    const ordem = new Ordem({
        _id: new mongoose.Types.ObjectId(),
            numero: req.body.numero,
            departamento: req.body.departamento
    });
    ordem.save()
    .then(result => {
        res.status(201).json({
            message: 'POST request para /os',
            ordemCriado: ordem
        });
    })
    .catch(err => {
        error.status(500).json({
            error: err

        });
    });

    
});

router.get('/:osId', (req, res, next) =>{
    const id = req.params.osId;
    ordem.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    })
    
});



    router.put('/:atualizaosId', (req, res, next) => {
       const id = req.params.ordemId;
       Ordem.updateOne(id, {
          $set: {
             number: req.body.number,
             departament: req.body.departament
          }
       })
          .then(result => {
             res.status(201).json({
                message: "Ordem de serviço atualizada com sucesso!"
             });
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });
    

    router.delete('/:deleteosId', (req, res, next) => {
       const id = req.params.osId;
       Ordem.deleteOne(id)
          .exec()
          .then(result => {
             console.log(result);
             res.status(200).json({
                message: 'Ordem de serviço apagada com sucesso!'
             })
          })
          .catch(err => {
             res.status(500).json({
                error: err
             });
          });
    });

    vm.listarOs = function () {
        $http.get(HOST_HTTP + '/os').then(
           function (response) {
              vm.os = response.data;
           },
           function (err) {
              console.log(err)
           }
        );
     };

    vm.adicionarOs = function () {

        vm.os.push(angular.copy(vm.os));
     };


module.exports = router;