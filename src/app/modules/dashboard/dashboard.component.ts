import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  public isTemperatureVisible = false;

  public toggleTemperatureVisibility(): void {
    this.isTemperatureVisible = !this.isTemperatureVisible;
  }
}
