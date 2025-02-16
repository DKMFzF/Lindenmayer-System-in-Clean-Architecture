<h1 align="center">Lindenmayer-Система в чистой архитектуре</h1>
<p align="center">
  <em>L-система (система Линденмайера) — это формальная грамматика, используемая для моделирования процессов роста и развития биологических организмов, а также для генерации сложных структур и фракталов. Она состоит из алфавита символов, аксиомы (начального состояния) и набора правил переписывания, которые определяют, как каждый символ преобразуется в последовательность других символов на каждом шаге итерации. L-системы являются параллельными системами переписывания, где все символы обрабатываются одновременно, что позволяет эффективно моделировать ветвящиеся и рекурсивные структуры.Имеено это и реализованно в этом проекте. </em>
</p>

__При реализации проекта я использовал материалы из <a href="https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop/">этой статьи</a>. Автор в проекте использовал дополнительные библиотеки для управлениям зависимостями, в моём случае я реализовал часть библиотеки самостоятельно в проекте. Так же с моей стороны была добавлена более подходящая на мой взгляд структура для Чистой архитектуры и более приятный Ui.__

## Структуа проекта

- ```src/``` — исходные файлы проекта
- ```src/adapters``` — уровень адаптера приложения
- ```src/application``` — уровень приложения
- ```src/domain``` — уровень домена
- ```src/infrastructure``` — уровень инфраструктуры
- ```src/presentation``` — уровень представления
- ```src/types``` — тестовые файлы проекта
- ```src/composition``` — запуск приложения

## Важные файлы

- ```src/composition``` — здесь добавляются элементы DI-контейнера и запускается приложение
- ```src/composition/launching-app``` — модуль основных экземпляров приложения
- ```src/infrastructure/DI-container``` — исходные файлы DI-контейнера. Он необходим для реализации управления зависимостями в проекте
- ```src/infrastructure/app-settings``` — настройки приложения
- ```src/infrastructure/structural-settings``` — структурные настройки приложения необходимы для описания метаданных модулей проекта (используются в контейнере DI)
- ```src/interpreter``` — модуль создания L-системы

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

Клонирование репозитория
```Bash
git clone https://github.com/DKMFzF/Lindenmayer-System-in-Clean-Architecture.git
```

Переход в директорию проекта
```Bash
cd Lindenmayer-System-in-Clean-Architecture
```

Загрузка сторонних библиотек
```Bash
npm install
npm run start
```

или

```Bash
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Архитектура приложения (Чистая архитектура)

Чистая архитектура (Clean Architecture) — это подход к проектированию программного обеспечения, предложенный Робертом Мартином (дядя Боб), который направлен на создание гибких, масштабируемых и легко поддерживаемых систем. Основная идея заключается в разделении системы на слои с чётко определёнными ответственностями и зависимостями, чтобы минимизировать связность между компонентами и обеспечить независимость от внешних факторов, таких как фреймворки, базы данных или пользовательские интерфейсы.  

Чистая архитектура организует систему в виде концентрических слоёв, где внешние слои (например, UI или база данных) зависят от внутренних (бизнес-логика), но не наоборот. Это достигается за счёт использования абстракций и инверсии зависимостей (Dependency Inversion Principle), что делает систему более устойчивой к изменениям и упрощает её развитие.

## Полезные ссылки
- [Что такое L-системы?](https://habr.com/ru/articles/540062/)
- [Математическая красота ростений](https://habr.com/ru/articles/69989/)
- [Lindenmayer-Система](https://www.maplesoft.com/support/help/maple/view.aspx?path=MathApps/LindenmayerSystems)
- [Lindenmayer-Система Статья 2](https://jobtalle.com/lindenmayer_systems.html)
- [Мужик создаёт L-Систему на Python](https://www.youtube.com/watch?v=mAz46Z5curo)
- [Трёхслойная архитектура](https://doka.guide/tools/clean-architecture/)
- [Чистая архитектура](https://habr.com/ru/companies/otus/articles/732178/)
- [Основы внедрения зависимостей](https://habr.com/ru/articles/434380/)
- [DI в TypeScript](https://bespoyasov.ru/blog/di-ts-in-practice/)
- [Принципы SOLID, о которых должен знать каждый разработчик](https://habr.com/ru/companies/ruvds/articles/426413/)
- [Ещё один сайт, где много информации о SOLID](https://solidbook.vercel.app/)
- [Статья: "DDD, Hexagonal, Onion, Clean, CQRS, … Как я всё это собрал воедино"](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)
- [Автор статей, из которых я брал код и понял для себя L-системы.](https://github.com/bespoyasov)
- [Первая статья проекта](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop/)
- [Вторая статья проекта](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop-2/)
- [Третья статья проекта](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop-3/)
- [Оригинал проекта в GitHub](https://github.com/bespoyasov/treees)
