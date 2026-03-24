import { Component, ElementRef, viewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
private  formE1 =viewChild<ElementRef<HTMLFormElement>>('form')
  constructor(private taskService:TaskService){}
onAddTask(title:string,description:string){
  this.taskService.addTask({title,description})
  console.log(this.taskService.alltasks())
  this.formE1()?.nativeElement.reset();
}
}
