import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const DropdownLinkSubItem = styled(Link)`
  // background: #414757;
  height: 32px;
  padding: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  justify-content: flex-end;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [showsubnavItem, setShowsubnavItem] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const onClickHandler = () => {
    setShowsubnavItem((show) => !show)
  }
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div >
              <DropdownLink to={item.path} key={index} onClick={onClickHandler}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
              {showsubnavItem ? item?.subNav1 &&
                item?.subNav1.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null}
               {showsubnavItem ? item?.subNav2 &&
                item?.subNav2.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null}  
                {showsubnavItem ? item?.subNav3 &&
                item?.subNav3.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null}  
                {showsubnavItem ? item?.subNav4 &&
                item?.subNav4.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null} 
                {showsubnavItem ? item?.subNav5 &&
                item?.subNav5.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null}  
                {showsubnavItem ? item?.subNav6 &&
                item?.subNav6.map((subItem) => (
                  <DropdownLinkSubItem to={item.path} key={index}>
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLinkSubItem>
                )): null}
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;