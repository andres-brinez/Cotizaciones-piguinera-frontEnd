export class StorageService {

  public get(key: string): unknown {
    const item = globalThis.localStorage.getItem(key);
    if (item === null || item === "undefined") {
      return null;
    }
    return JSON.parse(item);
  }
  

  public set(key: string, payload: unknown): void {
    globalThis.localStorage.setItem(key, JSON.stringify(payload))
  }

  public remove(key: string): void {
    globalThis.localStorage.removeItem(key);
  }
}