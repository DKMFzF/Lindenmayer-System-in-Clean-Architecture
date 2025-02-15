import { container } from "@/composition/di-container";
import { ElementSource } from "./types";
import { DomSource } from "./implementation";

container.register<ElementSource>('ElementSource', new DomSource(window));
