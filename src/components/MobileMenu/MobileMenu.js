/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" color={COLORS.gray[900]} size={24} />
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled(DialogContent)`
  background: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: 32px;
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 24px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  bottom: 32px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default MobileMenu;
