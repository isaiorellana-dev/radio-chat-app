export class AuthToken {
  constructor() {
    this.loadToken()
  }
  private static _accessToken: string | undefined
  private readonly _tokenKey = "token"

  getTokenFromLocalStorage() {
    if (typeof window !== "undefined") {
      const stringToken = window.localStorage.getItem(this._tokenKey)
      if (stringToken !== null) {
        return stringToken
      }
    }
    return null
  }

  private loadToken() {
    const tokenExtracted = this.getTokenFromLocalStorage()
    if (tokenExtracted != null) {
      AuthToken._accessToken = tokenExtracted
    }
  }

  private removeTokenFromLocalStorage() {
    localStorage.removeItem(this._tokenKey)
  }

  setToken(token: string) {
    if (token != "") {
      localStorage.setItem(this._tokenKey, token)
    }
    this.loadToken()
  }

  clearToken() {
    this.removeTokenFromLocalStorage()
    AuthToken._accessToken = undefined
  }

  public get getToken() {
    return AuthToken._accessToken
  }
}
