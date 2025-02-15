import { container } from "@/composition/di-container";
import { Stack } from "./types";
import { TreeJoint } from "@/types/application/tree";
import { JointsStack } from "./implementation";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

container.register<Stack<TreeJoint>>(STRUCTURAL_SETTINGS.application.stack, new JointsStack());
