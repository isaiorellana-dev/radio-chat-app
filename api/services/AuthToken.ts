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

  setToken(token: string) {
    if (token != "") {
      localStorage.setItem(AuthToken.tokenKey, token)
    }
    this.loadToken()
  }

  private loadToken() {
    const tokenExtracted = AuthToken.getTokenFromLocalStorage()
    if (tokenExtracted != null) {
      this.accessToken = tokenExtracted
    }
  }

  accessToken?: string
}
