import React from "react";
import { render, cleanup } from "config/test-utils";
import { Component } from "../Component";
import { bundle } from "config/test-data";

describe("Component", () => {
  afterEach(cleanup);

  it("renders the expected elements", () => {
    const { getByText } = render(<Component bundle={bundle} />);
    expect(getByText("When")).toBeDefined();
    expect(getByText("Where")).toBeDefined();
  });
});
