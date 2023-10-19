const {TicketRepository} =require('../repository');

const { serverconfig, EmailConfig } =require('../config');

const Ticket =new TicketRepository();

async function createTicket(data){
    try {
        const ticket = await Ticket.create(data);
        return ticket;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function sendMail(subject,content,recepientEmail) {
    try {
       const response = await EmailConfig.transporter.sendMail({
            from : serverconfig.GMAIL,
            to : recepientEmail,
            subject : subject,
            text : content
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports ={
    createTicket,
    sendMail
}