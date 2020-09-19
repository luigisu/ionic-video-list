import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ['home.scss'],
})
export class HomePage {
  videos: any = [
    {
      id: 1,
      titulo: "Ruedas",
      src: "http://pantallapilotos.000webhostapp.com/RUEDAS.mp4"
    },
    {
      id: 2,
      titulo: "Ruedas 2",
      src: "http://pantallapilotos.000webhostapp.com/RUEDAS.mp4"
    },
    {
      id: 3,
      titulo: "Ruedas 3",
      src: "http://pantallapilotos.000webhostapp.com/RUEDAS.mp4"
    }
  ];
  constructor(public navCtrl: NavController) {}
}
