import { Component } from '@angular/core';


import { PrevisaoPage } from '../previsao/previsao';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PrevisaoPage;
  //tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
