import React from 'react'
import { Nav,Navbar,Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const dispatch = useDispatch()
  const {userInfo}= userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>    
        <Navbar bg="dark" variant='light' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to={'/'}>
                <Navbar.Brand><strong>🇹🇹 Trini Treasures 🇹🇹</strong></Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  <LinkContainer to={'/jewelry'}>
                    <Nav.Link> Jewelry</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/paintings'}>
                    <Nav.Link> Paintings</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/about'}>
                    <Nav.Link> About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/cart'}>
                    <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                  </LinkContainer>
                  {userInfo ? ( 
                  <NavDropdown title ={userInfo.name} id = 'username'>
                    <LinkContainer to = '/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                  ):<LinkContainer to={'/login'}>
                      <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
                    </LinkContainer>}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header