import './presentation/scss/styles.scss'
import { container } from '@/domain/composition';
import { ISystemBuilder } from '@/domain/l-system/types';
import { IStartSelector } from "@/domain/geometry/location/types";
import { IShapeBuilder } from "@/domain/geometry/shape/types";

// Testing ISystemBuilder
const builder = container.get<ISystemBuilder>('ISystemBuilder');
const buildValue =  builder.build({
  initiator: '0',
  iterations: 3,
  rules: { '1': '11', '0': '1[0]0' }
});
console.log(buildValue);

// Testin IStartSelector
// const geimetryLocation = container.get<IStartSelector>('IStartSelector');
// console.log(geimetryLocation.selectStart());

// Testing 
// const geimetryShape = container.get<IShapeBuilder>('IShapeBuilder');
// console.log(geimetryShape.createLine({ x: 0, y: 20 }, 20));
