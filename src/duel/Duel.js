import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from "@fortawesome/free-solid-svg-icons";
import './Duel.scss';

function Duel() {

    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let dayCheck = 0;

    let tt = 0;
    if (hour < 10) {
        tt = 9;
    } else {
        tt = 33;
    }

    let [timer, setTimer] = useState('다음 아레나까지 ' + (tt - hour) + '시간 ' + (59 - minute) + '분');


    // 2이면 심야
    // 1이면 석양
    // 0이면 낮

    console.log((day % 3));

    if (month === 11 || month === 12) {
        if (day % 3 === 0) {
            // 현재 심야
            // 전날 석양
            if (hour < 10) {
                dayCheck = 1;
            } else {
                dayCheck = 2;
            }
        } else if (2 === day % 3) {
            // 현재 석양
            // 전날 낮
            if (hour < 10) {
                dayCheck = 0;
            } else {
                dayCheck = 1;
            }
        } else {
            // 현재 낮
            // 전날 심야
            if (hour < 10) {
                dayCheck = 2;
            } else {
                dayCheck = 0;
            }
        }
    }

    useEffect(() => {
        if (dayCheck === 1) {
            let sync = document.querySelector('.sunsetFooter svg');
            sync.addEventListener('click', function () {
                today = new Date();
                hour = today.getHours();
                minute = today.getMinutes();
                if (hour < 10) {
                    tt = 9;
                } else {
                    tt = 33;
                }
                DayCheck();
                return setTimer('다음 아레나까지 ' + (tt - hour) + '시간 ' + (59 - minute) + '분');
            });
        } else if (dayCheck === 0) {
            let sync2 = document.querySelector('.afternoonFooter svg');
            sync2.addEventListener('click', function () {
                today = new Date();
                hour = today.getHours();
                minute = today.getMinutes();
                if (hour < 10) {
                    tt = 9;
                } else {
                    tt = 33;
                }
                DayCheck();
                return setTimer('다음 아레나까지 ' + (tt - hour) + '시간 ' + (59 - minute) + '분');
            });
        } else {
            let sync3 = document.querySelector('.nightFooter svg');
            sync3.addEventListener('click', function () {
                today = new Date();
                hour = today.getHours();
                minute = today.getMinutes();
                if (hour < 10) {
                    tt = 9;
                } else {
                    tt = 33;
                }
                DayCheck();
                return setTimer('다음 아레나까지 ' + (tt - hour) + '시간 ' + (59 - minute) + '분');
            });
        }
    }, []);

    // 2이면 심야
    // 1이면 석양
    // 0이면 낮
    return (
        <>
            {dayCheck === 1 ?
                <section className='duel'>
                    <div className='imgBox'>
                        <div>
                            <div className='allBox'>
                                <div className='sunsetBox'>
                                    <h1>결투</h1>
                                    <span>라푼젤의 무너진 탑 - 석양</span>
                                    <img src='./imgs/duel_icon.png'></img>
                                </div>
                                <img src='./imgs/duel_minimap_sunset.jpg'></img>
                                <div className='sunsetFooter'>
                                    <h2><FontAwesomeIcon icon={faSync} /> {timer}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src='./imgs/duel_map_sunset.jpg' className='sunsetImg'></img>
                </section>
                : (dayCheck === 0 ?
                    <section className='duel'>
                        <div className='imgBox'>
                            <div>
                                <div className='allBox'>
                                    <div className='afternoonBox'>
                                        <h1>결투</h1>
                                        <span>라푼젤의 무너진 탑 - 낮</span>
                                        <img src='./imgs/duel_icon.png'></img>
                                    </div>
                                    <img src='./imgs/duel_minimap.jpg'></img>
                                    <div className='afternoonFooter'>
                                        <h2><FontAwesomeIcon icon={faSync} /> {timer}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src='./imgs/duel_map_afternoon.jpg' className='afternoonImg'></img>
                    </section>
                    : <section className='duel'>
                        <div className='imgBox'>
                            <div>
                                <div className='allBox'>
                                    <div className='nightBox'>
                                        <h1>결투</h1>
                                        <span>라푼젤의 무너진 탑 - 심야</span>
                                        <img src='./imgs/duel_icon.png'></img>
                                    </div>
                                    <img src='./imgs/duel_minimap_night.jpg'></img>
                                    <div className='nightFooter'>
                                        <h2><FontAwesomeIcon icon={faSync} /> {timer}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src='./imgs/duel_map_night.jpg' className='nightImg'></img>
                    </section>
                )
            }
        </>
    )
}

function DayCheck() {
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let dayCheck = 0;

    if (month === 11 || month === 12) {
        if (day % 3 === 0) {
            // 현재 심야
            // 전날 석양
            if (hour < 10) {
                dayCheck = 1;
            } else {
                dayCheck = 2;
            }
        } else if (2 === day % 3) {
            // 현재 석양
            // 전날 낮
            if (hour < 10) {
                dayCheck = 0;
            } else {
                dayCheck = 1;
            }
        } else {
            // 현재 낮
            // 전날 심야
            if (hour < 10) {
                dayCheck = 2;
            } else {
                dayCheck = 0;
            }
        }
    }
}

export default Duel;