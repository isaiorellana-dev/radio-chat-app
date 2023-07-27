export class AuthToken {
  constructor() {
    this.loadToken()
  }
  private static _accessToken: string | undefined
  private readonly _tokenKey = "token"

  public getTokenFromLocalStorage() {
    if (typeof window !== "undefined") {
      const stringToken = window.localStorage.getItem(this._tokenKey)
      if (stringToken !== null) {
        return stringToken
      }
    }
    return null
  }

  setToken(token: string) {
    if (token != "") {
      localStorage.setItem(this._tokenKey, token)
    }
    this.loadToken()
  }

  removeToken() {
    localStorage.removeItem(this._tokenKey)
  }

  private loadToken() {
    const tokenExtracted = this.getTokenFromLocalStorage()
    if (tokenExtracted != null) {
      AuthToken._accessToken = tokenExtracted
    }
  }

  public get getToken() {
    return AuthToken._accessToken
  }
}
