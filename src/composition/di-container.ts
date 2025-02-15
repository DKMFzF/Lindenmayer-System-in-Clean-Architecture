import { container } from '@/infrastructure/DI-container/core';

// infrastructure
import '@/infrastructure/random/composition';

// domain
import '@/domain/l-system/composition';
import '@/domain/geometry/location/composition'
import '@/domain/geometry/shape/composition'

// application
import '@/application/Stack/composition';
import '@/application/interpreter/composition';

// adapters
import '@/adapters/dom/composition'
import '@/adapters/graphics/context/composition';
import '@/adapters/graphics/drawer/composition';

// composition
import '@/composition/launching-app/composition';

export { container }
