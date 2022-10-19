import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import shortid from "shortid";
import Controllers from "../controlars";
import ListView from "../listView";
import TableView from "../tabileView/index";
import TodoForm from "../todo-form";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "lkjsdfj23",
        text: "it is todo tex",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "lkjsdfj234",
        text: "main todo tex",
        time: new Date(),
        isComplete: true,
        isSelect: false,
      },
      {
        id: "lkjsdfj235",
        text: "some dymey todo tex",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  handelChange = (value) => {
    this.setState({
      searchTerm: value,
    });
  };
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };
  handelFilter = (filter) => {
    this.setState({ filter });
  };
  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearComplete = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      searchTerm: "",
      view: "list",
      filter: "all",
    });
  };
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "complete") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5 "> stack todo</h1>
        <Controllers
          term={this.state.searchTerm}
          view={this.state.view}
          handelChange={this.handelChange}
          toggleForm={this.toggleForm}
          changeView={this.changeView}
          handelFilter={this.handelFilter}
          clearSelected={this.clearSelected}
          clearComplete={this.clearComplete}
          reset={this.reset}
        />

        <div>{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new todo Item
          </ModalHeader>
          <ModalBody>
            <TodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Todos;
