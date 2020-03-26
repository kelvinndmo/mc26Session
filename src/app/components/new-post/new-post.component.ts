import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { TasksService } from 'src/app/services/tasks/tasks.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postt: Task;

  @Output() newPost: EventEmitter<Task> = new EventEmitter();

  post: Task = {
    title: 'lkeleieekeneek',
    body: 'dkdjdkdjdkdjd',
  }

  constructor(private http: TasksService) { }

  ngOnInit(): void {

  }

  OnCreatePost(event) {
    const title = event.target.title.value;
    const body = event.target.body.value;

    this.http.createPost({ title, body }).subscribe((data) => {
      console.log(data)
      this.newPost.emit(data);

    })

  }

}
