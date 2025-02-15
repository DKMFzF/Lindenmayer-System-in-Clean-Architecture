import './scss/styles.scss'
import { container } from '@/components/composition';
import { ISystemBuilder } from '@/components/l-system/types';

const builder = container.get<ISystemBuilder>('ISystemBuilder');
const buildValue =  builder.build({
  initiator: '0',
  iterations: 3,
  rules: { '1': '11', '0': '1[0]0' }
})

console.log(buildValue);
