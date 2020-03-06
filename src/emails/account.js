const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from:'triducnguyen@u.boisestate.edu',
        subject:'Welcome to the app',
        text: `Welcome to the app. ${name}, let me know you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from: 'triducnguyen@u.boisestate.edu',
        subject:'Goodbye User',
        text:`Goodbye ${name}, hope you have a good time with us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}