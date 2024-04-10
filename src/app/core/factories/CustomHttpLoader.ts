import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*
* It is used to load translations from "/assets/i18n/[lang].json"
* ([lang] is the lang that you're using, for english it could be en)
*/
export function CustomHttpLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
