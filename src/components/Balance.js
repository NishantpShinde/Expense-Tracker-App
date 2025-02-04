import React from 'react'
import {GlobalContext} from "../context/GlobalState";
import { useContext } from 'react';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h2>${total}</h2>
    </>
  )
}


