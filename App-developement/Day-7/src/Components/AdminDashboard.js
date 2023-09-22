import React from 'react';
import './Admin.css';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
function AdminDashboard() {
  return (
    <div id="main">
        
        <div id="div2">
        <div className="booking-list">
        <h3 id="det">TRIPS DETAILS</h3>     
        <table id="home-table">
        <tr id="home-tr">
        <th id="home-th">TRIPS</th>
        <th id="home-th">DATE</th>
        <th id="home-th">BUDGET</th>
        <th id="home-th">TOTAL EXPENSES</th>
        </tr>
        <tr>
        <td id="home-td">GOA</td>
        <td id="home-td">12.5.22</td>
        <td id="home-td"> 10000</td>
        <td id="home-td">8000</td>
        </tr>
        <tr>
        <td id="home-td">KOLLAM</td>
        <td id="home-td">18.11.22</td>
        <td id="home-td"> 5000</td>
        <td id="home-td">4500</td>
        </tr>
        <tr>
        <td id="home-td">MUMBAI</td>
        <td id="home-td">12.4.23</td>
        <td id="home-td"> 20000</td>
        <td id="home-td">15000</td>
        </tr>
        
        </table>
        </div>
        </div>
        <div className="divMine">
        <h4 id="hp">Travel expense chart</h4>    
        <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['GOA', 'KOLLAM', 'MUMBAI'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [3,2,5],
        },
      ]}
      width={500}
      height={300}
    />
    </div>
        <div className="divMine1">
        <h4 id="hp1">Travel expense chart</h4>    
        <PieChart
        series={[
          {
            data: [
              { id: 0, value: 15, label: 'GOA' },
              { id: 1, value: 10, label: 'KOLLAM' },
              { id: 2, value: 20, label: 'MUMBAI' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
        
    </div>
  );
}

export default AdminDashboard;