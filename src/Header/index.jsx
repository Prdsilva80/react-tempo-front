import { Container, Title } from './styles';
import { LiaBinocularsSolid } from "react-icons/lia";

const Header = () => {
    return (
        <Container>
            <LiaBinocularsSolid />
            <Title>Vigia do Tempo</Title>
            <LiaBinocularsSolid />
        </Container>
    );
};

export default Header;
