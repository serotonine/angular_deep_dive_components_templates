import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
  ],
})
export class AppComponent {}
