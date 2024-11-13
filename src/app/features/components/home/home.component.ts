import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  title = 'ganatak';
  apiService: ApiService = inject(ApiService)
  listProductsSrot: any;
  listConsultant: any;
  listAboutUs: any;
  listTerms: any;
  listHomeProducts: any;
  listCategories: any;
  listStore: any;
  listtBlog: any;
  listtServices: any;
  listtConsultantCategories: any;
  listtCategoryConsultant: any;
  // translate: TranslateService = inject(TranslateService)
  ngOnInit(): void {
    this.viewAll()
  }
  
  viewAll() {
    this.apiService.getProductsSrot().subscribe({
      next: (res: any) => {
        this.listProductsSrot = res.data

      }
    })
    this.apiService.getConsultant().subscribe({
      next: (res: any) => {
        this.listConsultant = res.data

      }
    })
    this.apiService.getAboutUs().subscribe({
      next: (res: any) => {
        this.listAboutUs = res.data

      }
    })
    this.apiService.getTerms().subscribe({
      next: (res: any) => {
        this.listTerms = res.data

      }
    })
    this.apiService.getHomeProducts().subscribe({
      next: (res: any) => {
        this.listHomeProducts = res.data

      }
    })
    this.apiService.getCategories().subscribe({
      next: (res: any) => {
        this.listCategories = res.data

      }
    })
    this.apiService.getStore().subscribe({
      next: (res: any) => {
        this.listStore = res.data

      }
    })

    this.apiService.getBlog().subscribe({
      next: (res: any) => {
        this.listtBlog = res.data
      }
    })
    this.apiService.getServices().subscribe({
      next: (res: any) => {
        this.listtServices = res.data
      }
    })
    this.apiService.getConsultantCategories().subscribe({
      next: (res: any) => {
        this.listtConsultantCategories = res.data
      }
    })
    this.apiService.getCategoryConsultant().subscribe({
      next: (res: any) => {
        this.listtCategoryConsultant = res.data
      }
    })
  }

}
