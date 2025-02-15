import { RuleSet, Axiom, IterationsCount, Expression } from "@/types/domain/l-system";

// типы публичного API
export type SystemSettings = {
  rules: RuleSet;
  initiator: Axiom;
  iterations: IterationsCount;
}

export interface SystemBuilder {
	build(settings: SystemSettings): Expression;
}
