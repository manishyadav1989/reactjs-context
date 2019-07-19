import React from 'react';
import MyProvider from './MyProvider';
import ProductList from './ProductList';
import './App.css';

function App() {
	return (
		<MyProvider>
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Welcome to my web store</h1>
				</header>
				<ProductList />
			</div>
		</MyProvider>
	);
}

export default App;
