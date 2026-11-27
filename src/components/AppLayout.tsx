import { Outlet, NavLink } from 'react-router';
import styled from '@emotion/styled';
import { TestIcon } from '../icons/TestIcon';
import { StatsIcon } from '../icons/StatsIcon';
import { ProfileIcon } from '../icons/ProfileIcon';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #fcfcfc;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px;
`;

const Logo = styled.h2`
  color: #0e73f6;
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  font-family: 'Arial Black', Impact, sans-serif;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #111318;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: #0e73f6;
    background-color: #e8f2ff;
  }
  
  &:hover {
    background-color: #f5faff;
    color: #69a9fc;
  }
`;

export function AppLayout() {
  return (
    <LayoutWrapper>
      <Aside>
        <Logo>ПАЗЛ & [КОД]</Logo>
        
        <StyledNavLink to="/student/tests">
          <Container><TestIcon /> Тестирования</Container>
        </StyledNavLink>

        <StyledNavLink to="/student/stats">
          <Container><StatsIcon /> Статистика</Container>
        </StyledNavLink>

        <StyledNavLink to="/student/profile">
          <Container><ProfileIcon /> Профиль</Container>
        </StyledNavLink>
      </Aside>

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
}