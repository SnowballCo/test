import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const H = 235-StatusBarHeight;

const TopContainer = styled.View`
  background-color: #ffffff;
  height: ${H}px;
`;

export default TopContainer;