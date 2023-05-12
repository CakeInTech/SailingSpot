import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../css/sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <SideNav 
      onSelect={(selected) => {
        navigate(selected)
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="/">
          <NavIcon><i className='bi bi-house-door-fill' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="/reserve">
          <NavIcon><i className='bi bi-building-fill-add' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>Reserve</NavText>
        </NavItem>
        <NavItem eventKey="/my-reservations">
          <NavIcon><i className='bi bi-view-list' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>My reservations</NavText>
        </NavItem>
        <NavItem eventKey="/add-boat">
          <NavIcon><i className='bi bi-plus-square-fill' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>Add boat</NavText>
        </NavItem>
        <NavItem eventKey="/delete-boat">
          <NavIcon><i className='bi bi-trash-fill' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>Delete boat</NavText>
        </NavItem>
        <NavItem eventKey="/log-out">
          <NavIcon><i className='bi bi-door-open-fill' style={{ fontSize: "1.5em" }} /></NavIcon>
          <NavText>Log out</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidebar;