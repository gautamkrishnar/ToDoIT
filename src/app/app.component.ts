import { Component } from '@angular/core';
import { PreviousRouteService } from './shared/services/previous-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private previousRouteService: PreviousRouteService) {}
}
