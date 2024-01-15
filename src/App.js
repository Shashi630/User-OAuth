import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { gapi } from 'gapi-script';
import React, { useState, useEffect } from 'react';
import InvoiceTable from './components/invoice';

const clientId = "482425086379-hfplsgsjumemdcmk34i9f2jt1l2oel1m.apps.googleusercontent.com";

const invoices = [
  { id: 1, invoiceNumber: 'INV-001', amount: 100.00, dueDate: '2024-02-01', recipient: 'John Doe' },
  { id: 2, invoiceNumber: 'INV-002', amount: 150.50, dueDate: '2024-02-15', recipient: 'Jane Smith' },
  // Add more invoice data as needed
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  }, []);

  const handleLoginSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
    setIsLoggedIn(true);

    // const fetchedInvoices = await fetchInvoices(); // You need to implement fetchInvoices function
    // setInvoices(fetchedInvoices);
  }

  const handleLogout = () => {
    console.log("Logout Successfull!");
    setIsLoggedIn(false);
    //setInvoices([]);
  }

  return (
    <div className="App">
      {/* <Login/>
      <Logout/>
      <InvoiceTable/> */}

      {isLoggedIn ? (
        <>
          <Logout onLogoutSuccess={handleLogout} />
          <InvoiceTable invoices={invoices} />
        </>
      ) : (
        <Login onSuccess={handleLoginSuccess} />
      )}
      <InvoiceTable/>
      
      <Logout/>
    </div>
  );
}

export default App;
