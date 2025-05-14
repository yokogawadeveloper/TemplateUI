import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sideService: SidebarService) {}

  toggleSidebar() {
    this.sideService.toggleSidebar();
  }
}
