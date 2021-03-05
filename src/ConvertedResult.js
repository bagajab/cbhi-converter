import { ArcherContainer, ArcherElement } from 'react-archer';

const rootStyle = { display: 'flex', justifyContent: 'center' };
const rowStyle = { margin: '200px 20px', display: 'flex', }

const ConvertedResult = (props) => {
  const { membershipNumber, formattedMembershipNumber } = props;
  const [payingIndigentOld, zonalCodeOld, woredaCodeOld, kebeleCodeOld, householdCodeOld, beneficiaryCodeOld ] = membershipNumber.split('/');
  const [regionalCode, woredaCode, kebeleCode, householdCode, beneficiaryCode ] = formattedMembershipNumber.split('/');
  const [payingIndigent, householdNumber] = householdCode.split('-');


  return (
    <div >
      <ArcherContainer strokeColor="red">
        <div style={rootStyle} className="mt-4">
          <ArcherElement
            id="payingIndigentOld"
            relations={[
              {
                targetId: 'payingIndigentNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5' },
              },
            ]}
          >
            <div className="h3">{payingIndigentOld}</div>
          </ArcherElement>
          <div className="h3">/</div>
           <ArcherElement
            id="zonalCodeOld"
            relations={[
              {
                targetId: 'regionCodeNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5', strokeColor: 'blue' },
              },
            ]}
          >
            <div className="h3">{zonalCodeOld}</div>
          </ArcherElement>
          <div className="h3">/</div>
           <ArcherElement
            id="woredaCodeOld"
            relations={[
              {
                targetId: 'woredaCodeNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5', strokeColor: 'black' },
              },
            ]}
          >
            <div className="h3">{woredaCodeOld}</div>
          </ArcherElement>
          <div className="h3">/</div>
           <ArcherElement
            id="kebeleCodeOld"
            relations={[
              {
                targetId: 'kebeleCodeNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5', strokeColor: 'green' },
              },
            ]}
          >
            <div className="h3">{kebeleCodeOld}</div>
          </ArcherElement>
          <div className="h3">/</div>
           <ArcherElement
            id="householdCodeOld"
            relations={[
              {
                targetId: 'householdCodeNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5', strokeColor: '#FF1493' },
              },
            ]}
          >
            <div className="h3">{householdCodeOld}</div>
          </ArcherElement>
          <div className="h3">/</div>
           <ArcherElement
            id="beneficiaryCodeOld"
            relations={[
              {
                targetId: 'beneficiaryCodeNew',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeDasharray: '5,5', strokeColor: '#228B22' },
              },
            ]}
          >
            <div className="h3">{beneficiaryCodeOld}</div>
          </ArcherElement>
        </div>

        <div style={rowStyle}>
        
          <ArcherElement id="regionCodeNew"><div className="h3">{regionalCode}</div></ArcherElement>
          <div className="h3">/</div>

          <ArcherElement id="woredaCodeNew"><div className="h3">{woredaCode}</div></ArcherElement>
          <div className="h3">/</div>

          <ArcherElement id="kebeleCodeNew"><div className="h3">{kebeleCode}</div></ArcherElement>
          <div className="h3">/</div>

          <ArcherElement id="payingIndigentNew"><div className="h3">{payingIndigent}-</div></ArcherElement>
          <ArcherElement id="householdCodeNew"><div className="h3">{householdNumber}</div></ArcherElement>
          <div className="h3">/</div>

          <ArcherElement id="beneficiaryCodeNew"><div className="h3">{beneficiaryCode}</div></ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
}

export default ConvertedResult;