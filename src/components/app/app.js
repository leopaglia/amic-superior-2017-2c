import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';

import { Data } from "../../utils/constants";
import {
Buttons,
Function,
Graph,
Points,
Table,
Comparison
} from '../../components';

class App extends Component {
	render() {
		const tableComponent = this.props.data === Data.INTERMEDIATE
			? <Table/>
			: <Comparison/>;

		return (
			<div className="App">
				<div className="row">
					<div className="col-lg-3">
						<Buttons/>
					</div>
					<div className="col-lg-9">
						<Function/>
						<Graph/>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<Points/>
					</div>
					<div className="col-lg-8">
						{tableComponent}
					</div>
				</div>

			</div>
		);
	}
}

function mapStateToProps({ data }) {
	return { data };
}

export default connect(mapStateToProps)(App);
