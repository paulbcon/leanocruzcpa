import React from 'react'
import { Table } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import { StyledContainer, StyledHeading, StyledContent } from './StyledComponents'

const TaxRates2025 = () => {

const {posts} = useStaticQuery(graphql`
    {
    posts: allGraphCmsPreviousTaxRate {
    nodes {
      taxRate
      incomeBracket
      filercategory
    }
  }
  }
`)
  

  return (
    <StyledContainer>
    <StyledHeading>2025 Federal Income Tax Brackets</StyledHeading>
      <StyledContent>
      <h4><strong>How to get into a lower tax bracket and pay a lower federal income tax rate</strong></h4>    
      <p>Two common ways of reducing your tax bill are credits and deductions.</p>
      <ul>
          <li>
          <strong>Tax credits</strong> directly reduce the amount of tax you owe; they don't affect what bracket you're in.
          </li>
          <li>
          <strong>Tax deductions</strong>, on the other hand, reduce how much of your income is subject to taxes.
          Generally, deductions lower your taxable income by the percentage of your highest federal income tax bracket.
          So if you fall into the 22% tax bracket, a $1,000 deduction could save you $220.
          </li>
      </ul>
      <p>
      In other words: Take all the tax deductions you can claim — they can reduce your taxable income and could kick you to a lower bracket,
      which means you pay a lower tax rate.
      </p>

      <h4><strong>Single Filer</strong></h4>    
      <Table striped responsive>
      <thead>
        <tr>
            <th>Tax Rate</th>
            <th>Taxable income bracket</th>
      
        </tr>
     </thead>
     <tbody>
     {posts.nodes.map((post) => (
        post.filercategory === 'SingleFilers' && 
        <tr key={post.id}>
            <td>{post.taxRate}</td>
            <td>{post.incomeBracket}</td>
      
        </tr>
     ))}
     </tbody>
     </Table>    
     <hr />

     <h4><strong>Married Filing Jointly</strong></h4>    
      <Table striped responsive>
      <thead>
        <tr>
            <th>Tax Rate</th>
            <th>Taxable income bracket</th>
      
        </tr>
     </thead>
     <tbody>
     {posts.nodes.map((post) => (
        post.filercategory === 'MarriedJointly' && 
        <tr key={post.id}>
            <td>{post.taxRate}</td>
            <td>{post.incomeBracket}</td>
      
        </tr>
     ))}
     </tbody>
     </Table>    
     <hr />

     <h4><strong>Married Filing Separately</strong></h4>    
      <Table striped responsive>
      <thead>
        <tr>
            <th>Tax Rate</th>
            <th>Taxable income bracket</th>
      
        </tr>
     </thead>
     <tbody>
     {posts.nodes.map((post) => (
        post.filercategory === 'MarriedSeparately' && 
        <tr key={post.id}>
            <td>{post.taxRate}</td>
            <td>{post.incomeBracket}</td>
      
        </tr>
     ))}
     </tbody>
     </Table>    
     <hr />

     <h4><strong>Head of Household</strong></h4>    
      <Table striped responsive>
      <thead>
        <tr>
            <th>Tax Rate</th>
            <th>Taxable income bracket</th>
      
        </tr>
     </thead>
     <tbody>
     {posts.nodes.map((post) => (
        post.filercategory === 'HeadOfHousehold' && 
        <tr key={post.id}>
            <td>{post.taxRate}</td>
            <td>{post.incomeBracket}</td>
      
        </tr>
     ))}
     </tbody>
     </Table>    
     <hr />

      </StyledContent>
    </StyledContainer>      

  )
}

export default TaxRates2025