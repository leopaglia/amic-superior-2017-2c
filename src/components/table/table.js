import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Approximations } from "../../utils/constants";
import './table.css';
import {
	getLinearData,
	getQuadraticData,
	getExponentialData,
	getPotentialData,
	getHyperbolicData
} from "../../utils/intermediateData";

class Table extends Component {
	constructor(props) {
		super(props);
		this.renderTable = this.renderTable.bind(this);
	}

	renderTable() {
		let data = {
			headers: [],
			data: [],
			sums: []
		};

		switch(this.props.approximation) {
			case Approximations.LINEAR:
				data = getLinearData(this.props.points);
				break;
			case Approximations.QUADRATIC:
				data = getQuadraticData(this.props.points);
				break;
			case Approximations.EXPONENTIAL:
				data = getExponentialData(this.props.points);
				break;
			case Approximations.POTENTIAL:
				data = getPotentialData(this.props.points);
				break;
			case Approximations.HYPERBOLIC:
				data = getHyperbolicData(this.props.points);
				break;
			default:
				break;
		}

		return (
			<table className="table table-striped">
				<thead>
					<tr>
						{data.headers.map(h => <th className="text-center">{h}</th>)}
					</tr>
				</thead>
				<tbody>
					{data.data.map(row => <tr>{row.map(d => <td className="text-center">{d}</td>)}</tr>)}
					<tr>{data.sums.map(d => <td className="text-center info">{d}</td>)}</tr>
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<div className="Table">
				{this.renderTable()}
			</div>
		)
	}
}

function mapStateToProps({ points, approximation }) {
	return { points, approximation };
}

export default connect(mapStateToProps)(Table);
