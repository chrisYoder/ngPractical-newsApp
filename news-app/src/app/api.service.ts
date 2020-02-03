import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	API_KEY = "7ef821ce05654f9e8aab706504eb0506";

  constructor(private httpClient: HttpClient) { }
	
	public getNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`)
	}
}
