import React from 'react';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';

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
			url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
			age: 36,
			note: 'Allergic to staying in one team',
		},
	]);
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>People Invited to My Event</h1>
				<List people={people} />
				<AddToList />
			</header>
		</div>
	);
}

export default App;
