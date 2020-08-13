import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='ElCyclone' />
      <UserRow nickname='mariows2' />
      <UserRow nickname='NathanLuch' />
      <UserRow nickname='Fernandinho' />
      <UserRow nickname='FSainovich' />
      <UserRow nickname='drsimm' />
      <UserRow nickname='Buffon' />
      <UserRow nickname='Hans' />
      <UserRow nickname='Veiga' />

      <Role>Offline - 1</Role>
      <UserRow nickname='fLpk_BR' isBot />
    </Container>
  );
};
export default UserList;
