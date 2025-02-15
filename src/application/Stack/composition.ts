import { container } from "@/composition/di-container";
import { Stack } from "./types";
import { TreeJoint } from "@/types/application/tree";
import { JointsStack } from "./implementation";

container.register<Stack<TreeJoint>>('JointsStack', new JointsStack());
