import { container } from '@/composition/core';
import { SystemBuilder } from '@/l-system/types';
import { Builder } from '@/l-system/implementation';

// внедряем зависимость через DI-контейнер
container.register<SystemBuilder>('SystemBuilder', new Builder());
