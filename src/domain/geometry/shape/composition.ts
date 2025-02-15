import { container } from "@/infrastructure/DI-container/core";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { CoreShapeBuilder } from "@/domain/geometry/shape/implementation";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

// внедряем зависимость через DI-контейнер
container.register<IShapeBuilder>(STRUCTURAL_SETTINGS.domain.geometry.shape, new CoreShapeBuilder())
