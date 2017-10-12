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
		this.getData = this.getData.bind(this);
		this.renderHeaders = this.renderHeaders.bind(this);
		this.renderBody = this.renderBody.bind(this);
		this.renderTable = this.renderTable.bind(this);
	}

	getData() {
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

		return data;
	}

	renderHeaders(data) {
		return(
			<thead>
				<tr>
					{data.headers.map((h, idx) => <th key={`datahead-${idx}`} className="text-center">{h}</th>)}
				</tr>
			</thead>
		);
	}

	renderBody(data) {
		return(
			<tbody>
				{data.data.map((row, idx) =>
					<tr key={`datarow-${idx}`}>
						{row.map((d, idx) => <td key={`data-${idx}`} className="text-center">{d}</td>)}
					</tr>
				)}
				{this.renderSums(data)}
			</tbody>
		);
	}

	renderSums(data) {
		return(
			<tr>{data.sums.map((d, idx) => <td key={`datasum-${idx}`} className="text-center info">{d}</td>)}</tr>
		);
	}

	renderTable() {
		let data = this.getData();

		return (
			<table className="table table-striped">
				{this.renderHeaders(data)}
				{this.renderBody(data)}
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
