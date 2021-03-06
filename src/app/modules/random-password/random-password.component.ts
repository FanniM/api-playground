import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-random-password",
  templateUrl: "./random-password.component.html",
  styleUrls: ["./random-password.component.sass"],
})
export class RandomPasswordComponent implements OnInit {
  public randomPassword = null;
  public symbols: string[] = ["(", ")", ".", ";", "#", "!", "?"];
  public showProgressBar = false;

  ngOnInit() {
    this.showProgressBar = true;
    this.randomPassword = this.createRandomPassword();
  }

  private createRandomPassword(): string {
    return (
      this.createRandomString(6) +
      "-" +
      this.createRandomString(4) +
      "-" +
      this.createRandomString(6)
    );
  }

  private createRandomString(length: number = 6): string {
    let block: string = Math.random().toString(22).slice(2);

    block = this.getRandomSubstring(block, length);

    for (
      let index = 0;
      index < Math.floor(Math.random() * block.length);
      index++
    ) {
      block = this.setCharAtRandomIndexInUpperCase(block);
    }

    for (
      let index = 0;
      index < Math.floor(Math.random() * block.length);
      index++
    ) {
      block = this.substituteCharWithRandomSymbol(block);
    }

    return block;
  }

  private getRandomSubstring(string: string, length: number) {
    const startingIndex: number = Math.floor(
      Math.random() * (string.length - length)
    );

    return string.substring(startingIndex, startingIndex + length);
  }

  private setCharAtRandomIndexInUpperCase(string: string) {
    const randIndex = Math.floor(Math.random() * string.length);
    return (
      string.substring(0, randIndex) +
      string.charAt(randIndex).toUpperCase() +
      string.substring(randIndex + 1)
    );
  }

  private substituteCharWithRandomSymbol(block: string) {
    const randIndex = Math.floor(Math.random() * block.length);
    const symbolsRandIndex = Math.floor(Math.random() * this.symbols.length);
    return (
      block.substring(0, randIndex) +
      this.symbols[symbolsRandIndex] +
      block.substring(randIndex + 1)
    );
  }

  public copyPasswordToClipboard(): void {
    navigator.clipboard.writeText(this.randomPassword);
  }

  public onProgressCompleted(isProgressCompleted: boolean): void {
    this.showProgressBar = !isProgressCompleted;
  }
}
