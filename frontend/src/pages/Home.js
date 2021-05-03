import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import iitj from '../assets/background.png';

const Home = (props) => {
	return (
		<div>
			<Row noGutters className="text-center align-items-center room-cta">
				<Col className="btn-col">
					<p className="description">
						If you're looking to book a room
					</p>
					<Button
						color="none"
						className="book-room-btn"
						onClick={(_) => {
							props.setPage(1);
						}}
					>
						Book a Room
					</Button>
				</Col>
			</Row>
			<Row noGutters className="text-center big-img-container">
				<Col>
					<img src={iitj} alt="IITJ" className="big-img" />
				</Col>
			</Row>
		</div>
	);
};
export default Home;
