export type PixelsAmount = number;
export type DegreesAmount = number;
export type Coordinate = number;

export type Length = PixelsAmount;
export type Angle = DegreesAmount;

export type Point = {
	x: Coordinate;
	y: Coordinate;
};

export type Size = {
	width: Length;
	height: Length;
};

export type Line = {
	start: Point;
	end: Point;
};