export class GreenhouseDataDTO 
{
    constructor
    (
      public id: number,
      public date: Date,
      public soilTemp: string,
      public soilMoisture: string,
      public ambientTemp: string,
      public ambientHumidit: string
    ) {}
  
    getDataDescription(): string 
    {
      return `${this.id} (${this.date})`;
    }
  }