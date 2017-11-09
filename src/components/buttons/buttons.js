import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeApproximation, changeData } from "../../actions/index";
import { Approximations, Data } from "../../utils/constants";
import './buttons.css';

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.highlightIfCurrentApproximation = this.highlightIfCurrentApproximation.bind(this);
		this.highlightIfCurrentData = this.highlightIfCurrentData.bind(this);
	}

	highlightIfCurrentApproximation(appr) {
		return this.props.approximation === appr
			? 'btn btn-success'
			: 'btn btn-primary';
	}

	highlightIfCurrentData(data) {
		return this.props.data === data
			? 'btn btn-success'
			: 'btn btn-primary';
	}

	renderButton(approximation, text) {
		return (
			<button className={this.highlightIfCurrentApproximation(approximation)}
							onClick={() => this.props.changeApproximation(approximation)}>
				{text}
			</button>
		);
	}

	renderDataButton(data, text) {
		return (
			<button className={this.highlightIfCurrentData(data)}
							onClick={() => this.props.changeData(data)}>
				{text}
			</button>
		);
	}

	render() {
		return (
			<div className="buttons">
				<div className="well">
					<p><strong>Aproximaciones</strong></p>
					{this.renderButton(Approximations.LINEAR, 'Lineal')}
					{this.renderButton(Approximations.QUADRATIC, 'Cuadrática')}
					{this.renderButton(Approximations.EXPONENTIAL, 'Exponencial')}
					{this.renderButton(Approximations.POTENTIAL, 'Potencial')}
					{this.renderButton(Approximations.HYPERBOLIC, 'Hiperbólica')}
					<hr/>
					<p><strong>Datos</strong></p>
					{this.renderDataButton(Data.INTERMEDIATE, 'Resultados Intermedios')}
					{this.renderDataButton(Data.COMPARISON, 'Comparaciones')}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ approximation, data }) {
	return { approximation, data };
}

export default connect(mapStateToProps, { changeApproximation, changeData })(Buttons);
