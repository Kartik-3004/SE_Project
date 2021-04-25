import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Book from './pages/Book';
import ThankYou from './pages/ThankYou';
import Header from './pages/Navbar';

function App() {
	const [page, setPage] = useState(0);
	return (
		<div>
			<Header setPage={setPage} />
			{page === 0 ? <Home setPage={setPage} /> : null}
			{page === 1 ? <Book setPage={setPage} /> : null}
			{page === 2 ? <ThankYou /> : null}
		</div>
	);
}

export default App;
