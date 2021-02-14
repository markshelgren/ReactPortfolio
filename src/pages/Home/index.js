import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Footer from "../../components/Footer";
import "./homestyle.css";

function Home() {
	return (
		<>
			<Navbar />
			<Container>
				<Row>
					<Col size="lg-12">
						<h1 className="display-5">Meet Mark Shelgren</h1>
						<hr />
					</Col>
					<Col size="md-12">
						<img
							src={"./assets/images/mark_tie_only.jpg"}
							alt="MyPicture"
							className="img-fluid"
						/>
					</Col>
					<br />
					<Col size="md-12 text">
						<p>
							Mark has over 10+ years of successful, "hands-on" leadership,
							development and implementation in the SAP, S4/HANA environnment
							and has expanded his skills to include "Full-Stack Development".
						</p>
						<p>
							Mark has developed his own fullstack applications including, HTML,
							CSS, Javascript, React, Jquery, Node, NPM, SQL, NOSQL, MongoDB,
							Heroku, and a plethora of other "full-stack" tools, utilities,
							platforms an development environments.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
