import React, { Component } from 'react'
import ConvertedResult from './ConvertedResult'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { membershipNumber: "", validMembershipNumber: false, formattedMembershipNumber: "" };
  }

  handleMembershipumber = (event) => {
    let value = event.target.value.toUpperCase();
    if (value.length !== 19 || value.split('/').length !== 6) {
      this.setState({ validMembershipNumber: false, membershipNumber: event.target.value, formattedMembershipNumber: ""})
      return;
    }
    const [payingIndigent, zonalCode, woredaCode, kebeleCode, householdCode, beneficiaryCode ] = value.split('/');
    if (payingIndigent.length !== 1 || !(payingIndigent === 'K' || payingIndigent === 'H') || zonalCode.length !== 2 || woredaCode.length !== 2 || kebeleCode.length !== 2 || householdCode.length !== 5 || beneficiaryCode.length !== 2 ) {
      this.setState({ validMembershipNumber: false, membershipNumber: event.target.value, formattedMembershipNumber: ""})
      return;
    }
    const formattedPayingIndigent = payingIndigent === 'K' ? 'P' : 'I';
    const formattedMembershipNumber = `04/${woredaCode}/${kebeleCode}/${formattedPayingIndigent}-0${householdCode}/${beneficiaryCode}`
    this.setState({ validMembershipNumber: true, membershipNumber: event.target.value, formattedMembershipNumber })
  }

  render() {
    const { validMembershipNumber, membershipNumber, formattedMembershipNumber } = this.state;
    
    return (
      <div className="container mt-5">
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6">
            <form>
              <div className="form-group">
                <label htmlFor="membershipNumber">CBHI-ID / IFH </label>
                <input type="text" className="form-control" id="membershipNumber" value={membershipNumber} onChange={this.handleMembershipumber} />
                <small id="membershipNumberHelpBlock" className="form-text text-muted">
                  CBHI-ID/FH should follow <strong>K/13/02/05/56342/00</strong> format.
                </small>
              </div>
            </form>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 text-center">
            {validMembershipNumber && <ConvertedResult membershipNumber={membershipNumber} formattedMembershipNumber={formattedMembershipNumber} />}
          </div>
        </div>
      </div>
    )
  }
}

export default App
