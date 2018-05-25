const addReceipts = require('../models/receipts');

exports.addReceipts = (req, res, next)=>{
    const newReceipt = new addReceipts(req.body.receipt);
    newReceipt.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.itemizedList = (req, res, next)=>{
    console.log(req.query.duration);
    res.send({data:"something"});
};