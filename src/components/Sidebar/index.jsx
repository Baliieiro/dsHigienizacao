import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import navList from "../../constants/navList";
import { Container, Content } from "./styles";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container $sidebar={active}>
      <ClearIcon onClick={closeSidebar} />
      <Content>
        {navList.map((item) => (
          <a href={item.links} key={item.id}>
            {item.label}
          </a>
        ))}
      </Content>
    </Container>
  );
};

export default Sidebar;
