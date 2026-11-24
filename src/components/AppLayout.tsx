import { Outlet } from 'react-router';
import { NavLink } from 'react-router';  
import '../App.css'  
import styled from '@emotion/styled';
import { TestIcon } from '../icons/TestIcon';

const Aside = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Container = styled.div`
    display: flex;
    aling-items: center;
    gap: 10px;
    padding: 10px;
`;

export function AppLayout() {
  return (
    <div>
      <header>  
        <Aside>
          <NavLink
            to="/app/tests"
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Container>
              <TestIcon /> Тестирования
            </Container>
          </NavLink>
          <NavLink
            to="/app/stats"
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Container>
              <TestIcon /> Статистика
            </Container>
          </NavLink>
          <NavLink
            to="/app/profile"
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Container>
              <TestIcon /> Профиль
            </Container>
          </NavLink>
        </Aside>
      </header>

      
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}