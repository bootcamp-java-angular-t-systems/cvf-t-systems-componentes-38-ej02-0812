import { Component, Input } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input() clients: User[] = [];
}
