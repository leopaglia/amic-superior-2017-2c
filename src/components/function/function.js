import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../node_modules/katex/dist/katex.css';
import '../../../node_modules/katex/dist/katex.js';
import { BlockMath } from 'react-katex';
import nerdamer from 'nerdamer';
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
		this.getTeX = this.getTeX.bind(this)
	}

	getTeX() {
		let func = "";
		const { approximation, points } = this.props;
		switch (approximation) {
			case Approximations.LINEAR: {
				const { a, b } = linearValues(points);
				func = `${a} * X + ${b}`;
				func = nerdamer(func).toTeX('decimal');
				func = `Y = ${func}`;
				break;
			}
			case Approximations.QUADRATIC: {
				const { a, b, c } = quadraticValues(points);
				func = `${a} * X^2 + ${b} * X + ${c}`;
				func = nerdamer(func).toTeX('decimal');
				func = `Y = ${func}`;
				break;
			}
			case Approximations.EXPONENTIAL: {
				const { a, b } = exponentialValues(points);
				func = `${b} * e^(${a} * X)`;
				console.log(func);
				func = nerdamer(func).toTeX('decimal');
				func = `Y = ${func}`;
				break;
			}
			case Approximations.POTENTIAL: {
				const { a, b } = potentialValues(points);
				func = `${b} * X^${a}`;
				func = nerdamer(func).toTeX('decimal');
				func = `Y = ${func}`;
				break;
			}
			case Approximations.HYPERBOLIC: {
				const { a, b } = hyperbolicValues(points);
				func = `${a} / X + ${b}`;
				func = nerdamer(func).toTeX('decimal');
				func = `Y = ${func}`;
				break;
			}
			default:
				break;
		}

		return func;
	}

	renderKatex() {
		const tex = this.getTeX();
		if(tex)
		return (
			<BlockMath math={tex}/>
		);
	}

	render() {
		return (
			<div className="Function">
				{this.renderKatex()}
			</div>
		)
	}
}

function mapStateToProps({ points, approximation }) {
	return { points, approximation };
}

export default connect(mapStateToProps)(Function);
