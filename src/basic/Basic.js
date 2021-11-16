import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './Basic.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



function Basic() {


    // 리사이즈 될때마다 다시 좌표값 구함
    useEffect(() => {
        let basic = document.querySelector('.duelBasic');
        let duelCombo = document.querySelector('.duelCombo');
        let bodyHeight = document.querySelector('body').clientHeight;

        duelCombo.addEventListener('click', () => {
            bodyHeight = document.querySelector('body').clientHeight;
            window.scrollTo({
                top: bodyHeight / 2,
                behavior: 'smooth'
            });
        });
        basic.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }, [])

    // 스크롤 될때마다 실행
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let basic = document.querySelector('.duelBasic');
            if (basic !== null) {
                let y = window.scrollY;
                let navBox = document.querySelector('.navBox');
                let basic = document.querySelector('.duelBasic');
                let duelCombo = document.querySelector('.duelCombo');

                if (y >= 500) {
                    basic.classList.remove('on');
                    duelCombo.classList.add('on');
                } else if (y < 500) {

                    duelCombo.classList.remove('on');
                    basic.classList.add('on');
                }
                if (y > 1100) {
                    duelCombo.classList.remove('on');
                    basic.classList.remove('on');

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
                                <Nav.Link className='duelBasic on'>결투기본</Nav.Link>
                                <Nav.Link className='duelCombo'>결투콤보</Nav.Link>
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

            <section className='basicBox'>
                <img src='./imgs/lobby.png'></img>
                <div className='duelBasicBox'>
                    <div>
                        <h1>결투의 기본</h1>
                        <ul className="duelBasicUl">
                            <li>
                                <ul>
                                    <h3>1. 캐릭터들의 기술들을 이해한다</h3>
                                    <li>
                                        <span>어느 게임을 하나 pvp에서 제일 중요한 것이 캐릭터들의 기술들을 알아야 하는 것이다<br />
                                              아직 캐릭터들의 기술들을 잘 모른다 싶으면 캐릭터 하나씩 체험하거나 많이 맞아보자
                                        </span>
                                        <p>모르나요? 모르면 맞아야죠! - Nin</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <h3>2. 상대의 패턴을 파악하며 천천히 진입하고, 압박한다</h3>
                                    <li>
                                        <span>pvp에서는 상대가 이 다음 어떤 플레이를 할지 생각하며 플레이를 해야한다<br />
                                              그것을 파악하고 압박하여 주도권을 가져가는 것이 핵심.
                                        </span>
                                        <p>지는게 상관없다면 무지성 플레이하세요 - 늑대개</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <h3>3. 상대의 실수를 유도한다</h3>
                                    <li>
                                        <span>마스터캣의 장점인 스킬, 이동속도를 이용한 플레이로 상대의 공격을 유도한다.<br />
                                              상대가 눈치채고 공격을 하지 않는다면, 2번처럼 천천히 압박하여 공격할 수 밖에 없게 만들자
                                        </span>
                                        <p>현명한 사람은 기회를 찾지 않고, 기회를 창조한다 - 프란시스  베이컨</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='duelCombo'>
                <div className='duelComboBox'>
                    <img src='./imgs/masterCat_01.png' className='masterCatImg'></img>
                </div>
            </section>
        </>
    )
}


export default Basic;