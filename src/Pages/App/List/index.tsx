import React from "react";
import { Container, Content } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { ListCard } from "../../../components/ListCard";
export const List: React.FC = () => {
  const options = [
    {
      value: "a",
      label: "a",
    },
  ];
  return (
    <Container>
      <ContentHeader title="List" color="info">
        <Select options={options} />
        <Select options={options} />
      </ContentHeader>
      <Content>
        <ListCard
          title="Conta de Luz"
          subtitle="00/00/00"
          cardColor="card"
          tagColor="warning"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="00/00/00"
          cardColor="card"
          tagColor="warning"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="00/00/00"
          cardColor="card"
          tagColor="warning"
          amount="$ 123.00"
        />
      </Content>
    </Container>
  );
};
