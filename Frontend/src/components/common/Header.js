import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom'
import logo from '../../assets/mbti/logo.png';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';


const Header = ({user, onLogout}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleUserClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
          <HeaderBlock>
            <Wrapper>
                <Link to="/main" className="logo">
                <img src={logo} alt='sad' width = 'auto'/>
                </Link>
                <Navigation>  
            <NavLink to="/main">소개글</NavLink>     
            <NavLink to="/">커뮤니티 게시판</NavLink>
            <NavLink to="/chat">채팅</NavLink>
            <NavLink to="/home">MBTI Test</NavLink>                  
          </Navigation>
                  
                {user ? (
          <UserBlock>
            <UserInfo onClick={handleUserClick}>{user.username}</UserInfo>
            {isDropdownOpen && (
              <DropdownMenu>
                <Link onClick={onLogout}>로그아웃</Link>
              </DropdownMenu>
            )}
          </UserBlock>
        ) : (
          <div className="right">
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

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5rem; /* 오른쪽 마진을 조절하여 Navigation 간격 조절 */
`;

const NavLink = styled(Link)`
display: flex;
align-items: center; /* 텍스트를 수직 중앙에 배치 */
margin-right:5rem; /* 오른쪽 마진을 조절하여 NavLink 간격 조절 */
white-space: nowrap; /* 텍스트를 한 줄로 출력 */
font-size: 1.2rem;
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;


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
        width: 100%;
        font-size: 4rem;
        font-weight: 800;
        letter-spacing: 2px;
        text-align: left; /* 텍스트 정렬을 왼쪽으로 변경 */
        margin-right: 2rem; /* 오른쪽으로부터의 간격을 최대로 설정 */
        margin-left: -12rem; /* 로고를 왼쪽으로 추가 이동 */
        img {
            width: 200px; /* 로고 이미지의 너비 설정 */
            height: auto; /* 높이는 자동으로 조정 */
            margin-top: 15px; /* 로고를 약간 아래로 내림 */
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
    width: 100%; /* 컨테이너의 너비를 최대로 설정 */
    font-weight: 800;
    margin-left: 450px;
    display: flex; 
    justify-content: flex-end; /* 컨텐츠를 오른쪽으로 정렬 */
`;


const DropdownMenu = styled.div`
   position: absolute;
   top: calc(100% + .5em);
   right: .5em;
   background-color: white;
   box-shadow: rgba(0,0,0,.1) -2px -2px inset, rgba(0,0,0,.1) -2px -2px,
               rgba(0,0,0,.1) -4px -4px inset,
               rgba(255,255,255,.5) -4px -4px inset,
               rgba(255,255,255,.5) -4px -4px;
   border-radius: .5em;
   padding: .5em;

   a {
     display:block;
     padding:.5em;

   
   }
`;