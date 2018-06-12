import * as React from "react";
import styled from "styled-components";

interface IProps {
  className: string;
  coolTextColor: string;
}

const BaseContainer: React.SFC<IProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledBase = styled.div`
  color: ${props => props.coolTextColor};
`;

export default StyledBase;
