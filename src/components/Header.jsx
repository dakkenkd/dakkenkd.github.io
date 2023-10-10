import "./Header.css";
import React from 'react';
import {HamburgerMenu} from './HamburgerMenu';


export const Header = () => {
    return (
    <header>
      <div className="pc header-div">
          <ul class="nav-left">
            <li><a href="./">HOME</a></li>
            <li><a href="./">WORKS</a></li>
            <li><a href="./">BLOGS</a></li>
          </ul>
      </div>
      <div className="pc nav-right">
        <ul>
          <li><a href="https://twitter.com/tttyama1030">Twitter</a></li>
          <li><a href="https://qiita.com/dakkenkd425">Qiita</a></li>
          <li><a href="https://github.com/dakkenkd">GitHub</a></li>
        </ul>
      </div>
      <HamburgerMenu />
    </header>
    );
  }
