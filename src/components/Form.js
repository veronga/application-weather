import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить погоду</button>
      </form>
    );
  }
}

export default Form;
