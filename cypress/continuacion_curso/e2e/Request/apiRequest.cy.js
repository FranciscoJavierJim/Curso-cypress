const endPoint = 'https://jsonplaceholder.typicode.com/todos';

const todoObject = {
  "userId": 11,
  "id": 201,
  "title": "NewTodoObjectFromPost",
  "completed": false
};

const addTodo = (todoObject) => {
  return cy.request('POST', endPoint, todoObject);
};

describe('API TESTING DEMO', () => {

  it('Add a todo', () => {
    addTodo(todoObject)
      .its('body')
      .should('include', todoObject);
  });

});