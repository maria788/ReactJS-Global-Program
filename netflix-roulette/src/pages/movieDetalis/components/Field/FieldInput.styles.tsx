import styled from "styled-components";

export const FieldInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${({ isWide }: { isWide: boolean }) => (isWide ? `525px` : `300px`)};
  border: 1px solid rgba(50, 50, 50, 0.948044);
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: rgba(50, 50, 50, 0.948044);
  color: ${(props) => props.theme.palette.white};

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.white};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 13px;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.red};
`;

export const TextArea = styled.textarea`
  border: 1px solid rgba(50, 50, 50, 0.948044);
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  padding: 10px 20px;
  resize: none;
  background-color: rgba(50, 50, 50, 0.948044);
  color: ${(props) => props.theme.palette.white};

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.white};
  }
`;

export const Select = styled.select`
  height: auto;
  border: 1px solid rgba(50, 50, 50, 0.948044);
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  padding: 10px 20px;
  resize: none;
  background-color: rgba(50, 50, 50, 0.948044);
  color: ${(props) => props.theme.palette.white};

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.white};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 12px;
  color: ${(props) => props.theme.palette.red};
`;
