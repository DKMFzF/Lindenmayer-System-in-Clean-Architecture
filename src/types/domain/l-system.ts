export type Combined<TCharacter> = TCharacter;
export type Transformed<TExpression> = TExpression;

export type Character = string;
export type Variable = Character;
export type Constant = Character;

// финальное выражение, которое получается после всех преобразований
export type Expression = Combined<Variable | Constant>;

// набор правил, по которым символы меняются
export type RuleSet = Record<Expression, Transformed<Expression>>;

// cтартовый символ, с которого начинается построение
export type Axiom = Variable;
export type SystemState = Expression;

// сколько раз нужно применить правила и изменить символы
export type IterationsCount = number;
