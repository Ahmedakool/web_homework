import { Component, OnInit } from '@angular/core';
import {Task} from './Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],

})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  i: number;
  ngOnInit() {

  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(  t => t !== task);
  }

  addNewTask(name: string,number: string,price:string){
    this.tasks.push(new Task(name,number ,price));
  }
calculate(t: Task) {
    this.i = 0;
    for (let a = 0; a < this.tasks.length; a += 1) {
      this.i += t[a].price;
    }
  return  this.i;
  }
}
