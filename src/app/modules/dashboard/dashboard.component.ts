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
  public isCreatePasswordVisible = false;


  public toggleTemperatureVisibility(): void {
    this.isTemperatureVisible = !this.isTemperatureVisible;
  }

  public toggleCreatePasswordVisibility(): void {
    this.isCreatePasswordVisible = !this.isCreatePasswordVisible;
  }

}
