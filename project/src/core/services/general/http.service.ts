import { StorageService } from "./storage.service";


const storageService = new StorageService();

const headers: HeadersInit = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${storageService.get('TOKEN')}`
};

export default {
  post: (url: string, body: unknown) => fetch(url, { headers, method: 'POST', body: JSON.stringify(body) }),
  get: (url: string) => fetch(url, { headers, method: 'GET' }),
  // put: (url: string, body: any) => fetch(url, { headers, method: 'PUT', body: JSON.stringify(body) }),
  // delete: (url: string) => fetch(url, { headers, method: 'DELETE' })
}