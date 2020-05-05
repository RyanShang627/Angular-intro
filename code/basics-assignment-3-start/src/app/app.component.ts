import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showParagraph: boolean = false;
  paraContent: string = "Secret Password = tuna";
  logArray: Array<number> = [];

  onClick() {
    this.showParagraph = !this.showParagraph;
    this.logArray.push(Date.now());
  }
}
