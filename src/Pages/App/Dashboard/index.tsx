import React from "react";
import { Container } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";

export const Dashboard: React.FC = () => {
  const options = [
    {
      value: "a",
      label: "a",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" color="warning">
        <Select options={options}/>
        <Select options={options}/>
      </ContentHeader>
    </Container>
  );
};
