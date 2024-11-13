import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { 

  }


  domain = environment.domain
  getCustemar(url: string,data:any={}) {
    return this.http.post(url,data)
  }

  getProductsSrot() {
    return this.getCustemar(`${this.domain}/active-store-products`);
  }
  getConsultant() {
    return this.getCustemar(`${this.domain}/consultants-at-home`);
  }
  getAboutUs() {
    return this.getCustemar(`${this.domain}/about-app`);
  }
  getTerms() {
    return this.getCustemar(`${this.domain}/terms-app`);
  }
  getHomeProducts() {
    return this.getCustemar(`${this.domain}/home-products`);
  }
  getCategories() {
    return this.getCustemar(`${this.domain}/categories-list`);
  }
  getStore() {
    return this.getCustemar(`${this.domain}/stores-list`);
  }
  getBlog() {
    return this.getCustemar(`${this.domain}/community-posts`);
  }
  getServices() {
    return this.getCustemar(`${this.domain}/services `);
  }
  getConsultantCategories() {
    return this.getCustemar(`${this.domain}/consultant-categories `);
  }
  getCategoryConsultant() {
    return this.getCustemar(`${this.domain}/category-consultants `,{category_id:1});
  }
  

}
