import React from 'react';

interface IProps {
	people: {
		name: string;
		url: string;
		age: number;
		note?: string;
	}[];
}

const List: React.FC<IProps> = ({ people }) => {
	return <div>I am Who i am</div>;
};

export default List;