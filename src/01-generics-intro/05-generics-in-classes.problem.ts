import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type Props = {
  a: number
  b: number
  c: number
}
export class Component {
  private props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  getProps = () => this.props;
}

it("Should create an object containing props", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const result = component.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
  ];
});
