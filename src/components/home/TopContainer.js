import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const H = 235-StatusBarHeight;

const TopContainer = styled.View`
  background-color: #f6f6f6;
  height: ${H}px;
`;

export default TopContainer;