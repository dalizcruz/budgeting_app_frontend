import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from './Components/Layout'
import { NavBar } from "./Components/NavBar";
import { Jumbotron } from "./Components/Jumbotron"

import Index from "./Pages/Index";
import New from "./Pages/New";

import { apiURL } from "./util/apiURL";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactions = async () => {
    let res;
    try {
      res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
<React.Fragment> 
  <NavBar />
  <Jumbotron />
  <Layout>
    <Router>
        <Switch>
          <Route exact path="/transactions"><Index transactions={transactions} /></Route>
          <Route path="/transactions/new"><New addTransaction={addTransaction} /></Route>
        </Switch>
      </Router>
  </Layout>
</React.Fragment>
      
  
  );
}

export default App;
