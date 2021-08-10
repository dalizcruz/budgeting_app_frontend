import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #D8DCDF;
  }

  .navbar-brand .navbar-nav .nav-link {
    color: 
    #E90707;
    &:hover {
      color: gray;
    }
  }
`;
export const NavBar = () => (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Budget App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/transactions">Transactions</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/transactions/new">New Transaction</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
)
