import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { HOME_CONTENT } from "../app/utils/enums";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: HOME_CONTENT.HEADING })).toBeDefined();
});
