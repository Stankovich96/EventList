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
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Lebron James',
			url: '',
			age: 36,
			note: 'Allergic to staying in one team',
		},
	]);
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>People Invited to My Event</h1>
				<List people={people} />
			</header>
		</div>
	);
}

export default App;
