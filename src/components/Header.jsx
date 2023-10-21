import React from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsSearch,
  BsBrightnessHighFill,
} from 'react-icons/bs';
import {GoSignOut} from 'react-icons/go';
function Header({OpenSidebar}) {
  return (
    <header className="header">
      <div class="col-sm-6 custom-border custom-container">
        <h3> Welcom back, Username!</h3>
      </div>
      <div className="header-left">
        <h2>
          17:01<small>min left</small>
        </h2>
      </div>
      <div className="header-left">
        <h2>
          A<small>.-------.A</small>
        </h2>
      </div>
      <div className="header-right">
        <BsBrightnessHighFill className="icon" />

        <BsFillEnvelopeFill className="icon" />
        <GoSignOut className="icon" />
      </div>
      <div>
        <button class="btn btn-button">Signout</button>
      </div>
    </header>
  );
}

export default Header;
