import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/todo/page";

describe("Todo", () => {
    it("should show todo list", () => {
        render(<Page />);
        expect(screen.getByRole('heading', { level: 1, name: 'TODO List' })).toBeDefined();
    });

});

