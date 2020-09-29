import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Menu() {
  return (
      <>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/main">Main</Link></li>
              <li><Link to="/quemsomos">Quem somos...</Link></li>
              <li><Link to="/ajuda">Ajuda</Link></li>
            
          </ul>
      </nav>
      <hr />
      </>
    );
}