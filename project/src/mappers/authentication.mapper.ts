import { IUserCredentials } from "../models/user-credentials"
import { IUserCredentialsRegister } from "../models/user-credentials-register"

export default {
  // Lo convierte a lo que recibe el API
  toApiLogin: (credentials: IUserCredentials): unknown => {
    return {
      Email: credentials.Email,
      Password: credentials.password
    }
  },
  toApiRegister: (credentials: IUserCredentialsRegister): unknown => {
    return {
      userName: credentials.userName,
      email: credentials.email,
      password: credentials.password
    }
  }
};

// Lo convierte a lo que recibe el API de registro
//ApiTo