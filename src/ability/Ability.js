import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './Ability.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Ability() {

    let [ab1, setAb1] = useState(['16%', '24%', '32%']);
    let [ab2, setAb2] = useState(['6% / 12% / 18%']);
    let [ab3, setAb3] = useState(['8%']);
    let [ab4, setAb4] = useState(['8%']);
    let [ab4_2, setAb4_2] = useState(['10%']);
    let [ab5, setAb5] = useState(['24%']);

    // 리사이즈 될때마다 다시 좌표값 구함
    useEffect(() => {
        let guide = document.querySelector('.guide');
        let recommend = document.querySelector('.recommend');
        let bodyHeight = document.querySelector('body').clientHeight;

        recommend.addEventListener('click', () => {
            bodyHeight = document.querySelector('body').clientHeight;
            window.scrollTo({
                top: bodyHeight / 2,
                behavior: 'smooth'
            });
        });
        guide.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }, [])

    // 스크롤 될때마다 실행
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let guide = document.querySelector('.guide');
            if (guide !== null) {
                let y = window.scrollY;
                let navBox = document.querySelector('.navBox');
                let guide = document.querySelector('.guide');
                let recommend = document.querySelector('.recommend');

                if (y >= 500) {

                    guide.classList.remove('on');
                    recommend.classList.add('on');
                } else if (y < 500) {

                    recommend.classList.remove('on');
                    guide.classList.add('on');
                }
                if (y > 1100) {
                    recommend.classList.remove('on');
                    guide.classList.remove('on');

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
                                <Nav.Link className='guide on'>재능설명</Nav.Link>
                                <Nav.Link className='recommend'>재능추천</Nav.Link>
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
            <section className='abilityBox'>
                <div className='guideBox'>
                    <img src='./imgs/masterCat_01.png' className='masterCatImg'></img>
                    <ul>
                        <li>
                            <article>
                                <img src='./imgs/masterCat/cat_01.png'></img>
                                <div>
                                    <h3>격노</h3>
                                    <span>체력이 50% 이하일 때 모든 공격의 피해량이 <strong>{ab1[0]}</strong> 증가합니다.</span>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src='./imgs/masterCat/cat_02.png'></img>
                                <div>
                                    <h3>정신집중</h3>
                                    <span>궁극기 사용에 필요한 자원 중첩 수에 따라 모든 공격의 피해량이 <strong>{ab2[0]}</strong> 증가합니다.</span>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src='./imgs/masterCat/cat_03.png'></img>
                                <div>
                                    <h3>신속한 발걸음</h3>
                                    <span>궁극기 사용에 필요한 자원 유지시간이 3.5초로 증가하며, 궁극기 사용이 가능할 때 증가하는 이동속도가 <strong>{ab3[0]}</strong> 추가로 상승합니다.</span>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src='./imgs/masterCat/cat_04.png'></img>
                                <div>
                                    <h3>기민한 몸놀림</h3>
                                    <span>궁극기 사용 후, 10초동안 이동속도가 <strong>{ab4[0]}</strong>만큼 증가하고 모든 공격의 피해량이 <strong>{ab4_2[0]}</strong> 증가합니다.</span>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src='./imgs/masterCat/cat_05.png'></img>
                                <div>
                                    <h3>일순천격</h3>
                                    <span>궁극기의 피해량이 <strong>{ab5[0]}</strong> 증가합니다.</span>
                                </div>
                            </article>
                        </li>
                        <li className='levelBtn'>
                            <div className='on' onClick={() => {
                                let level = document.querySelectorAll('.levelBtn div');
                                level.forEach(el => {
                                    el.classList.remove('on');
                                });
                                level[0].classList.add('on');

                                // 1레벨 재능
                                setAb1(['16%']); // 격노 1번
                                setAb2(['6% / 12% / 18%']); // 정신집중 2번
                                setAb3(['8%']); // 신속한 발걸음 3번
                                setAb4(['8%']); // 기민한 몸놀림 4번
                                setAb4_2(['10%']); // 기민한 몸놀림 4_2번
                                setAb5(['24%']); // 일순천격 희귀재능 5번
                            }}>1레벨</div>
                            <div onClick={() => {
                                let level = document.querySelectorAll('.levelBtn div');
                                level.forEach(el => {
                                    el.classList.remove('on');
                                });
                                level[1].classList.add('on');

                                // 2레벨 재능
                                setAb1(['24%']);
                                setAb2(['9% / 18% / 27%']);
                                setAb3(['12%']);
                                setAb4(['12%']);
                                setAb4_2(['15%']);
                                setAb5(['36%']);
                            }}>2레벨</div>
                            <div onClick={() => {
                                let level = document.querySelectorAll('.levelBtn div');
                                level.forEach(el => {
                                    el.classList.remove('on');
                                });
                                level[2].classList.add('on');

                                // 3레벨 재능
                                setAb1(['32%']);
                                setAb2(['12% / 24% / 36%']);
                                setAb3(['16%']);
                                setAb4(['16%']);
                                setAb4_2(['20%']);
                                setAb5(['48%']);
                            }}>3레벨</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='recommendBox'>
                <div className='tier'>
                    <img src='./imgs/masterCat_01.png' className='masterCatImg'></img>
                    <h1>재능 이미지에 마우스를 올리면 설명도 있음</h1>
                    <div className='tier_01'>
                        <h2>1티어</h2>
                        <div>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        <strong>격노</strong><br />
                                        중첩쌓고 압박 플레이를 하면
                                        상황을 주도할 수 있어 좋음
                                    </Tooltip>
                                }
                            >
                                <img src='./imgs/masterCat/cat_02.png' />
                            </OverlayTrigger>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        <strong>신속한 발걸음</strong><br />
                                        궁 유지시간 늘고, 이속 증가? 이걸 왜 안씀?
                                    </Tooltip>
                                }
                            >
                                <img src='./imgs/masterCat/cat_03.png' />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className='tier_02'>
                        <h2>2티어</h2>
                        <div>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        <strong>정신집중</strong><br />
                                        중첩 쌓는 게 어렵지 않아서 <br />정신집중이 훨 좋은듯
                                    </Tooltip>
                                }
                            >
                                <img src='./imgs/masterCat/cat_01.png' />
                            </OverlayTrigger>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        <strong>일순천격</strong><br />
                                        상향먹고 데미지가 좋아져서 <br /> 나쁘지 않은듯??
                                    </Tooltip>
                                }
                            >
                                <img src='./imgs/masterCat/cat_05.png' />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className='tier_03'>
                        <h2>왜씀</h2>
                        <div>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        <strong>기민한 몸놀림</strong><br />
                                        ㅋㅋ
                                    </Tooltip>
                                }
                            >
                                <img src='./imgs/masterCat/cat_04.png' />
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Ability;