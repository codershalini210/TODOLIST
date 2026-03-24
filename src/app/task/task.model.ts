export type Taskstatus = 'OPEN' |'IN_PROGRESS'|'DONE'
export interface Task{
    id:string;
    title:string;
    description:string;
    status: Taskstatus;
}
type TaskSTatusOption={
    value:'open'|'in-progress'|'done';
    taskStatus:Taskstatus;
    text:string;
}
export const TaskStatusOptions:TaskSTatusOption[]=[
    {value:'open',taskStatus:'OPEN',text:'Open'},
    {value:'in-progress',taskStatus:'IN_PROGRESS',text:'In-Progress'},
    {value:'done',taskStatus:'DONE',text:'Done'},
]
