import { container } from "@/infrastructure/DI-container/core";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { CoreShapeBuilder } from "@/domain/geometry/shape/implementation";

// внедряем зависимость через DI-контейнер
container.register<IShapeBuilder>('IShapeBuilder', new CoreShapeBuilder())
