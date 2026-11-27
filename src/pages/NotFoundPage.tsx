import { Link } from 'react-router';
import { PageTitle } from '../components/PageTitle';

export function NotFoundPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <PageTitle>404 — Страница не найдена</PageTitle>
      <p style={{ marginBottom: '20px' }}>Такой страницы не существует.</p>
      <Link to="/student" style={{ color: '#0e73f6', textDecoration: 'underline', fontSize: '18px' }}>
        ← Вернуться на главную
      </Link>
    </div>
  );
}