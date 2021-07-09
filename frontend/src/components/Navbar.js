import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box borderBottom="1px solid #c2c0bc">
        <div className="container-fluid nav_bg">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        as={RouterLink}
                        className="nav-link"
                        to="/alluser"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        ALL USER
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        as={RouterLink}
                        className="nav-link"
                        to="/adduser"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        ADD USER
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
