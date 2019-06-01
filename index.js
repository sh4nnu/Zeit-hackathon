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

	return html
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
