import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import './Main.scss';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import Duel from '../duel/Duel.js';
import Steam from '../steamDB/Steam.js';

import { Link, Route, Switch } from 'react-router-dom';

function Main() {
    
    useEffect(() => {
        const test = document.querySelectorAll('.inBoxTextBox div img');
        const testBg = document.querySelector('.movieInBox');

        test.forEach(function (el) {
            el.addEventListener('mouseover', () => {
                testBg.classList.add('on');
            });
            el.addEventListener('mouseleave', () => {
                testBg.classList.remove('on');
            });

        })
    })

    // 리사이즈 될때마다 다시 좌표값 구함
    useEffect(() => {
        let home = document.querySelector('.home');
        let rotation = document.querySelector('.rotation');
        let steam = document.querySelector('.steam');
        let duelHeight = document.querySelector('body').clientHeight;

        rotation.addEventListener('click', () => {
            duelHeight = document.querySelector('body').clientHeight;
            window.scrollTo({
                top: duelHeight / 3,
                behavior: 'smooth'
            });
        });
        home.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        steam.addEventListener('click', () => {
            duelHeight = document.querySelector('body').clientHeight;
            window.scrollTo({
                top: duelHeight / 1,
                behavior: 'smooth'
            });
        });
    }, [])

    // 스크롤 될때마다 실행
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let home = document.querySelector('.home');
            if(home !== null){
                let y = window.scrollY;
                let navBox = document.querySelector('.navBox');
                let home = document.querySelector('.home');
                let rotation = document.querySelector('.rotation');
                let steam = document.querySelector('.steam');
    
                if (y >= 500) {
                    steam.classList.remove('on');
                    home.classList.remove('on');
                    rotation.classList.add('on');
                } else if (y < 500) {
                    steam.classList.remove('on');
                    rotation.classList.remove('on');
                    home.classList.add('on');
                }
                if (y > 1100) {
                    rotation.classList.remove('on');
                    home.classList.remove('on');
                    steam.classList.add('on');
                }
    
                if (y >= 100) {
                    navBox.classList.add('on');
                } else {
                    navBox.classList.remove('on');
                }

            }
        })
    }, [])

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="none" variant="dark" fixed="top" className='navBox'>
                    <Container>
                        <Navbar.Brand href="#" className='header_h1'><img src='./imgs/duel_icon.png' className='header_icon' />마스터캣 연구소</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto headerText">
                                <Nav.Link as={Link} to='/' className='home on'>홈</Nav.Link>
                                <Nav.Link as={Link} to='/' className='rotation'>맵로테이션</Nav.Link>
                                <Nav.Link as={Link} to='/' className='steam'>SteamDB</Nav.Link>
                                <NavDropdown title="공략" id="basic-nav-dropdown" className='dropdown_Box'>
                                    <NavDropdown.Item as={Link} to='/ability'><strong>재능</strong></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to='/basic'><strong>결투기본</strong></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/basic' className='miniTag'>콤보</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/basic' className='miniTag'>운영</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><strong>캐릭터별 상대법</strong></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className='movieBox'>
                <video src='./imgs/mastercatMovie.mp4' autoPlay loop muted />
                <div className='movieInBox'>
                    <div className='inBoxTextBox'>
                        <h1>마스터캣 연구소</h1>
                        <img src='./imgs/wolf.png' className='wolf' />
                        <span>공략 및 홈페이지 제작</span>
                        <h2><FontAwesomeIcon icon={faArrowDown} /> 마스터캣 공략</h2>
                        <div>
                            <Link to="/ability">
                                <img src='./imgs/main_00.png' />
                            </Link>
                            <Link to="/basic">
                            <img src='./imgs/main_01.png' />
                            </Link>
                            <img src='./imgs/main_02.png' />
                        </div>
                    </div>
                    <img src='./imgs/masterCat_01.png' className='inBoxMasterCat' />
                </div>
            </div>

            <Duel />
            <Steam />
        </>
    )
}

export default Main;