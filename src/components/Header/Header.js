import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <DesktopNavLink href="/sale">Sale</DesktopNavLink>
          <DesktopNavLink href="/new">New&nbsp;Releases</DesktopNavLink>
          <DesktopNavLink href="/men">Men</DesktopNavLink>
          <DesktopNavLink href="/women">Women</DesktopNavLink>
          <DesktopNavLink href="/kids">Kids</DesktopNavLink>
          <DesktopNavLink href="/collections">Collections</DesktopNavLink>
          <MobileNavLink href="/sale" aria-label="Sale">
            <Icon id="shopping-bag" color={COLORS.gray[900]} size={24} />
          </MobileNavLink>
          <MobileNavButton aria-label="Search">
            <Icon id="search" color={COLORS.gray[900]} size={24} />
          </MobileNavButton>

          <MobileNavButton
            aria-label="Open menu"
            onClick={() => setShowMobileMenu(true)}
          >
            <Icon id="menu" color={COLORS.gray[900]} size={24} />
          </MobileNavButton>
        </Nav>
        <RightSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    gap: 34px;
    margin: 0;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 17px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const RightSide = styled(Side)`
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const DesktopNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: initial;
  }
`;

const MobileNavButton = styled(UnstyledButton).attrs({ as: "button" })`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: initial;
  }
`;

export default Header;
