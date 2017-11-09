import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComparisonData } from "../../utils/intermediateData";
import './comparison.css';

class Comparison extends Component {
	constructor(props) {
		super(props);
		this.renderTable = this.renderTable.bind(this);
	}

	renderHeaders(data) {
		const bestIdxs = [data.bestApproximationIndex + 2, data.bestApproximationIndex + 7];
		const worstIdxs = [data.worstApproximationIndex + 2, data.worstApproximationIndex + 7];

		return(
			<thead>
			{/*<tr>*/}
				{/*<td colSpan={2}>Datos</td>*/}
				{/*<td colSpan={5}>Modelos Aproximantes</td>*/}
				{/*<td colSpan={5}>Error</td>*/}
			{/*</tr>*/}
			<tr>
				{data.headers.map((h, idx) => {
					let className = 'text-center';
					if(bestIdxs.indexOf(idx) !== -1) className += ' text-success';
					if(worstIdxs.indexOf(idx) !== -1) className += ' text-danger';
					return <th key={`compdatahead-${idx}`} className={className}>{h}</th>;
				})}
			</tr>
			</thead>
		);
	}

	renderBody(data) {
		const bestIdxs = [data.bestApproximationIndex + 2, data.bestApproximationIndex + 7];
		const worstIdxs = [data.worstApproximationIndex + 2, data.worstApproximationIndex + 7];

		return(
			<tbody>
			{data.data.map((row, idx) =>
				<tr key={`compdatarow-${idx}`}>
					{row.map((d, idx) => {
						let className = 'text-center';
						if(bestIdxs.indexOf(idx) !== -1) className += ' text-success';
						if(worstIdxs.indexOf(idx) !== -1) className += ' text-danger';
						return <td key={`compdata-${idx}`} className={className}>{d}</td>;
					})}
				</tr>
			)}
			</tbody>
		);
	}

	renderTable() {
		let data = getComparisonData(this.props.points);

		return (
			<table className="table table-striped table-condensed">
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

function mapStateToProps({ points }) {
	return { points };
}

export default connect(mapStateToProps)(Comparison);
