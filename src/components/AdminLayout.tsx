import { Outlet } from 'react-router';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 280px;
  background-color: #f4f4f4;
  border-right: 2px solid #ccc;
  padding: 20px;

  @media (max-width: 600px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #ccc;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

export function AdminLayout() {
  return (
    <Wrapper>
      <Sidebar>
        <h2>Панель администратора</h2>
        <p>Текстовая заглушка для будущей навигации.</p>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}