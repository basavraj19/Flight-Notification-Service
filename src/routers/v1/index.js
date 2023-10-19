const express=require('express');

const router=express.Router();

const ticketRouter = require('./tickets');

router.use('/ticket',ticketRouter);

module.exports=router;