import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

class Register extends React.Component {
  state = {
   customer_name: '',
   account_number: '',

  };
}
 handleInputChange = (event) => {
    const { customer_name, value} = event.target;
    this.setState({
      [customer_name]: value
    });
  };
render() ;{
    const { customer_name, account_number,} = this.state;
    return()};
}
 <Form.Group controlId="customer_name">
              <Form.Label>customer_name</Form.Label>
              <Form.Control
                type="text"
                name="customer_name"
                placeholder="Enter your name"
                onChange={this.handleInputChange}
              />
            </Form.Group>

 <Form.Group controlId="account_number">
              <Form.Label>account_number</Form.Label>
              <Form.Control
                type="text"
                name="account_number"
                placeholder="Enter your account number"
                onChange={this.handleInputChange}
              />
            </Form.Group>
class Account extends React.Component {
  state = {
    selectedType: 'withdraw'
  };
  setSelectedType = (selectedType) => {
    this.setState({ selectedType });
  };

  render() {
    const { selectedType } = this.state;

    return (
      <div>
        <div className="account">
          <Button
            variant="primary"
            className={`${
              selectedType === 'withdraw' ? 'active account-btn' : 'account-btn'
            }`}
            onClick={() => this.setSelectedType('withdraw')}
          >
            Withdraw
           </Button>
          <Button
            variant="secondary"
            className={`${
              selectedType === 'deposit' ? 'active account-btn' : 'account-btn'
            }`}
            onClick={() => this.setSelectedType('deposit')}
          >
            Deposit
          </Button>
           <Button
            variant="info"
            className={`${
              selectedType === 'show_balance' ? 'active account-btn' : 'account-btn'
            }`}
            onClick={() => this.setSelectedType('show_balance')}
          >
            Show_balance
          </Button>
       </Button>
        </div>
        <div>
          {selectedType === 'withdraw' || selectedType === 'deposit' ? (
            
        </div>
      </div>
    );
  }
}
