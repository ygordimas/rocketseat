import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";
import { useState } from "react";

interface HeaderProps {
  OnOpenNewTransacionalModal: () => void;
}

export function Header({ OnOpenNewTransacionalModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={OnOpenNewTransacionalModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
