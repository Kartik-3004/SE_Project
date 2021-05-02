import React, { useState } from 'react';
import Home from './pages/Home';
import Book from './pages/Book';
import ThankYou from './pages/ThankYou';
import Header from './pages/Navbar';
import iitj from './assets/iitj.jpeg'

function App() {
	const [page, setPage] = useState(0);
	return (
		<div styles={{ backgroundImage:`url(${iitj})` }}>
			<Header setPage={setPage} />
			{page === 0 ? <Home setPage={setPage} /> : null}
			{page === 1 ? <Book setPage={setPage} /> : null}
			{page === 2 ? <ThankYou /> : null}
		</div>
	);
}

export default App;
