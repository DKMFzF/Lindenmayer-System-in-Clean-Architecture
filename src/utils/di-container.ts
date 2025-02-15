import { IDIContainer } from '@/types/utils/di-container';

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
