import { container } from '@/components/composition/core';
import { ISystemBuilder } from '@/components/l-system/types';
import { Builder } from '@/components/l-system/implementation';

// внедряем зависимость через DI-контейнер
container.register<ISystemBuilder>('ISystemBuilder', new Builder());
