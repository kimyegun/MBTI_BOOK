import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

import banner from "../../assets/banner/banner.jpg";

const BannerImage = styled.img`
  width: 100%;
  height: 700px; /* 원하는 높이로 조절해주세요 */
  object-fit: contain; /* or 'scale-down' */
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Row className="justify-content-center">
        <StyledCol lg="100" md="6" className="align-self-center text-center">
          <BannerImage src={banner} alt="Header Banner" />
        </StyledCol>
      </Row>
    </div>
  );
};

export default HeaderBanner;
