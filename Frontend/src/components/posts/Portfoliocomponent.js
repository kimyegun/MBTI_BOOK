import React from "react";
import styled from 'styled-components';

const images = [
  {src: require("../../assets/mbti/enfj.png"), title: 'ENFJ', desc: '열정적인 리더' },
  {src: require("../../assets/mbti/enfp.png"), title: 'ENFP', desc: '자유로운 영혼의 활동가' },
  {src: require("../../assets/mbti/entj.png"), title: 'ENTJ', desc:'당당한 비전을 가진 리더'},
  {src: require("../../assets/mbti/entp.png"), title:'ENTP', desc:'끊임없이 도전하는 변화 추구자'},
  {src: require("../../assets/mbti/esfj.png"), title:'ESFJ', desc:'친절하고 사교적인 조화 추구자'},
  {src: require("../../assets/mbti/esfp.png"), title:'ESFP', desc:'재치있는 사교적 연예인'},
  {src: require("../../assets/mbti/estj.png"), title: 'ESTJ', desc : '사실적이고 결단력 있는 관리자' },
  {src :require ("../../assets/mbti/estp.png"),title :'ESTP ',desc :'모험을 즐기는 실용주의자' },
  {src :require ("../../assets/mbti/infj.png"),title :'INFJ ',desc :'뛰어난 통찰력을 가진 옹호자'},
  {src :require ("../../assets/mbti/infp.png"),title :'INFP ',desc :'사색에 빠진 중재자'},
  {src :require ("../../assets/mbti/intj.png"),title :'INTJ ',desc :'독립적인 전략가'},
  {src :require ("../../assets/mbti/intp.png"),title :'INTP ',desc :'논리적이고 창조적인 사색가'},
  {src :require ("../../assets/mbti/isfj.png"),title :'ISFJ ',desc :"섬세한 수호자와 보호자"},
  {src: require("../../assets/mbti/isfp.png"), title:'ISFP', desc:"예술가와 탐험가"},
  {src: require("../../assets/mbti/istj.png"), title:'ISTJ', desc:'철저하고 신뢰성 있는 논리주의자'},
  {src: require("../../assets/mbti/istp.png"), title:'ISTP', desc:'실용적인 문제 해결사'},

];



const PortfolioComponent = () => {
  
  return (
    <div>
      <Spacer/>
    
      <TitleContainer>
    <Title>MBTI 유형별 소개</Title>
    <Subtitle>
        MBTI 16가지 성격 유형별 소개해드리겠습니다.
    </Subtitle>
</TitleContainer>
       
          
          <StyledRow className="m-t-40">
            {
              images.map((image,i) => (
                <StyledCol md="4" key={i}>
                  <StyledCard className="card-shadow">
                    <a href="#" className="img-ho">
                      {/* StyledImg 컴포넌트 사용 */}
                      <StyledImg
                        alt={"wrappixel kit "+i}
                        src={image.src}
                      />
                    </a>
                    <StyledCardBody>
                      <h5 className="font-medium m-b-0">{image.title}</h5>
                      <p className="m-b-0 font-14">{image.desc}</p>
                    </StyledCardBody>
                  </StyledCard>
                </StyledCol>  
              ))
            }
          </StyledRow>
         
      </div>
   
    
  );
};

export default PortfolioComponent;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 7px;
  margin-bottom: 20px;
  max-width: 300px; // 카드의 최대 너비 설정
  width: 300px; // 고정 너비 설정
`;

const StyledCardBody = styled.div`
   padding: 15px;
`;

const StyledRow = styled.div`
   display: flex;
   flex-wrap: wrap; 
   margin-right:-15px; 
   margin-left:-15px;  
   justify-content: center; // 여기 추가
`;

const StyledCol = styled.div`
   flex-basis :0 ;
   max-width :100% ;
   padding-right :15px ; 
   padding-left :15px ; 
   
    @media (min-width :576px) {
        flex :0 0 auto ;
        max-width :25% ; // 각 열이 차지하는 공간을 반응형으로 조절
     }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;



const Title = styled.h2`
  text-align: center;
`;

const Subtitle = styled.h6`
  text-align: center;
`;

const Spacer =styled.div`
    height: 4rem;
`;