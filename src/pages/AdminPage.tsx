import { PageTitle } from '../components/PageTitle';

export function AdminMainPage() {
  return (
    <div>
      <PageTitle>Главная страница администратора</PageTitle>
      <p>Добро пожаловать в панель администратора. Здесь вы можете управлять тестами и пользователями.</p>
    </div>
  );
}

export function AdminTestsPage() {
  return (
    <div>
      <PageTitle>Управление тестированиями</PageTitle>
      <p>Здесь вы можете создавать, редактировать и удалять тесты.</p>
    </div>
  );
}

export function AdminUsersPage() {
  return (
    <div>
      <PageTitle>Управление пользователями</PageTitle>
      <p>Здесь вы можете просматривать список пользователей и управлять их правами.</p>
    </div>
  );
}