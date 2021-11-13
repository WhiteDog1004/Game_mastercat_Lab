import './App.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-solid-svg-icons";

import Spinner from './spinner/Spinner.js';
import Main from './main/Main.js';
import Ability from './ability/Ability.js';
import Basic from './basic/Basic.js';
import './header/Header.scss';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      { loading ? <Spinner /> :
        <div>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <Route exact path='/ability'>
              <Ability />
            </Route>

            <Route exact path='/basic'>
              <Basic />
            </Route>

          </Switch>
        </div>
      }
    </>
  );

}

export default App;
