import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  imageUrl: string = 'http://lorempixel.com/600/600/people/1'

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data) => {
      this.tasks = data;
    })
    // this.tasks = [
    //   {
    //     title: "New Tadddsk",
    //     description: "Another task"
    //   },
    //   {
    //     title: "New Taddsk",
    //     description: "Another task"
    //   },
    //   {
    //     title: "New Taddsk",
    //     description: "Another task"
    //   }

    // ]
  }

  OnNewPostCreated(event) {
    console.log(event)
  }

}
