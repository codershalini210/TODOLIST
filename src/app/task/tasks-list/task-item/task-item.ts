import { Component, computed, inject, input } from '@angular/core';
import { Task,TaskStatusOptions,Taskstatus } from '../../task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
private taskService = inject(TaskService)
taskStatusOption = TaskStatusOptions
task = input.required<Task>()
taskStatus = computed(()=>
{
  switch (this.task().status) {
    case 'OPEN':
        return 'Open'
    case 'IN_PROGRESS':
          return 'IN_PROGRESS'
    case 'DONE':
          return 'Completed'  
  
    default:
          return 'Open'
  }
})

onChangeTaskStatus(TaskID:string,status:string){
  let newStatus : Taskstatus ='OPEN'
  switch (status) {
    case 'open':
      newStatus='OPEN'
      
      break;
  case 'in-progress':
      newStatus='IN_PROGRESS'
      
      break;
      case 'done':
      newStatus='DONE'
      
      break;
    
  }
  this.taskService.updateTask(TaskID,newStatus)
}
}
