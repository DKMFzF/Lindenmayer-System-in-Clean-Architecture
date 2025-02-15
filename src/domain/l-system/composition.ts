import { container } from '@/infrastructure/DI-container/core';
import { ISystemBuilder } from '@/domain/l-system/types';
import { Builder } from '@/domain/l-system/implementation';

// внедряем зависимость через DI-контейнер
container.register<ISystemBuilder>('ISystemBuilder', new Builder());
