const addReceipts = require('../models/receipts');

exports.addReceipts = (req, res, next)=>{
    const newReceipt = new addReceipts(req.body.receipt);
    newReceipt.save()
        .then(data => {
            res.send({message:"success"});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.itemizedList = (req, res, next)=>{
    console.log(new Date(req.query.fromDate));
    addReceipts.find().where("date").gt(new Date(req.query.fromDate)).lt(req.query.toDate).select({"_id": false,"consumer": true, "totalAmount":true})
        .then(rawList => {
            res.send(groupBy(rawList));
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


const groupBy = (rawList) =>{
    let itemizedList = new Map();
    for(let i = 0; i < rawList.length; i++){
        if(itemizedList.hasOwnProperty(rawList[i].consumer)){
            itemizedList[rawList[i].consumer] += rawList[i].totalAmount;
        }
        else{
            itemizedList[rawList[i].consumer] = rawList[i].totalAmount;
        }
    }
    return itemizedList;
};