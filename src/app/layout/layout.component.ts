import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  logout(): void {
    this.storageService.logout();
    this.router.navigate(['/login']);
  }

}
