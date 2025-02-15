import '../presentation/scss/styles.scss'
import { container } from '@/composition/di-container';
import { ISystemBuilder } from '@/domain/l-system/types';
import { Drawer } from "@/adapters/graphics/drawer/types";

// Testing ISystemBuilder
const builder = container.get<ISystemBuilder>('ISystemBuilder');
const buildValue =  builder.build({
  initiator: '0',
  iterations: 3,
  rules: { '1': '11', '0': '1[0]0' }
});
console.log(buildValue);

const drawer = container.get<Drawer>('Drawer');
drawer.drawLine({
  start: { x: 0, y: 0 },
	end: { x: 100, y: 100 }
})
