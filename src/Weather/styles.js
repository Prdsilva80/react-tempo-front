import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: ${props => (props.hasError ? '2px solid red' : '1px solid #ccc')};
`;

export const Select = styled.select`
  padding: 8px;
  margin-right: 8px;
  border: ${props => (props.hasError ? '2px solid red' : '1px solid #ccc')};
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => (props.disabled ? '#cccccc' : '#007bff')};
  color: ${props => (props.disabled ? '#666666' : '#fff')};
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const WeatherDayContainer = styled.div`
  display: inline-flex;
  margin-top: 20px;
  background-color: #f7f8f7;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
`;

export const WeatherDay = styled.div`
  margin-bottom: 20px;
`;

export const MaxTemp = styled.span`
  color: red;
  font-size: 1.2em; // Tamanho maior para destaque
`;

export const MinTemp = styled.span`
  color: blue;
  font-size: 1.2em; // Tamanho maior para destaque
`;

export const ChanceOfRain = styled.span`
  color: gray;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold; // Estilo para destacar a mensagem de erro
`;

export const LoadingMessage = styled.div`
  color: #007bff;
  font-weight: bold; // Destacar a mensagem de carregamento
  margin-top: 10px;
`;
