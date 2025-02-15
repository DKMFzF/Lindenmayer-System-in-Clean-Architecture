import { container } from "../DI-container/core";
import { STRUCTURAL_SETTINGS } from "../structural-settings";
import { Random } from "./implementation";
import { RandomSource } from "./types";

container.register<RandomSource>(STRUCTURAL_SETTINGS.infrastructure.random, new Random());
