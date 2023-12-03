function Notification({ text, state }) {
	switch (state) {
		case 'info':
			return <Info text={text} />;
		case 'warning':
			return <Warning text={text} />;
		case 'error':
			return <Error text={text} />;
		default:
			return null;
	}
}
