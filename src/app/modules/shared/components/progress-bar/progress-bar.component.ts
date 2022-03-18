import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {
  @Input() timeInterval: number = 100;
  @Output() onCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public barProgressionIndex = 0;
  public barProgressionClasses = ['w-0', 'w-25', 'w-50', 'w-75', 'w-100'];

  ngOnInit() {
    this.startProgress();
  }

  private startProgress(): void {
    this.barProgressionIndex = 0;
    this.advanceProgress();
  }

  private advanceProgress(): void {
    if (this.barProgressionIndex < this.barProgressionClasses.length) {
      setTimeout(() => {
        this.barProgressionIndex++;
        this.advanceProgress();
      }, this.timeInterval);
    } else {
      this.onCompleted.emit(true);
    }
  }


}
