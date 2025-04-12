import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCol, IonGrid, IonRow, IonItem, IonLabel, IonList, IonIcon } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { GreenhouseDataDTO } from '../dto/greenhouse-data.dto';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { logoApple, settingsSharp, leafSharp} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonCol, 
    IonGrid, 
    IonRow,
    IonItem, 
    IonLabel, 
    IonList,
    IonIcon
  ],
})

export class HomePage 
{
  data = { temperature: '0', soilMoisture: '0', airHumidity: '0' };

  constructor(private apiService: ApiService, private router: Router) {
    addIcons({logoApple, settingsSharp, leafSharp});
  }

  ngOnInit() 
  {
    this.loadData();
  }

  loadData() 
  {
    const greenhouseData: GreenhouseDataDTO  = this.apiService.getLastArduinoData();

    this.data.temperature = greenhouseData.ambientTemp;
    this.data.soilMoisture = greenhouseData.soilMoisture;
    this.data.airHumidity = greenhouseData.ambientHumidit;
  }

  goToSettings()
  {
    this.router.navigate(['/settings']);
  }

  //
  // Action triggers
  //

  turnOnIrrigation()
  { 

  }

  turnOnLights()
  {  

  }

  turnOnVentilation()
  {

  }
}
