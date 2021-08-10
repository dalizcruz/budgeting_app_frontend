import { useState } from "react";
import { withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";

function TransactionNewForm({ addTransaction, history }) {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const handleInputChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };
  return (
    <div className="New">
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Transaction Date:</Form.Label>
          <Form.Control
            type="text"
            placeholder="month day"
            id="date"
            value={transaction.date}
            onChange={handleInputChange}
          ></Form.Control>

          <Form.Label>Name:</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={transaction.name}
            placeholder="expenditure or income"
            onChange={handleInputChange}
          ></Form.Control>
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            id="amount"
            type="text"
            name="amount"
            value={transaction.amount}
            placeholder="$$"
            onChange={handleInputChange}
            required
          ></Form.Control>

          <Form.Label>From:</Form.Label>
          <Form.Control
            id="from"
            type="text"
            name="from"
            value={transaction.from}
            placeholder="from"
            onChange={handleInputChange}
            required
          ></Form.Control>
          <br />
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
      </Container>
    </div>
  );
}

export default withRouter(TransactionNewForm);
