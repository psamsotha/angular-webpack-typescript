import { Map, Record } from 'immutable';


export interface ITodoData {
  id: number;
  title: string;
  dateCreated: number;
  comments: string;
}


export interface ITodo extends Map<string, any> {
  id: number;
  title: string;
  dateCreated: Date;
  comments: string;
}


export const TodoRecord = Record({
  id: null,
  title: null,
  dateCreated: null,
  comments: null
});


export function createTodo(data: ITodoData): ITodo {
  return new TodoRecord({
    id: data.id,
    title: data.title,
    dateCreated: (data.dateCreated && new Date(data.dateCreated)) || null,
    comments: data.comments
  }) as ITodo;
}

