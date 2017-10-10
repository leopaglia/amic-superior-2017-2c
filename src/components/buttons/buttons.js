import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeApproximation } from "../../actions/index";
import { Approximations } from "../../utils/constants";
import './buttons.css';

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.highlightIfCurrent = this.highlightIfCurrent.bind(this);
	}

	highlightIfCurrent(appr) {
		return this.props.approximation === appr
			? 'btn btn-success'
			: 'btn btn-primary';
	}

	renderButton(approximation, text) {
		return (
			<button className={this.highlightIfCurrent(approximation)}
							onClick={() => this.props.changeApproximation(approximation)}>
				{text}
			</button>
		);
	}

	render() {
		return (
			<div className="buttons">
				<div className="well">
					{this.renderButton(Approximations.LINEAR, 'Aproximación Lineal')}
					{this.renderButton(Approximations.QUADRATIC, 'Aproximación Cuadrática')}
					{this.renderButton(Approximations.EXPONENTIAL, 'Aproximación Exponencial')}
					{this.renderButton(Approximations.POTENTIAL, 'Aproximación Potencial')}
					{this.renderButton(Approximations.HYPERBOLIC, 'Aproximación Hiperbólica')}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ approximation }) {
	return { approximation };
}

export default connect(mapStateToProps, { changeApproximation })(Buttons);
