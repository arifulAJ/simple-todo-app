import PropsType from "prop-types";
import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class TodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };
  handelOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handelSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);

    event.target.reset();
    this.setState({ text: "", description: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <FormGroup>
          <label>Enter task</label>
          <Input
            placeholder="Do some code"
            name="text"
            value={this.state.text}
            onChange={this.handelOnChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Description task</label>
          <Input
            type="textArea"
            placeholder="Enter some description about your work"
            name="description"
            value={this.state.description}
            onChange={this.handelOnChange}
          />
        </FormGroup>

        <Button type="submit">create task</Button>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  createTodo: PropsType.func.isRequired,
};

export default TodoForm;
