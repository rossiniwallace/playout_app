import {BackButton, BackIcon, Container, Logo} from "./styled";

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}:Props){
    return (
      <Container>
          {
              showBackButton &&
              <BackButton>
                  <BackIcon />
              </BackButton>
          }
      </Container>
    );
}