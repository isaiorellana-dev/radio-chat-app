export class AuthToken {
  constructor() {
    this.loadToken()
  }

  private static readonly tokenKey = "token"

  public static getTokenFromLocalStorage() {
    const stringToken = localStorage.getItem(AuthToken.tokenKey)

    if (stringToken !== undefined) {
      return stringToken
    }

    return null
  }

  private loadToken() {
    const tokenExtracted = AuthToken.getTokenFromLocalStorage()
    if (tokenExtracted != null) {
      this.accessToken = tokenExtracted
    }
  }

  accessToken?: string
}

// const useAuthToken = () => {
//   let tokenKey = "token"

//   const setTokenToLocalStorage = (token: string) => {
//     localStorage.setItem(tokenKey, token)
//   }

//   const removeTokenFromLocalStorage = () => {
//     localStorage.removeItem(tokenKey)
//   }

//   return {
//     setTokenToLocalStorage,
//     removeTokenFromLocalStorage,
//   }
// }
