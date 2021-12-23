const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhinson.dacpano@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendAcctCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhinson.dacpano@gmail.com',
        subject: "I'm sorry to see you go!",
        text: `I'm sorry if the app doesn't meet all your needs, ${name}. May I know what we could have done to to improve our sevices? I'm looking forward to hear back from you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendAcctCancelEmail
}