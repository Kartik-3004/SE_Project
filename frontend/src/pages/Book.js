import React, { useState, useEffect } from 'react';
import {
	Row,
	Col,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Input,
	Button,
} from 'reactstrap';

import Room from './Room';

const Book = (props) => {
	const [totalTables, setTotalTables] = useState([]);

	// User's selections
	const [selection, setSelection] = useState({
		table: {
			name: null,
			id: null,
		},
		date: new Date(),
		time: null,
		location: 'Any Location',
		size: 0,
	});

	// User's booking details
	const [booking, setBooking] = useState({
		name: '',
		phone: '',
		email: '',
	});

	// List of potential locations
	const [locations] = useState(['Any Location', 'Patio', 'Inside', 'Bar']);
	const [times] = useState([
		'9AM',
		'10AM',
		'11AM',
		'12PM',
		'1PM',
		'2PM',
		'3PM',
		'4PM',
		'5PM',
		'6PM',
		'7PM',
		'8PM',
		'9PM',
		'10PM',
		'11PM',
	]);

	// Basic reservation "validation"
	const [reservationError, setReservationError] = useState(false);

	const getDate = (_) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const date =
			months[selection.date.getMonth()] +
			' ' +
			selection.date.getDate() +
			' ' +
			selection.date.getFullYear();
		let time = selection.time.slice(0, -2);
		time = selection.time > 12 ? time + 12 + ':00' : time + ':00';
		console.log(time);
		const datetime = new Date(date + ' ' + time);
		return datetime;
	};

	const getEmptyTables = (_) => {
		let tables = totalTables.filter((table) => table.isAvailable);
		return tables.length;
	};
	return (
		<div>
			<div>
				<h1>Book</h1>
			</div>
		</div>
	);
};

export default Book;
