
import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})



export class LayoutComponent implements OnInit {



  informations: any; 

  titleDefault = 'Godzilla VS OWlKitty'
  Descriptions = 'A parody of Godzilla vs. Kong starring my cat OwlKitty. #OwlKitty​ #Godzilla​ #GodzillaVsKong'
  TitleDescription = 'OwlKitty Parody'
  Image = '../../../assets/catvsgodzilla.jpg'

  constructor(private service: LayoutService) {}


  ngOnInit(): void {
    this.service.informations
  }

  receivedArray(event: any) {
    this.informations = event;
    console.log(this.informations)
  }


}
