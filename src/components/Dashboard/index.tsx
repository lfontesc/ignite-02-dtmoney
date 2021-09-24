import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <div>
      <Container>
        <Summary />
        <TransactionTable />
      </Container>
    </div>
  );
}
