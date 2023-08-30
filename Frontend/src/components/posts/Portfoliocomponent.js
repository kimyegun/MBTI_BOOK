import React from "react";
import { Row, Col,  Card, CardBody } from "reactstrap";
import styled from 'styled-components';

const images = [
  { src: require("../../assets/mbti/enfj.png"), title: '오션뷰', desc: '최고의오션뷰' },
  { src: require("../../assets/mbti/enfj.png"), title: '일류 셰프', desc: '호텔 레스토랑에서 최고의 맛을 경험하세요' },
  { src: require("../../assets/mbti/enfj.png"), title: '최고의 서비스', desc:'최고의 서비스를 호텔에서 경험하세요'},
  { src: require("../../assets/mbti/enfj.png"), title:'다양한 activity program', desc:'호텔에서 다양한 액티비티 프로그램을 한번에 경험하세요'},
  { src: require("../../assets/mbti/enfj.png"), title:'카지노', desc:'카지노를 이용하십시오'},
  { src: require("../../assets/mbti/enfj.png"), title:'Bar', desc:'세상의 모든 술을 있습니다.'}
];

const StyledImg = styled.img`
    width :100%;
    height :200px; /* 원하는 높이로 설정 */
    object-fit :cover;
`;

const PortfolioComponent = () => {
  
  return (
    <div>
      <div className="spacer">

          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">MBTI 유형별 소개</h2>
              <h6 className="subtitle">
                MBTI 16가지 성격 유형별 소개해드리겠습니다.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            {
              images.map((image,i) => (
                <Col md="4" key={i}>
                  <Card className="card-shadow">
                    <a href="#" className="img-ho">
                      {/* StyledImg 컴포넌트 사용 */}
                      <StyledImg
                        alt={"wrappixel kit "+i}
                        src={image.src}
                      />
                    </a>
                    <CardBody>
                      <h5 className="font-medium m-b-0">{image.title}</h5>
                      <p className="m-b-0 font-14">{image.desc}</p>
                    </CardBody>
                  </Card>
                </Col>  
              ))
            }
          </Row>

      </div>
    </div>
  );
};

export default PortfolioComponent;