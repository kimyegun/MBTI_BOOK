import React from 'react';
import styled from 'styled-components';

const AddressColumn = styled.div`
  flex-basis: 25%;
`;

const PhoneColumn = styled.div`
  flex-basis: 25%;
`;

const EmailColumn = styled.div`
  flex-basis: 25%;
`;


const BottomBarContainer = styled.div`
    background-color:#333;
    padding:10px;
    color:#fff;
    font-size:14px;

    a {
      margin-right:10px;

      &:first-child {
        padding-left:0;
      }
    }
`;

const FooterWrapper = styled.footer`
   background-color:#f4f4f4; 
   border-top:solid #ddd; 
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <div className="row">
                <AddressColumn>
                    <h5>Address</h5>
                    <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
                </AddressColumn>
                <PhoneColumn>
                    <h5>Phone</h5>
                    <p>Reception : +2051234567<br />Office : +2072357890</p>
                </PhoneColumn>
                <EmailColumn>
                    <h5>Email</h5>
                    <p>Office : info@wrappixel.com<br />Site : wrapkit@wrappixel.com</p>
                </EmailColumn>

                 {/* Social Icons */}
                 {/* Add your social icons here */}
                 {/* Example:
                     Replace the anchor tags with appropriate HTML tags and add appropriate classes or styles to style your social icons.
                     For example, you can use Font Awesome icons or any other icon library.
                     You can also add additional styling using CSS or inline styles.
                  */}

            </div>

            {/* Bottom Bar */}
            <BottomBarContainer className="f4-bottom-bar">
              All Rights Reserved by WrapPixel. 
              Terms of Use | Legal Disclaimer | Privacy Policy
            </BottomBarContainer>


        </FooterWrapper>


        
    );
}

export default Footer;
