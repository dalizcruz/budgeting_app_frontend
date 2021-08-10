import Transaction from "./Transaction";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  h1 {
    text-align: center;
    margin: 10px;
    font-size: 35px;
    color: gray;
  }
`;
const Transactions = ({ transactions }) => {
  let acctTotal = 0;
  transactions.forEach((transaction) => {
    acctTotal += Number(transaction.amount);
  });
  return (
    <div>
      <Styles>
        <div>
          <h1>Current Balance: $ {acctTotal.toFixed(2).toLocaleString()}</h1>
          <Container>
            <Row>
              <Col>
                {" "}
                <h3>Date</h3>
              </Col>
              <Col>
                <h3>Name</h3>
              </Col>
              <Col>
                <h3>Amount</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <ul className="singleTransactions">
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </Styles>
    </div>
  );
};

export default Transactions;
