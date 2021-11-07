import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class DataService {
  name = "pranjal";
  constructor(private http: HttpClient) {}

  getDailyData() {
    return this.http.get("https://data.covid19india.org/data.json");
  }
  getVaccinationDataToday(){
    return this.http.get("https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination");
  }
  getVaccinationDataTotal(){
    return this.http.get("https://www.mygov.in/sites/default/files/covid/vaccine/vaccine_counts_today.json?timestamp=1636268400")
  }

}
