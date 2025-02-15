// DI-контайнер - интструмент для управления зависимостями в приложении
// в данном случае он самописный, но в дальнейшем можно использовать готовые реализации

export interface IDIContainer {
  /**
   * регистрирует сервис в контейнере
   * @param key - Уникальный ключ сервиса (например, имя класса или интерфейса).
   * @param instance - Экземпляр сервиса.
   */
  register<T>(key: string, instance: T): void;
  
  /**
   * Получает сервис из контейнера.
   * @param key - Уникальный ключ сервиса.
   * @returns Экземпляр сервиса.
   * @throws Ошибка, если сервис не найден.
   */
  get<T>(key: string): T;
}

export class DIContainer implements IDIContainer {
  private services: Map<string, any> = new Map();

  register<T>(key: string, instance: T): void {
    this.services.set(key, instance);
  }

  get<T>(key: string): T {
    const service = this.services.get(key);
    if (!service) {
      throw new Error(`Service ${key} not found`);
    }
    return service;
  }
}
