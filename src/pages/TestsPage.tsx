import { Link, useParams } from 'react-router';
import { PageTitle } from '../components/PageTitle';
import styled from '@emotion/styled';


const TestList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const TestLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #f4f4f4;
  border-radius: 5px;
  color: #333;
  text-decoration: none;
  transition: 0.2s;
  width: 200px;

  &:hover {
    background-color: #ddd;
  }
`;

const TestHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const BackArrow = styled(Link)`
  color: #0e73f6;
  font-size: 28px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
  
  &:hover {
    color: #69a9fc;
  }
`;

const TestTitle = styled.h1`
  color: #0e73f6;
  font-size: 32px;
  margin: 0;
  font-weight: bold;
`;

const TestDescription = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 20px;
  max-width: 800px;
`;


export function TestsPage() {
  const tests = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'C#' },
    { id: 5, name: 'Go' },
    { id: 6, name: 'Rust' },
  ];

  return (
    <section>
      <PageTitle>Доступные тесты</PageTitle>
      <p>Выберите тест, чтобы начать.</p>
      
      <TestList>
        {tests.map((t) => (
          <li key={t.id}>
            <TestLink to={`/student/tests/${t.id}`}>{t.name}</TestLink>
          </li>
        ))}
      </TestList>
    </section>
  );
}


export function TestPage() {
  const { id } = useParams(); 

  return (
    <section>
      <TestHeader>
        <BackArrow to="/student/tests">←</BackArrow>
        <TestTitle>Тестирование №{id}</TestTitle>
      </TestHeader>
      
      <TestDescription>
        Описание тестирования длинный текст 
      </TestDescription>
    </section>
  );
}