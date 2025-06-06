import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SkillsComponent,HeaderComponent,FooterComponent,ProjectComponent,ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ali Can Yücel Kişisel Web Sayfası';
}
