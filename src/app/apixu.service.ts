import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {console.log(location)
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=48df5d890ad89f865bb51ba0f7c7b8b0&query=" + location
    );
  }
}
