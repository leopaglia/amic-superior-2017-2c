const {pow, log} = Math;

const sum = arr => arr.reduce((acc, b) => acc + b, 0);

export const x = ({ x, y }) => x;
export const y = ({ x, y }) => y;
export const x2 = ({ x, y }) => pow(x, 2);
export const x3 = ({ x, y }) => pow(x, 3);
export const x4 = ({ x, y }) => pow(x, 4);
export const xy = ({ x, y }) => x * y;
export const x2y = ({ x, y }) => x2({ x, y }) * y;
export const lnx = ({ x, y }) => log(x);
export const lny = ({ x, y }) => log(y);
export const ln2x = ({ x, y }) => pow(log(x), 2);
export const xlny = ({ x, y }) => x * log(y);
export const lnxlny = ({ x, y }) => log(x) * log(y);
export const invx = ({ x, y }) => x !== 0 ? 1 / x : 0;
export const invy = ({ x, y }) => y !== 0 ? 1 / y : 0;
export const invxinvy = ({ x, y }) => x !== 0 && y !== 0 ? 1 / (y * x) : 0;
export const invx2 = ({ x, y }) => x !== 0 ? pow(1 / x, 2) : 0;

export const xsum = points => sum(points.map(x).filter(n => !isNaN(n) && isFinite(n)));
export const ysum = points => sum(points.map(y).filter(n => !isNaN(n) && isFinite(n)));
export const x2sum = points => sum(points.map(x2).filter(n => !isNaN(n) && isFinite(n)));
export const x3sum = points => sum(points.map(x3).filter(n => !isNaN(n) && isFinite(n)));
export const x4sum = points => sum(points.map(x4).filter(n => !isNaN(n) && isFinite(n)));
export const xysum = points => sum(points.map(xy).filter(n => !isNaN(n) && isFinite(n)));
export const x2ysum = points => sum(points.map(x2y).filter(n => !isNaN(n) && isFinite(n)));
export const lnxsum = points => sum(points.map(lnx).filter(n => !isNaN(n) && isFinite(n)));
export const lnysum = points => sum(points.map(lny).filter(n => !isNaN(n) && isFinite(n)));
export const ln2xsum = points => sum(points.map(ln2x).filter(n => !isNaN(n) && isFinite(n)));
export const xlnysum = points => sum(points.map(xlny).filter(n => !isNaN(n) && isFinite(n)));
export const lnxlnysum = points => sum(points.map(lnxlny).filter(n => !isNaN(n) && isFinite(n)));
export const invxsum = points => sum(points.map(invx).filter(n => !isNaN(n) && isFinite(n)));
export const invysum = points => sum(points.map(invy).filter(n => !isNaN(n) && isFinite(n)));
export const invxinvysum = points => sum(points.map(invxinvy).filter(n => !isNaN(n) && isFinite(n)));
export const invx2sum = points => sum(points.map(invx2).filter(n => !isNaN(n) && isFinite(n)));

export const quadraticError = ({x, y}, fn) => pow(y - fn(x), 2);
export const quadraticErrorSum = (points, fn) => sum(points.map(({x, y}) => pow(y - fn(x), 2)));

export default points => ({
	xsum: xsum(points),
	ysum: ysum(points),
	x2sum: x2sum(points),
	x3sum: x3sum(points),
	x4sum: x4sum(points),
	xysum: xysum(points),
	x2ysum: x2ysum(points),
	lnxsum: lnxsum(points),
	lnysum: lnysum(points),
	ln2xsum: ln2xsum(points),
	xlnysum: xlnysum(points),
	lnxlnysum: lnxlnysum(points),
	invxsum: invxsum(points),
	invysum: invysum(points),
	invxinvysum: invxinvysum(points),
	invx2sum: invx2sum(points)
});
