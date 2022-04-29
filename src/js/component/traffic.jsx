import React, { useState, useEffect } from "react";

const Lights = () => {
	const [color, setColor] = useState();
	return (
		<div>
			<div className="trafficTop mx-auto"></div>
			<div className="container ">
				<div
					onClick={() => {
						setColor("red");
					}}
					className={color === "red" ? "red glow" : "red"}></div>
				<div
					onClick={() => {
						setColor("yellow");
					}}
					className={
						color === "yellow" ? "yellow glow" : "yellow"
					}></div>

				<div
					onClick={() => {
						setColor("green");
					}}
					className={
						color === "green" ? "green glow" : "green"
					}></div>
			</div>
		</div>
	);
};

export default Lights;
