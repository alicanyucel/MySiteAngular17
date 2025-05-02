import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitorcounter',
  standalone: true,
  imports: [],
  templateUrl: './visitorcounter.component.html',
  styleUrl: './visitorcounter.component.scss'
})
export class VisitorCounterComponent implements OnInit {
  visitCount = 0;

  ngOnInit() {
    const storedCount = localStorage.getItem('visitCount');
    if (storedCount) {
      this.visitCount = parseInt(storedCount, 10) + 1;
    } else {
      this.visitCount = 1;
    }
    localStorage.setItem('visitCount', this.visitCount.toString());
  }
}
