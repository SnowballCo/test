import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const MT = 75-StatusBarHeight;

const LogContainer = styled.View`
  width: 210px;
  height: 50px;
  marginLeft: 20px;
  marginTop: ${MT}px;
  backgroundColor: #000;
`;

export default LogContainer;