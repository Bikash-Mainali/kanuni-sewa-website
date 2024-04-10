import { Component, Input, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { NavItem } from '../nav/nav-item';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  mobileQuery !: MediaQueryList;
  navItems!: NavItem[];
  private _mobileQueryListener: () => void;
  languageName!: string;

  @ViewChild('sidenav') sideNavTemplateRefateRef!: MatSidenav;
  close(reason: string) {
    this.sideNavTemplateRefateRef.close();
  }

  sidebarVisible: boolean = false;
/*
  languages = [
    { title: 'English', value: 'en' },
    { title: 'नेपाली', value: 'np' }
  ];
  */
  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private translateService: TranslateService,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 790px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    this.navItems = [
      {
        displayName: 'Home',
        iconName: 'home',
        route: '/home'
      },
      {
        displayName: 'About Us',
        iconName: 'close',
        children: [
          {
            displayName: 'Gallery',
            iconName: '',
            route: '/about-us/gallery'
          },
          {
            displayName: 'Who We Are',
            iconName: '/about-us/who-we-are'
          }
        ]
      },
      {
        displayName: 'Service',
        iconName: 'close',
        children: [
          {
            displayName: 'Selling Service',
            iconName: ''
          },
          {
            displayName: 'Buying Service',
            iconName: '',
            route: '#'
          }
        ]
      },

    ];
  }
  selectLanguage(language: string) {
    if(language === "English") {
      this.translateService.use("en");
      this.languageName = "नेपाली";
    }else{
      this.translateService.use("np");
      this.languageName = "English";
    }
}

ngOnInit(): void {
  this.languageName = "English";
}
}

