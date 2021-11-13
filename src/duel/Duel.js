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

    if ( month === 1 || month === 2 || month === 3 || month === 6 || month === 7 || month === 9 || month === 10) {
        if (day % 2 === 0) {
            // 짝수일
            if(hour < 10){
                dayCheck = 1;
            } else {
            dayCheck = 0;
            }
        } else if (day % 2 === 1) {
            // 홀수일
            if(hour < 10){
                dayCheck = 0;
            } else {
            dayCheck = 1;
            }
        }
    }
    if ( month === 4 || month === 5 || month === 8 || month === 11 || month === 12) {
        if (day % 2 === 0) {
            // 짝수일
            if(hour < 10){
                dayCheck = 0;
            } else {
            dayCheck = 1;
            }
        } else if (day % 2 === 1) {
            // 홀수일
            if(hour < 10){
                dayCheck = 1;
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
        } else {
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
        }
    }, []);


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
                : <section className='duel'>
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

    if ( month === 1 || month === 2 || month === 3 || month === 6 || month === 7 || month === 9 || month === 10) {
        if (day % 2 === 0) {
            // 짝수일
            // 낮 맵이 나와야함
            if(hour < 10){
                dayCheck = 1;
            } else {
            dayCheck = 0;
            }
        } else if (day % 2 === 1) {
            // 홀수일
            if(hour < 10){
                dayCheck = 0;
            } else {
            dayCheck = 1;
            }
        }
    }
    if ( month === 4 || month === 5 || month === 8 || month === 11 || month === 12) {
        if (day % 2 === 0) {
            // 짝수일
            // 석양
            if(hour < 10){
                dayCheck = 0;
            } else {
            dayCheck = 1;
            }
        } else if (day % 2 === 1) {
            // 홀수일
            // 낮
            if(hour < 10){
                dayCheck = 1;
            } else {
            dayCheck = 0;
            }
        }
    }
}

export default Duel;