import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type Test = {
  name: string
}
const fetchData = async <Test>(url: string) => {
  const data = await fetch(url).then<Test>((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
