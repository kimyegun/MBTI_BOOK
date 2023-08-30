import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom'
import logo from '../../assets/mbti/logo.png';


const Header = ({user, onLogout}) => {
    return (
        <>
          <HeaderBlock>
            <Wrapper>
                <Link to="/" className="logo">
                <img src={logo} alt='sad' width = 'auto'/>
                 
                </Link>
                {user ? (
                <div className='right'>
                    <UserInfo>{user.username}</UserInfo>
                    <Button to="/chat">채팅</Button>
                    <Button to="/home">MBTI Test</Button> 
                    <Button onClick={onLogout}>로그아웃</Button>
                </div>
                ) : (
                    <div className='right'>
                    
                    <Button to="/login">로그인</Button>
                </div>
                )}
            </Wrapper>
          </HeaderBlock>
          <Spacer/>
        </>
    );
};

export default Header;


const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
    height: 6rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */ /* 이 줄을 주석 처리하거나 삭제 */
    .logo {
        width: 80%;
        font-size: 4rem;
        font-weight: 800;
        letter-spacing: 2px;
        text-align: left; /* 텍스트 정렬을 왼쪽으로 변경 */
        margin-right: auto; /* 오른쪽으로부터의 간격을 최대로 설정 */
        margin-left: -15rem; /* 로고를 왼쪽으로 추가 이동 */
        img {
            width: 200px; /* 로고 이미지의 너비 설정 */
            height: auto; /* 높이는 자동으로 조정 */
        }
    }
    .center{
        display:flex;
        justify-items:center;

    }

   .right {
      display:flex;
      align-items:center;

   }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer =styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;