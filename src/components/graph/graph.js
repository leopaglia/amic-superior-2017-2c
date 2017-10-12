import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

import './graph.css';

import {
	exponentialApproximation,
	hyperbolicApproximation,
	linearApproximation,
	potentialApproximation,
	quadraticApproximation
} from '../../utils/approximations';

import { Approximations } from "../../utils/constants";

class Graph extends Component {
	constructor(props) {
		super(props);
		this.getChartData = this.getChartData.bind(this);
		this.getCurrentFunction = this.getCurrentFunction.bind(this);
	}

	getCurrentFunction() {
		let fn;

		switch(this.props.approximation) {
			case Approximations.LINEAR:
				fn = linearApproximation(this.props.points);
				break;
			case Approximations.QUADRATIC:
				fn = quadraticApproximation(this.props.points);
				break;
			case Approximations.EXPONENTIAL:
				fn = exponentialApproximation(this.props.points);
				break;
			case Approximations.POTENTIAL:
				fn = potentialApproximation(this.props.points);
				break;
			case Approximations.HYPERBOLIC:
				fn = hyperbolicApproximation(this.props.points);
				break;
			default:
				break;
		}

		return fn;
	}

	getChartData() {
		const { points } = this.props;
		let fn = this.getCurrentFunction();

		if(!points.length || !fn) {
			return [
				['', '', ''],
				[0, 0, 0]
			];
		}

		const fnPoints = points.map(({ x, y }) => ({ x, y: fn(x) }));

		let values = [
			[['', '', '']]
		];

		fnPoints.forEach(({ x }, idx) => {
			const next = fnPoints[idx + 1];
			if(next) {
				const delta = (next.x - x) / 50;
				const range = [];
				for(let i = x; i < next.x; i += delta) range.push(i);
				const pointRange = range.map(h => {
					const point = _.find(points, ({ x, y }) => x === h);
					return point
						? [ h, fn(h), point.y ]
						: [ h, fn(h), null ];
				});
				values.push(pointRange);
			} else {
				const point = _.find(points, point => point.x === x);
				values.push([[ x, fn(x), point.y ]]);
			}
		});

		values = [].concat.apply([], values);

		return values;
	}

	render() {
		const options = {
			hAxis: { title: 'X' },
			vAxis: { title: 'Y' },
			legend: 'none',
			series: {
				1: { lineWidth: 0, pointSize: 8 }
			}
		};

		return (
			<div className="graph">
				<Chart
					chartType="ComboChart"
					data={this.getChartData()}
					options={options}
					width="100%"
					height="400px"/>
			</div>
		)
	}
}

function mapStateToProps({ points, approximation }) {
	return { points, approximation };
}

export default connect(mapStateToProps)(Graph);
