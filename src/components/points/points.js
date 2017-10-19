import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPoint, removePoint } from "../../actions/index";
import NumericInput from 'react-numeric-input';
import './points.css';

class Points extends Component {
	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0 };
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
		this.renderInputRow = this.renderInputRow.bind(this);
	}

	onXInputChange(e) {
		this.setState({ x: parseFloat(e.target.value) });
	}

	onYInputChange(e) {
		this.setState({ y: parseFloat(e.target.value) });
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.addPoint({ x: this.state.x, y: this.state.y });
		this.setState({ x: 0, y: 0 });
	}

	onDeleteClick(point) {
		this.props.removePoint(point);
	}

	renderHeader() {
		return(
			<thead>
				<tr>
					<th className="text-center">X</th>
					<th className="text-center">Y</th>
					<th></th>
				</tr>
			</thead>
		);
	}

	renderRow(x, y) {
		return(
			<tr key={x+'-'+y}>
				<td>{x}</td>
				<td>{y}</td>
				<td>
					<button className="btn btn-sm btn-danger" type="button" onClick={() => this.onDeleteClick({ x, y })}>&times;</button>
				</td>
			</tr>
		);
	}

	renderInputRow() {
		return (
			<tr>
				<td>
					<input type="number" step={0.01} value={this.state.x} onChange={e => this.onXInputChange(e)} autoFocus/>
				</td>
				<td>
					<input type="number" step={0.01} value={this.state.y} onChange={e => this.onYInputChange(e)}/>
				</td>
				<td>
					<button className="btn btn-sm btn-success" onClick={this.onFormSubmit}>+</button>
				</td>
			</tr>
		);
	}

	renderBody() {
		return (
			<tbody>
				{this.props.points.map(({x, y}) => this.renderRow(x, y))}
				{this.renderInputRow()}
			</tbody>
		);
	}

	render() {
		return (
			<div className="points">
				<form onSubmit={this.onFormSubmit}>
					<table className="table table-striped table-condensed">
						{this.renderHeader()}
						{this.renderBody()}
					</table>
				</form>
			</div>
		)
	}
}

function mapStateToProps({ points }) {
	return { points };
}

export default connect(mapStateToProps, { addPoint, removePoint })(Points);
