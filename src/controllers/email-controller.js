const { EmailService }=require('../services');

const {StatusCodes} =require('http-status-codes');

const  { Successresponse, Errorrespones } =require('../utils/common');

async function createTicket(req,res){
    try {
        const response = await EmailService.createTicket({
            subject : req.body.subject,
            content : req.body.content,
            recepientEmail : req.body.recepientEmail
        });
        Successresponse.data =response;
        return res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

module.exports = {
    createTicket
}