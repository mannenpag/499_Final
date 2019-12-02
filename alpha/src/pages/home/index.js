import React, {useReducer,useState,useEffect} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

import {PairingDoc} from "./components";
import {ClickList} from "./components";

//Here is home content. 
const HomePage = () => {
	let {path} = useRouteMatch();

	// A reducer is a handy way of creating app data that is subscribed but somewhat custom
	// These will reset if you ever navigate away from the Learn pages
	let [fonts,setFont] = useReducer(
		(s,a) => ({...s,...a}),
		{first:'Arial',second:'serif'}
	);

	return(
		<article className="container max-xs-s p-xs-ts">
			<section className="grid">
				<h4 className="col--4">Welcome to our font pairing app</h4>
			</section>
			<section className="grid">
				<p className="col--4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</section>
			<section>
				<Switch>
					<Route exact path={`${path}`}>
						<PairFont 
							path={path}
							fonts={fonts}
							setFont={setFont}
						/>
					</Route>
				</Switch>
			</section>
		</article>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 

const PairFont = ({path,fonts,setFont}) => {
	let fontlist = ['Arial', 'Arial Black', 'Tahoma', 'Verdana', 'Sans-Serif', 'Open-Sans'];
	
	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleChange = (e) => {
		e.preventDefault();
		setFont({first:e.target.value});
	}

	const handleInput = (e) => {
		e.preventDefault();
		setFont({first:e.target.value});
	}

	return (
		<section className="grid">
			<div className="col--6">
				<div className="p-xs-bs"><Link to={`${path}/1`}>Next</Link></div>
				<input className="font-input m-xs-bm" type="text" value={fonts.first} onChange={handleInput} />
				<ClickList data={fontlist} callback={setFont} />
			</div>
			<div className="col--6 offset--7 pairing-wrapper">
				<PairingDoc fontStyle={fonts.first} fontName={fonts.first}/>
			</div>
		</section>
	);
}

export default HomePage;