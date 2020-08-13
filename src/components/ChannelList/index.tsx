import React from "react";

import { Container, Category, AddCategoryIcons } from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcons />
      </Category>
      <ChannelButton channelName='chat-livre' selected />
      <ChannelButton channelName='trabalho' />
      <ChannelButton channelName='lolzinho' />
      <ChannelButton channelName='valorant' />
    </Container>
  );
};

export default ChannelList;
