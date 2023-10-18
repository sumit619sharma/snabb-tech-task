// src/components/ExportToCSV.js
import React from 'react';

import { CSVLink } from 'react-csv';

function ExportToCSV({users}) {

  return (
    <div>
      <CSVLink data={users} filename={'user-details.csv'}>
        <button className="btn btn-success">Export to CSV</button>
      </CSVLink>
    </div>
  );
}

export default ExportToCSV;
