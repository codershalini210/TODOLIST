import { Component,computed,signal,inject } from '@angular/core';
import { TaskStatusOptions } from '../task.model';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { TaskItem } from './task-item/task-item';
@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem,CommonModule],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
taskstatusOption = TaskStatusOptions
private taskService = inject(TaskService)
private selectedFilter = signal<string>('all')
tasks =computed(()=>
{
  switch (this.selectedFilter()) {
    case 'all':
        return this.taskService.alltasks()
    case 'open':
        return this.taskService.alltasks().filter((task)=>task.status==='OPEN')    
    case 'in-progress':
        return this.taskService.alltasks().filter((task)=>task.status==='IN_PROGRESS')    
    case 'done':
        return this.taskService.alltasks().filter((task)=>task.status==='DONE')    
  
    default:
      return this.taskService.alltasks()
  }
})

onChangeTasksFilter(filter:string){
  this.selectedFilter.set(filter)
}
}
