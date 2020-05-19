import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  csvContent: string;
  randomNum: string;

  ngOnInit() {

  }

  const test: string[]
  repeater: NodeJS.Timeout
  isRandom: boolean
  isAlreadyHaveItem: boolean

  getData() {
    var callCount = 1;
    this.isRandom = true
    this.repeater = setInterval(() => {
      this.getRandomNumber()
      callCount += 1
    }, 10);
  }

  stop() {
    this.isRandom = false
    clearInterval(this.repeater)
  }

  getRandomNumber() {
    this.randomNum = this.test[Math.floor(Math.random() * this.test.length)];
  }
  onFileSelect(input: HTMLInputElement) {
    if (this.isAlreadyHaveItem) {
      this.isRandom = false
      this.randomNum = undefined
      clearInterval(this.repeater)
    }
    const files = input.files;

    if (files && files.length) {

      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        this.test = csv.split("\n").slice(1)
        this.isAlreadyHaveItem = true
      }

    }

    

  }


}