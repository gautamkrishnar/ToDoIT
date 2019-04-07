import { Component, OnInit } from '@angular/core';
import { PreviousRouteService } from '../shared/services/previous-route.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private previousRouteService: PreviousRouteService) {
  }

  ngOnInit() {
  }

}
