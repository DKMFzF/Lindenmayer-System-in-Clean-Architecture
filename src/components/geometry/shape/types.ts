import { 
  Point, 
  Length, 
  Angle, 
  Line
} from '@/types/domain/geometry';

export interface ShapeBuilder {
	createLine(start: Point, length: Length, angle?: Angle): Line;
}
