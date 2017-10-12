import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Approximations } from "../../utils/constants";
import {
	linearValues,
	quadraticValues,
	exponentialValues,
	potentialValues,
	hyperbolicValues
} from '../../utils/approximations';

class Function extends Component {
	constructor(props) {
		super(props);
		this.getPrintableFunction = this.getPrintableFunction.bind(this)
	}

	getPrintableFunction() {
		let func = "";
		const { approximation, points } = this.props;
		switch (approximation) {
			case Approximations.LINEAR: {
				const { a, b } = linearValues(points);
				func = `Y = ${a} * X + ${b}`;
				break;
			}
			case Approximations.QUADRATIC: {
				const { a, b, c } = quadraticValues(points);
				func = `Y = ${a} * X^2 + ${b} * X + ${c}`;
				break;
			}
			case Approximations.EXPONENTIAL: {
				const { a, b } = exponentialValues(points);
				func = `Y = ${b} * e^(${a} * X)`;
				break;
			}
			case Approximations.POTENTIAL: {
				const { a, b } = potentialValues(points);
				func = `Y = ${b} * X^${a}`;
				break;
			}
			case Approximations.HYPERBOLIC: {
				const { a, b } = hyperbolicValues(points);
				func = `Y = ${a} / X + ${b}`;
				break;
			}
			default:
				break;
		}

		return func;
	}

	render() {
		return (
			<div className="Function">
				{this.getPrintableFunction()}
			</div>
		)
	}
}

function mapStateToProps({ points, approximation }) {
	return { points, approximation };
}

export default connect(mapStateToProps)(Function);
