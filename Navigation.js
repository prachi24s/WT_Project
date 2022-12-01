import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

export default function Navigation(){
        return (
          <>
            <div>
          <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Pet Care Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Navigation/Home">Home</Nav.Link>
            <Nav.Link href="/Navigation/About">About</Nav.Link>
            <Nav.Link href="/Navigation/NewsFeed">NewsFeed</Nav.Link>
            <Nav.Link href="/Navigation/PetServices">PetServices</Nav.Link>
          </Nav>
        </Container>
         </Navbar>

            </div>
            <Outlet />
            </>
        )
      }