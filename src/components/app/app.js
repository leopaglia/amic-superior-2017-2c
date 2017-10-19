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
				<div className="row">
					<div className="col-lg-3">
						<Buttons/>
					</div>
					<div className="col-lg-9">
						<Graph/>
					</div>
				</div>

				<Function/>

				<div className="row">
					<div className="col-lg-4">
						<Points/>
					</div>
					<div className="col-lg-8">
						<Table/>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
