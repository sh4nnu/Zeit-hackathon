const {withUiHook, htm} = require('@zeit/integration-utils');

const store = {
  accountSID: '',
  authKey: ''
};

module.exports = withUiHook(async ({payload}) => {
  const {clientState, action} = payload;

  if (action === 'submit') {
    store.accountSID = clientState.accountSID;
    store.authKey = clientState.authKey;
  }

  if (action === 'reset') {
    store.accountSID = '';
    store.authKey = '';
  }

  return htm`
    <Page>
      <Container>
        <Input label="SID" name="accountSID" value=${store.accountSID} />
        <Input label="Auth Key" name="authKey" value=${store.authKey} />
      </Container>
      <Container>
        <Button action="submit">Submit</Button>
        <Button action="reset">Reset</Button>
      </Container>
      <AutoRefresh timeout=${3000} />
    </Page>
  `
});



// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC0acd1868cf269a7ff6c0efef4e06f88b';
const authToken = '2a28df80f66d313e068b26a696e151ab';
const client = require('twilio')(accountSid, authToken);

client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(m.to)));

