import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
