import {
  CardContainer,
  LeftCornerCircle,
  PokeContainer,
  CardContent,
} from "./Card.styles";

import { ReactComponent as PokeBallSVG } from "../assets/svg/pokeball.svg";

export interface CardProps {
  color?: string;
  shadow?: string;
  bgColor?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <CardContainer shadow={props.shadow} bgColor={props.bgColor}>
      <LeftCornerCircle />
      <PokeContainer>
        <PokeBallSVG />
        <CardContent>{props.children}</CardContent>
      </PokeContainer>
    </CardContainer>
  );
};
