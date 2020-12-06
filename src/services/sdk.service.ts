export class SDKService {
  public verified = false;

//   public getRequestUri(): Observable<any> {
//     return this.configService.getConfig().pipe(switchMap((config: Config) =>
//       this.http.get(`${config.apiBaseUrl}/initiate-authorize`).pipe(take(1))
//     ));
//   }

//   public extractData(code: string): Observable<any> {
//     return this.configService.getConfig().pipe(switchMap((config: Config) =>
//       this.http.post(`${config.apiBaseUrl}/token`, { code: code }).pipe(tap(() => this.verified = true))
//     ));
//   }
}
