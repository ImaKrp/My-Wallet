import React, { useMemo } from "react";
import { Container, Content, Filters, Button } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { ListCard } from "../../../components/ListCard";
import { months, years } from "../../../utils/genOptions";
interface IRoutesParams {
  match: {
    params: {
      type: string;
    };
  };
}

export const List: React.FC<IRoutesParams> = ({ match }) => {
  const { type } = match.params;

  const pageType = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entry", color: "info" }
      : { title: "Exit", color: "warning" };
  }, [type]);

  return (
    <Container>
      <ContentHeader title={pageType.title} color={pageType.color}>
        <Select options={months} />
        <Select options={years} />
      </ContentHeader>
      <Filters>
        <Button color="info">Recurrent</Button>
        <Button color="warning">Eventual</Button>
      </Filters>
      <Content>
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="warning"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="info"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="warning"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="info"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="warning"
          amount="$ 123.00"
        />
        <ListCard
          title="Conta de Luz"
          subtitle="0000-00-00"
          tagColor="info"
          amount="$ 123.00"
        />
      </Content>
    </Container>
  );
};
