import React from "react";
import {Navbar} from "./Navbar.jsx";
import {Jumbotron} from "./Jumbotron.jsx" 
import {Card} from "./Card.jsx"
import {Footer} from "./Footer"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className = "row">
				<Jumbotron />
				</div>
				<div className="row">
					<div className="col-3">
						<Card
						image="https://images.ecestaticos.com/aV1SbVXOcBwhk9THvibn7BJHZao=/0x0:2272x1515/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F829%2F28d%2F0c9%2F82928d0c9b39b23b627a431b30762d66.jpg"
						title="Fede Valverde"
						description="Jugador uruguayo del Real Madrid"
						buttonLabel="Fede's Wikipedia"
						buttonUrl="https://en.wikipedia.org/wiki/Federico_Valverde" />
					</div>
					<div className="col-3">
						<Card 
						image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt91a4cf4ecc0bfcaa/65200847dfd03c21f6dfe3c0/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-06T141421.721.png?auto=webp&format=pjpg&width=3840&quality=60"
						title="Luka Modric"
						description="Jugador croata del Real Madrid"
						buttonLabel="Modric's Wikipedia"
						buttonUrl="https://en.wikipedia.org/wiki/Luka_Modri%C4%87"/>
					</div>
					<div className="col-3">
						<Card 
						image="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/1168D/production/_109790317_benzema-cl.jpg"
						title="Karim Benzema"
						description="Jugador frances ex del Real Madrid"
						buttonLabel="Benzema's Wikipedia"
						buttonUrl="https://en.wikipedia.org/wiki/Karim_Benzema"/>
					</div>
					<div className="col-3">
						<Card 
						image="https://runningtheshowblog.files.wordpress.com/2015/09/raul-gonzalez.jpg?w=1200"
						title="Raul Gonzalez"
						description="El angel de Madrid"
						buttonLabel="Raul's Wikipedia"
						buttonUrl="https://en.wikipedia.org/wiki/Ra%C3%BAl_(footballer)"/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
