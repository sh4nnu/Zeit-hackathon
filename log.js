const accountSid = 'AC6280c5d76de6cdd2a1f9388b3c19d262';
const authToken = 'f56feab83b29b742cae54ece1656ea2a';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.calls.list({limit: 20})
            .then(calls => calls.forEach(c => console.log(c.sid)));


