import { Injectable, signal } from '@angular/core';
import { Task,Taskstatus } from './task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks =signal<Task[]>([])
  alltasks =this.tasks.asReadonly()
  addTask(taskData:{title:string,description:string})
  {
    const newTask :Task={...taskData,id:new Date().toString(),status:'OPEN'}
    this.tasks.update((oldTasks)=>[...oldTasks , newTask])         
  }
  updateTask(taskId:string,newStatus:Taskstatus){
    this.tasks.update((oldTasks)=>
      oldTasks.map((task)=>
      {
        if(task.id===taskId)
        {
          console.log(taskId)        
          return {...task,status:newStatus}
       }
     return task;
    })           
  )
  }
}
