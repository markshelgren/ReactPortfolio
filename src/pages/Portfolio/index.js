import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./portfoliostyle.css";

function Portfolio() {
	return (
		<div>
			<Navbar />
			<Container>
				<Row>
					<Col size="lg-12">
						<p id="Portfolio">
							{" "}
							<strong>
								Sample Applications and Projects I developed or worked on:
							</strong>
						</p>
						<br />
					</Col>

					{/* KidTastic */}
					<Col size="lg-12">
						<p id="mediumblue">
							{" "}
							<strong>KidTastic Project:</strong>
							<strong id="antiquewhite">
								Entertain and Control your Children on line
							</strong>
						</p>
						<div className="password">
							<ul>
								<strong id="mediumblue">Deployed:</strong>{" "}
								<a
									href="https://evening-thicket-06709.herokuapp.com/"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Deploy"
								>
									GitHub Deployed Version
								</a>
								<br />
								<strong id="mediumblue">Repository:</strong>{" "}
								<a
									href="https://github.com/clew-bot/KidTastic"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Repository"
								>
									GitHub Repository
								</a>
							</ul>
						</div>
					</Col>
					<br />
					<Col size="lg-12">
						<img
							src="./assets/images/kidtastic.png"
							alt="Generator"
							className="generator"
						/>
					</Col>
				</Row>
				<br />
				{/* Note Taker Section*/}
				<Row>
					<Col size="lg-12">
						<p id="mediumblue">
							{" "}
							<strong>Note Taker Info:</strong>
							<strong id="antiquewhite">
								{" "}
								Record, save and retrieve personal notes and to do items.
							</strong>
						</p>
						<div className="code">
							<ul>
								<strong id="mediumblue">Deployed:</strong>{" "}
								<a
									href="https://mysterious-retreat-65224.herokuapp.com/"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Deploy"
								>
									GitHub Deployed Version
								</a>
								<br />
								<strong id="mediumblue">Repository:</strong>{" "}
								<a
									href="https://github.com/markshelgren/noteTaker"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Repository"
								>
									GitHub Repository
								</a>
							</ul>
						</div>
					</Col>
					<br />
					<Col size="lg-12">
						<img
							src="./assets/images/notetaker.png"
							alt="CodeQuiz"
							className="codequiz"
						/>
					</Col>
				</Row>
				<br />

				{/* Budget Tracker Section  */}
				<Row>
					<Col size="lg-12">
						<p id="mediumblue">
							{" "}
							<strong>Budget Tracker Info:</strong>
							<strong id="antiquewhite">
								{" "}
								A progressive web application that allows the user to enter
								banking transactions into the app and see a running balance and
								graph. The application should work both on and off line.
							</strong>
						</p>
						<div class="project">
							<ul>
								<strong id="mediumblue">Deployed:</strong>{" "}
								<a
									href="https://polar-harbor-06390.herokuapp.com/"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Deploy"
								>
									GitHub Deployed Version
								</a>
								<br />
								<strong id="mediumblue">Repository:</strong>{" "}
								<a
									href="https://github.com/markshelgren/BudgetTracker"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Repository"
								>
									GitHub Repository
								</a>
							</ul>
						</div>
					</Col>
					<br />

					<Col size="lg-12">
						<img
							src="./assets/images/budgettracker.png"
							alt="ProjectOne"
							className="project1"
						/>
					</Col>
				</Row>
				<br />
				{/* Fitness Tracker Section  */}
				<Row>
					<Col size="lg-12">
						<p id="mediumblue">
							<strong>Fitness Tracker:</strong>
							<strong id="antiquewhite">
								{" "}
								The Fitness tracker enables the user to create and define their
								own workouts and exercises and then track those workouts and
								exercises. It includes a "Dashboard" where the workout history
								is displayed in graphical format.
							</strong>
						</p>
						<div class="project">
							<ul>
								<strong id="mediumblue">Deployed:</strong>{" "}
								<a
									href="https://stormy-tundra-74005.herokuapp.com/"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Deploy"
								>
									{" "}
									GitHub Deployed Version
								</a>
								<br />
								<strong id="mediumblue">Repository:</strong>{" "}
								<a
									href="https://github.com/markshelgren/WorkoutTracker"
									id="antiquewhite"
									target="_blank"
									rel="noreferrer"
									alt="Repository"
								>
									GitHub Repository
								</a>
							</ul>
						</div>
					</Col>

					<br />
					<Col size="lg-12">
						<img
							src="./assets/images/fitnesstracker.png"
							alt="BurgerApp"
							className="burger"
						/>
					</Col>
				</Row>
			</Container>

			<Footer />
		</div>
	);
}

export default Portfolio;
