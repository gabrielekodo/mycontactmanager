import React, { Component } from "react";

class AddContact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.nameInput = React.createRef();
  //   this.emailInput = React.createRef();
  //   this.phoneInput = React.createRef();
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const contact = {
  //     name: this.nameInput.current.value,
  //     email: this.emailInput.current.value,
  //     phone: this.phoneInput.current.value,
  //   };

  // };
  // static defaultProps = {
  //   name: "Fred Smith",
  //   email: "fred@yahoo.com",
  //   phone: "777-777-7777",
  // };
  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
      </div>
    );
  }
}
export default AddContact;
