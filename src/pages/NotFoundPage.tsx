import { PageTitle } from "../components/PageTitle";

export function NotFoundPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <PageTitle>404 — Страница не найдена</PageTitle>
      <p>Такой страницы не существует.</p>
    </div>
  );
}