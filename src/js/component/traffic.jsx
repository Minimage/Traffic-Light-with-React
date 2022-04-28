import React, { useState, useEffect } from "react";

const Lights = () => {
	const [red, setRed] = useState("red");
	const [yellow, setYellow] = useState("yellow");
	const [green, setGreen] = useState("green");

	const clickRed = () => {
		setRed("blue");
		setYellow("yellow");
		setGreen("green");
	};
	const clickYellow = () => {
		setYellow("blue");
		setRed("red");
		setGreen("green");
	};
	const clickGreen = () => {
		setGreen("blue");
		setRed("red");
		setYellow("yellow");
	};

	return (
		<div>
			<div className="trafficTop mx-auto"></div>
			<div className="container ">
				<div
					className="light red"
					onClick={clickRed}
					style={{ backgroundColor: red }}></div>
				<div
					className="light yellow"
					onClick={clickYellow}
					style={{ backgroundColor: yellow }}></div>
				<div
					className="light green"
					onClick={clickGreen}
					style={{ backgroundColor: green }}></div>
			</div>
		</div>
	);
};

export default Lights;
