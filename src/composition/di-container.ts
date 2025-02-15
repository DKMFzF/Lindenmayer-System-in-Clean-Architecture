import { container } from '@/infrastructure/DI-container/core';

// domain
import '@/domain/l-system/composition';
import '@/domain/geometry/location/composition'
import '@/domain/geometry/shape/composition'

// application
import '@/application/interpreter/composition';

// adapters
import '@/adapters/graphics/drawer/composition';

export { container }
