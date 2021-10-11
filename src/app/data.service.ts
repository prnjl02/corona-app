import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class DataService {
  name = "pranjal";
  constructor(private http: HttpClient) {}

  getDailyData() {
    return this.http.get("https://data.covid19india.org/data.json");
  }
}
