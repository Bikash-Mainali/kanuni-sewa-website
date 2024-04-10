import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siddhikali-ui';
  constructor(private translateService: TranslateService) {
    // The lang to use, if the lang isn't available, it will use the current loader to get them
    // It means, You're telling the translation system to use English for the current session.
    translateService.use('np');

    // This language will be used as a fallback when a translation isn't found in the current language in i18n folder
    // It means , you're specifying that if a translation for a particular language isn't available, 
    // the system should fall back to using Nepali as the default language.
    translateService.setDefaultLang('en');
    console.log(translateService.getBrowserLang());
  }
}
