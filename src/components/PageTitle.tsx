import styled from '@emotion/styled';

const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #111318;
`;

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <StyledTitle>{children}</StyledTitle>;
}