import { SystemState, Expression, RuleSet, Character } from '@/types/domain/l-system';
import { List } from '@/types/base/global';
import { ISystemBuilder, SystemSettings } from '@/components/l-system/types';

/**
 * @class Builder - модель постройки дерева Пифагора. Domain слой.
 * @implements { SystemBuilder }
 * 
 * Для построения дерева понадобятся:
 * - две переменные: "0" и "1"
 * - две константы: [ и ]
 * - аксиома (стартовый символ): "0"
 * - правила преобразования: "1" → "11", "0" → "1[0]0".
 * 
 * Построение дерева Пифагора будет проходить через итерации:
 * на 1-й итерации: "1[0]0";
 * на 2-й: "11[1[0]0]1[0]0";
 * на 3-й: "1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0";
 * и тд.
 * 
 * @private { state: SystemState } - это наше локальное состояние после каждой итерации
 * @private { applyRules(rules: RuleSet): void  } - метод, который применяет правила к текущему состоянию
 */

export class Builder implements ISystemBuilder {
  private state: SystemState = '';

  public build({ rules, initiator, iterations }: SystemSettings): Expression {
    this.state = initiator;

		for (let i = 0; i < iterations; i++) this.applyRules(rules);

		return this.state;
  }

  // проходит по каждому символу из текущего состояния и заменяет его на символы из правил
  private applyRules(rules: RuleSet): void {
    const characters: List<Character> = this.state.split("");
    this.state = "";
  
    for (const character of characters) {
      const addition = rules[character] ?? character;
      this.state += addition;
    }
  }
}
