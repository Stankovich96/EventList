import React, { useState } from 'react';

interface IState {
	name: string;
	url: string;
	age: string;
	note?: string;
}
const AddToList = () => {
	const [input, setInput] = useState<IState>({
		name: '',
		url: '',
		age: '',
		note: '',
	});

	const handleChange = () => {};

	return (
		<div className='AddToList'>
			<input
				type='text'
				placeholder='Name'
				className='AddToList-input'
				value={input.name}
				onChange={handleChange}
				name='name'
			/>
			<input
				type='text'
				placeholder='Age'
				className='AddToList-input'
				value={input.age}
				onChange={handleChange}
				name='age'
			/>
			<input
				type='text'
				placeholder='Image Url'
				className='AddToList-input'
				value={input.url}
				onChange={handleChange}
				name='url'
			/>{' '}
			<textarea
				placeholder='Notes'
				className='AddToList-input'
				value={input.note}
				onChange={handleChange}
				name='note'
			/>
		</div>
	);
};

export default AddToList;
