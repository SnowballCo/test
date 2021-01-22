import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const H = 212-StatusBarHeight;

const TopContainer = styled.View`
  background-color: #ffffff;
  height: ${H}px;
  paddingLeft:20px;
`;

export default TopContainer;