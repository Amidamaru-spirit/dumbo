import React from 'react';

function App() {
	const [openHead, setOpenHead] = React.useState(false);
	const [openFoot, setOpenFoot] = React.useState(false);
	React.useEffect(() => {
		setTimeout(() => {
			setOpenHead(true);
		}, 1000);
		setTimeout(() => {
			setOpenFoot(true);
		}, 2000);
	}, []);
	return (
		<div className="App">
			<div className={openHead ? 'head__open' : 'head__close'}>
				<h1 className="head__head">Ищешь ответы?</h1>
			</div>
			<div className={openFoot ? 'foot__open' : 'foot__close'}>
				<h2 className="foot__head">Просишь помощи у коллег?</h2>
			</div>
			<div className="container">
				<a href="https://www.google.com/?hl=RU">Узнать ответ</a>
			</div>
		</div>
	);
}

export default App;
