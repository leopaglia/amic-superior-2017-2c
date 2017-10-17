import React, { Component } from 'react';
import './app.css';

import {
	Buttons,
	Function,
	Graph,
	Points,
	Table
} from '../../components';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="row text-center half">
					<div className="col-xs-12 col-md-12 col-lg-2 text-center">
						<Buttons/>
					</div>
					<div className="col-xs-12 col-md-6 col-lg-4 text-center">
						<Points/>
					</div>
					<div className="col-xs-12 col-md-6 col-lg-6 text-center">
						<Table/>
					</div>
				</div>

				<div className="row text-center half">
					<Function/>
					<Graph/>
				</div>
			</div>
		);
	}
}

export default App;
