import React, { Component } from 'react';
import './app.css';

import Table from "../table/table";
import Points from "../points/points";
import Graph from "../graph/graph";
import Buttons from "../buttons/buttons";
import Function from "../function/function";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container-flex">

					<div className="row text-center half">
						<div className="col-xs-12 col-sm-6 col-md-2 text-center">
							<Buttons/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 text-center">
							<Points/>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 text-center">
							<Table/>
						</div>
					</div>

					<div className="row text-center half">
						<Function/>
						<Graph/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
