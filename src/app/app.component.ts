import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem(
      'authorization_token',
      `${btoa('anastasiya-antonenka:TEST_PASSWORD')}`
    );
  }
}
