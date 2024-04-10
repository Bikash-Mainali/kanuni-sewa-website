import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { NavItem } from '../nav/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items !: NavItem[];
  @ViewChild('childMenu') public childMenu: any;
  @Input() test !: NavItem[];


  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
