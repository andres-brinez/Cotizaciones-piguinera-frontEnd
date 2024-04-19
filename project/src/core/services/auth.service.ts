import authenticationMapper from "../../mappers/authentication.mapper";
import { IUserCredentials } from "../../models/user-credentials";
import { urls } from "../env/url.resource";
import http from "./general/http.service";
import { StorageService } from "./general/storage.service";

export const authServiceLogin = (credentials: IUserCredentials): Promise<string> => {
  const url = urls.login;
  const body = authenticationMapper.toApiLogin(credentials);

  return http.post(url, body)
    .then((response) => response.json())
    .then((response) => {
      const storage = new StorageService();
      storage.set('TOKEN', response.token);
      return response.token;
    });
}

// Se hace lo mismo con el registro