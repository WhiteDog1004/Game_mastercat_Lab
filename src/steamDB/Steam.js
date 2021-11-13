import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Steam.scss';

function Steam() {

    return (
        <>
            <div className='steamBox'>
                <img src='./imgs/SL_BG.png'></img>
                <iframe src="https://steamdb.info/embed/?appid=1352080" className='steamDB'></iframe>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip id='tooltip-bottom'>
                            폰유저를 제외한 데이터
                        </Tooltip>
                    }
                >
                    <span> 스팀 DB </span>
                </OverlayTrigger>
            </div>
        </>
    )
}

export default Steam;