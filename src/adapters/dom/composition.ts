import { container } from "@/composition/di-container";
import { ElementSource } from "./types";
import { DomSource } from "./implementation";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

container.register<ElementSource>(STRUCTURAL_SETTINGS.adapters.dom, new DomSource(window));
