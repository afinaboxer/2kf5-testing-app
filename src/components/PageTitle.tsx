import styled from '@emotion/styled';

const StyledTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #111318;
`;

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <StyledTitle>{children}</StyledTitle>;
}