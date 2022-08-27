import React from "react";

//include images into your bundle

import { useState } from "react";

//create your first component
const Home = () => {
	const [ligthOn, setLigthOn] = useState("")

	let counter = 0

	function loopChange () {
		counter ++
		if (counter <= 3){
			setLigthOn("red")
			console.log("red")
		}
		if (counter > 3 && counter < 7){
			setLigthOn("yellow")
			console.log("yellow")
		}
		if (counter > 6 && counter < 10){
			setLigthOn("green")
			console.log("grenn")
		}
		if (counter == 10){
			counter = 0
		}
	}

	const timers = () => {
		return(
			setInterval(loopChange, 1000)
		) 
	}

	function start () {
		timers();
	}

return(
		<>
		<div className="support"></div>	
		<div className="semaforo">
			<div  className={"red m-2" + (ligthOn === "red" ? " glowRed" : "")} onClick={(redOn) => setLigthOn("red")}></div>
			<div className={"yellow m-2 my-3" + (ligthOn === "yellow" ? " glowYellow" : "")} onClick={(yellowOn) => setLigthOn("yellow")} ></div>
			<div className={"green m-2" + (ligthOn === "green" ? " glowGreen" : "")} onClick={(greenOn) => setLigthOn("green")} ></div>
		</div>	
		<button className={"btn btn-success"} onClick={start}> Go! </button>
		</>
  )
}

export default Home;
