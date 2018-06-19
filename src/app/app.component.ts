import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select, dispatch, WithSubStore } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';

  @select(['display', 'payment', 'giftcard'])
  readonly giftcards;

  @select(['payment', 'giftcard'])
  readonly giftcardsSaved;
}
