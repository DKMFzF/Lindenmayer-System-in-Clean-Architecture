import { container } from '@/components/composition/core';
import { SystemBuilder } from '@/components/l-system/types';
import { Builder } from '@/components/l-system/implementation';

// внедряем зависимость через DI-контейнер
container.register<SystemBuilder>('SystemBuilder', new Builder());
