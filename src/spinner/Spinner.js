import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import './Spinner.scss';

function Spinner() {
    return ( 
        <>
            <Loader
            className='Loader'
            type='Oval'
            color='#3d66ba'
            height={300}
            width={300}
            timeout={3000} />
        </>
    )
}

export default Spinner;