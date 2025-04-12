import { Component, OnInit } from '@angular/core';
import { BluetoothService } from 'src/app/services/bluetooth.service';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [
      FormsModule,
      IonInput,
      IonHeader, 
      IonToolbar, 
      IonTitle, 
      IonContent, 
      IonButton, 
      IonItem, 
    ],
})
export class SettingsComponent
{
  ssid = '';
  password = '';

  constructor(private bluetoothService: BluetoothService) {}

  saveWifi() {
    this.bluetoothService.configureWifi(this.ssid, this.password)
      .then(() => alert('Wi-Fi configured'))
      .catch(err => alert('Error: ' + err));
  }
}
