import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Chart from 'react-google-charts'




export default function MonthExpense() {
  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];
  
  return (
    <Card>
      <Card.Title>Monthly Expense</Card.Title>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

    </Card>
  )
}
