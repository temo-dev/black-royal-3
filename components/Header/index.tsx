import { useState } from "react";
import { Container, Group, Burger, Avatar, Title, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../public/images/logo.png";
import classes from "./index.module.css";
import Image from "next/image";

const links = [
  { link: "/about", label: "Features" },
  { link: "/community", label: "Community" },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Avatar src={"/images/logo.png"} alt="logo-mom-care" />
          <Title order={3} lineClamp={1}>
            Doctor Momcare
          </Title>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
