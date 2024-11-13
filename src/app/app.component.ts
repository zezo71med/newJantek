import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { BannerComponent } from "./shared/components/banner/banner.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ApiService } from './api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'ganatak';

  // translate: TranslateService = inject(TranslateService)
  ngOnInit(): void {
  }
  constructor(@Inject(TranslateService) private readonly translate: TranslateService) {
    let lang = 'en';
    translate.setDefaultLang(lang);
    //  localStorage.setItem('language', lang);
    translate.use(lang);
    //  if (lang == 'ar') {
    //    document.getElementById('body').classList.remove('direction-ltr');
    //    document.getElementById('body').classList.add('direction-rtl');
    //  } else {
    //    document.getElementById('body').classList.remove('direction-rtl');
    //    document.getElementById('body').classList.add('direction-ltr');
    //  }
  }
}
