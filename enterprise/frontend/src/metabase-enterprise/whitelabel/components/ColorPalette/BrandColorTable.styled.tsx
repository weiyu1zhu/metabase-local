import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";

export const TableRoot = styled.table`
  display: block;
`;

export const TableRow = styled.tr`
  display: flex;
`;

export const TableHeader = styled.thead`
  display: block;
  border: 1px solid ${color("border")};
  border-bottom: none;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${color("bg-light")};
`;

export const TableHeaderCell = styled.th`
  display: block;
  color: ${color("text-medium")};
  padding: 0.5rem 1.5rem;
  font-size: 0.5rem;
  line-height: 0.625rem;
  text-transform: uppercase;
`;
