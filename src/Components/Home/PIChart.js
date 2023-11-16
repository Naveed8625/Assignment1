import React from 'react';
import { PieChart, Pie } from 'recharts';

const Pcharts = () => {

	// Sample data
	const data = [
		{ name: 'Geeksforgeeks', students: 700 },
		{ name: 'Technical scripter', students: 800 },
		{ name: 'Geek-i-knack', students: 400 },
		{ name: 'Geek-o-mania', students: 600 }
	];

	return (
		<PieChart width={400} height={290} className='pchart'>
			<Pie data={data} dataKey="students" outerRadius={120} 
			innerRadius={80} fill="green" />
    </PieChart>
	);
}

export default Pcharts;
