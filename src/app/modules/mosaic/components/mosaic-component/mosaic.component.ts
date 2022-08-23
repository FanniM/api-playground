import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.sass']
})
export class MosaicComponent implements OnInit {

  mosaicTable: string[][];
  mosaicDimension = 30;

  ngOnInit() {
    this.drawMosaic();
    this.snippet();
  }

  private drawMosaic() {
    this.mosaicTable = [];

    for (let i = 0; i < this.mosaicDimension; i++) {
      this.mosaicTable.push(Array(this.mosaicDimension).fill('').map(() => this.getRandomColor()));
    }
  }

  private getRandomColor(): string {
    return `#${this.getRandomHex()}${this.getRandomHex()}${this.getRandomHex()}${this.getRandomHex()}${this.getRandomHex()}${this.getRandomHex()}`;
  }

  private getRandomHex(): string {
    return Math.floor((Math.random() * 16)).toString(16);
  }

  private snippet(): void {
    const myImg = new Image();
    myImg.crossOrigin = "Anonymous";
    myImg.onload = () => {
      const context = document.createElement('canvas').getContext('2d');
      context.drawImage(myImg, 0, 0);
      const {
        data
      } = context.getImageData(10, 10, 1, 1);
      console.log(data); // RGBA
    }
    myImg.src = 'https://picsum.photos/200/300';
  }

}
