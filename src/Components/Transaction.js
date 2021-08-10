import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    text-align: absolute;
  }
`;
const Transaction = ({ transaction, index }) => {
  return (
    <div>
      <Styles>
        <Container>
          <Row>
            <li>
              <Col>{transaction.date}</Col>
              <Col>
                <Link to={`/transactions/${index}`}>{transaction.name}</Link>
              </Col>
              <Col> ${transaction.amount}</Col>
            </li>
          </Row>
        </Container>
      </Styles>
    </div>
  );
};

export default Transaction;
