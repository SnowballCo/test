import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const H = 55-StatusBarHeight;

const BackButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  marginTop: ${H}px;
`;

export default BackButton;