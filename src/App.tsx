import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';

interface IState {
	people: {
		name: string;
		url: string;
		age: number;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([]);
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>People Invited to My Event</h1>
				<List />
			</header>
		</div>
	);
}

export default App;
