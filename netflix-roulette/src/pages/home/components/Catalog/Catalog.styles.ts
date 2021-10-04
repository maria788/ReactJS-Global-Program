import styled from "styled-components";

export const CatalogContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid ${(props) => props.theme.palette.grey};
  text-transform: uppercase;
`;
