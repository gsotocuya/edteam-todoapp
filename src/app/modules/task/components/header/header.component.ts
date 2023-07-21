import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menu: Array<{ name: string; router: any }> = [
    {
      name: 'Links',
      router: [],
    },
    {
      name: 'Request',
      router: [],
    },
    {
      name: 'Shipments',
      router: [],
    },
    {
      name: 'Invoices',
      router: [],
    },
    {
      name: 'Employees',
      router: [],
    },
    {
      name: 'Settings',
      router: [],
    }
  ];
}
