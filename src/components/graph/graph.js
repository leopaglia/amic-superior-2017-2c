import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, ScatterPlot } from 'react-d3-components';

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
		this.getScatterData = this.getScatterData.bind(this);
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
			return [{
				values: [{ x: 0, y: 0 }]
			}];
		}

		const fnPoints = points.map(({ x, y }) => ({ x, y: fn(x) }));

		let values = [];
		fnPoints.forEach(({ x }, idx) => {
			const next = fnPoints[idx + 1];
			if(next) {
				const delta = (next.x - x) / 50;
				const range = [];
				for(let i = x; i < next.x; i += delta) {
					range.push(i);
				}
				console.log(delta, range);
				const points = range.map(x => ({ x, y: fn(x) }));
				values.push(points);
			}
		});

		values = [].concat.apply([], values);
		console.log('postconcat', values);

		return [{ values }];
	}

	getScatterData() {
		const { points } = this.props;

		if(!points.length) {
			return [{
				values: [{ x: 0, y: 0 }]
			}];
		}

		return [{
			values: points
		}];
	}

	render() {
		return (
			<div className="graph">

				<LineChart
					data={this.getChartData()}
					width={400}
					height={400}
					margin={{top: 50, bottom: 50, left: 50, right: 50}}>
				</LineChart>

				<ScatterPlot
					data={this.getScatterData()}
					width={400}
					height={400}
					xAxis={{tickFormat: () => ''}}
					yAxis={{tickFormat: () => ''}}
					margin={{top: 50, bottom: 50, left: 50, right: 50}}>
				</ScatterPlot>

			</div>
		)
	}
}

function mapStateToProps({ points, approximation }) {
	return { points, approximation };
}

export default connect(mapStateToProps)(Graph);
