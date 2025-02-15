import '../presentation/scss/styles.scss'
import { container } from '@/composition/di-container';
import { ISystemBuilder } from '@/domain/l-system/types';
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from '@/application/interpreter/types';
import { APP_SETTINGS } from '@/infrastructure/app-settings';

const builder = container.get<ISystemBuilder>('ISystemBuilder');
const drawer = container.get<Drawer>('Drawer');
const interpreter = container.get<SystemInterpreter>('SystemInterpreter');

const system = builder.build(APP_SETTINGS);
const lines = interpreter.translate(system);
lines.forEach((line) => drawer.drawLine(line));
