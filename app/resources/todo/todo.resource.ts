
export interface ITodo extends ng.resource.IResource<ITodo> {
  title: string;
  dateCreated: number;
  complete: boolean;
  comment: string;
}

export interface ITodoResource extends ng.resource.IResourceClass<ITodo> {
}

export const todoResourceFactory = ($resource: ng.resource.IResourceService): ITodoResource => {

  return <ITodoResource>$resource('/data/todos.json');
};
