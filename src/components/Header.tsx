import styled from "styled-components";

const StyledHeader = styled.h2`
  color: #2563eb;
  font-weight: 700;
  margin-bottom: 1.2rem;
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
`;

export default function Header({ children }: { children: string }) {
  return <StyledHeader>{children}</StyledHeader>;
}