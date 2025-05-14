import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-menu') && !target.closest('.profile-img')) {
      // this.closeMenu();
    }
  }
}
