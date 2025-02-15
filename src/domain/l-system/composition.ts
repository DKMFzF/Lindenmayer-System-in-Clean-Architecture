import { container } from '@/infrastructure/DI-container/core';
import { ISystemBuilder } from '@/domain/l-system/types';
import { Builder } from '@/domain/l-system/implementation';
import { STRUCTURAL_SETTINGS } from '@/infrastructure/structural-settings';

// внедряем зависимость через DI-контейнер
container.register<ISystemBuilder>(STRUCTURAL_SETTINGS.domain.lSystem, new Builder());
