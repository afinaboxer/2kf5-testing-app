import { Link, Route, Routes, Navigate } from 'react-router';
import { AppLayout } from './components/AppLayout';
import { AdminLayout } from './components/AdminLayout';
import { AdminMainPage, AdminTestsPage, AdminUsersPage } from './pages/AdminPage';
import { ProfilePage } from './pages/ProfilePage';
import { TestPage, TestsPage } from './pages/TestsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <div style={{ padding: '10px', background: '#eee' }}>
        <Link to="/student">Студент</Link> | <Link to="/admin">Админ</Link>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/student" replace />} />

        <Route path="/student" element={<AppLayout />}> 
          <Route index element={<ProfilePage />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="tests/:id" element={<TestPage />} />
          <Route path="stats" element={<h3>Страница статистики</h3>} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}> 
          <Route index element={<AdminMainPage />} />
          <Route path="tests" element={<AdminTestsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;