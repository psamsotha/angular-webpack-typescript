
export interface ITodo extends ng.resource.IResource<ITodo> {
  id: number;
  title: string;
  dateCreated: number;
  complete: boolean;
  comment: string;
}

export interface ITodoResource extends ng.resource.IResourceClass<ITodo> {
}

export const todoResourceFactory = ($resource: ng.resource.IResourceService): ITodoResource => {

  return <ITodoResource>$resource('/data/todos/:todoId.json', {}, {
    query: {
      method: 'GET',
      params: { todoId: 'todos' },
      isArray: true
    }
  });
};
