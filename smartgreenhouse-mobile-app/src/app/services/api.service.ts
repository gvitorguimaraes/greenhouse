import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GreenhouseDataDTO } from '../dto/greenhouse-data.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://your-api-endpoint.com'; // Replace with your API URL


  //
  // MOCKED api methods for development
  //

  //getArduinoData() {
    //return this.http.get(`${this.apiUrl}/arduino/data`);
  //}

  //sendCommand(command: string) {
    //return this.http.post(`${this.apiUrl}/arduino/command`, { command });
  //}

  getLastArduinoData() : GreenhouseDataDTO
  {
    return new GreenhouseDataDTO(1, new Date(2025, 4, 6), '10', '20', '30', '40');
  }
}
