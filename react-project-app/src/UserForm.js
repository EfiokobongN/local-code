import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      description: '',
      gender: '',
      acceptTerms: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      ' User name : ' +
        this.state.userName +
        '\n Description : ' +
        this.state.description +
        ' \nGender : ' +
        this.state.gender +
        '\nAccepTerms : ' +
        this.state.acceptTerms +
        '\nEmail : ' +
        this.state.email
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option>Choose....</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Accept Terms:
            <input
              type="checkbox"
              name="acceptTerms"
              checked={this.state.acceptTerms}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}
export default UserForm;
