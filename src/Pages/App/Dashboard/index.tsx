import React from "react";
import { Container } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { months, years } from "../../../utils/genOptions";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" color="info">
        <Select options={months} />
        <Select options={years} />
      </ContentHeader>
    </Container>
  );
};
