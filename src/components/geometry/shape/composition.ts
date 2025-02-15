import { container } from "@/components/composition/core";
import { IShapeBuilder } from "@/components/geometry/shape/types";
import { CoreShapeBuilder } from "@/components/geometry/shape/implementation";

// внедряем зависимость через DI-контейнер
container.register<IShapeBuilder>('IShapeBuilder', new CoreShapeBuilder())
