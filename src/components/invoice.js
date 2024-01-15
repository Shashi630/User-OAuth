import React from 'react';
import { useTable } from 'react-table';

export const invoices = [
  { id: 1, invoiceNumber: 'INV-001', amount: 100.00, dueDate: '2024-02-01', recipient: 'John Doe' },
  { id: 2, invoiceNumber: 'INV-002', amount: 150.50, dueDate: '2024-02-15', recipient: 'Jane Smith' },
  // Add more invoice data as needed
];

const columns = [
  { Header: 'Invoice Number', accessor: 'invoiceNumber' },
  { Header: 'Amount', accessor: 'amount' },
  { Header: 'Due Date', accessor: 'dueDate' },
  { Header: 'Recipient', accessor: 'recipient' },
  // Add more columns as needed
];

const InvoiceTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: invoices });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
