import React, { useState, useEffect } from "react";

const Lights = () => {
	return (
		<div>
			<div className="trafficTop mx-auto"></div>
			<div className="container ">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
};

export default Lights;
