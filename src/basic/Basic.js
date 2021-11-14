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
                <svg id="visual" viewBox="0 0 100 600" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#291c6e"></rect><g filter="url(#blur1)"><circle cx="716" cy="470" fill="#563fc7" r="357"></circle><circle cx="88" cy="84" fill="#291c6e" r="357"></circle><circle cx="441" cy="95" fill="#563fc7" r="357"></circle><circle cx="409" cy="477" fill="#563fc7" r="357"></circle><circle cx="835" cy="254" fill="#291c6e" r="357"></circle><circle cx="228" cy="377" fill="#563fc7" r="357"></circle></g></svg>
                <div className='duelBasicBox'>
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