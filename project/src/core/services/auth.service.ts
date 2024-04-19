import authenticationMapper from "../../mappers/authentication.mapper";
import { IUserCredentials } from "../../models/user-credentials";
import { IUserCredentialsRegister } from "../../models/user-credentials-register";
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

export const authServiceRegister = (credentials: IUserCredentialsRegister): Promise<boolean> => {
  const url = urls.registerUser;
  const body = authenticationMapper.toApiRegister(credentials);
  return http.post(url, body)
    .then((response)=>{
      console.log(response);
      if(response.status === 200){
        return true;
      }else{
        return false;
      }
    }) 
    
}

// Se hace lo mismo con el registro