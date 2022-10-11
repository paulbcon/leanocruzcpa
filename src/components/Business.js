import React from 'react'
import { StyledContainer, StyledHeading, StyledContent,PricingSubTitle } from './StyledComponents';

const Business = () => {

  return (
    <StyledContainer>
      <StyledHeading>Business Services</StyledHeading>
      <PricingSubTitle>Starting at <strong>$250/month</strong></PricingSubTitle>
      <StyledContent>
      <h4>Outsourced Accounting/Write-up Services</h4>
        <p>
        Many business owners depend on accurate, insightful financial information to manage their day-to-day operations, capitalize on opportunities, and sustain profitability.  Many sole proprietors, corporation or partnerships seek assistance in preparing, recording, summarizing, and reporting the financial activities of their businesses.  We lend our expertise to meet your accounting needs so you can focus your time and energy on strengthening your business.
        </p>
        <p>
        We offer bookkeeping services, including but not limited to general ledger maintenance, bank reconciliations, and financial reporting.  We are also available for consultations, and we are happy to help you understand the financial aspect of your business.
        </p>
        <p>
        We also offer Quickbooks set-up and conversion.  Although Quickbooks is very user friendly, it can take a bit of expertise and foresight to customize the system and set-up the Chart of Accounts for maximum benefit and effective control.  If you are already a Quickbooks user and you have questions, please feel free to call us. We are here to help you!
        </p>

        <h4>Accounting and Auditing Services </h4>
        <p>
        There are different users of financial statements, such as business owners, banks, creditors, and investors, and each have different purposes for which the financial statements will be used.  Each user may seek different levels of assurance that the financial statements accurately reflect the financial position and results of operations of a company. 
        </p>

        <p>The three levels of assurance are as follows:</p>
                
        <span>Audit – Highest Level of Assurance</span>
        <p>
        An audit provides the highest level of assurance to the user of the financial statements.  The audit process is more tedious in a way that our scope of examination is very substantial to assure us in giving our opinion to the accuracy of the financial statements.
        </p>

        <span>Review – Limited Assurance</span>
        <p>
        A review is smaller in scope than an audit but more involved than a compilation.  Users of this level of service may seek limited assurance on the financial statements because they are comfortable with a Company’s operations and want the advantages of a CPA’s technical expertise without the time and cost of an audit.
        </p>

        <span>Compilation – Lowest Level of Assurance</span>
        <p>
        Financial information is compiled in the form of financial statements to serve as the representation of management.  We express no opinion or assurance on the financial statements. 
        </p>
        <p>
        Please contact us and we would be happy to discuss which level of assurance is appropriate for your company’s needs.
        </p>
        <hr>
        </hr>
        
    </StyledContent>  
        
    </StyledContainer>
  )
}

export default Business
