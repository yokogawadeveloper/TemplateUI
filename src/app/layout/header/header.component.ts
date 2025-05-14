import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSidebarOpen = false;
  @Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar toggled:', this.isSidebarOpen);
  }
}
