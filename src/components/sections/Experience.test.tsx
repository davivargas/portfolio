import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Experience } from "./Experience";
import { Contact } from "./Contact";

// The site is the resume, so these tests check that the resume content
// actually renders rather than that the build merely succeeded.
describe("Experience", () => {
  it("shows the three most recent roles with role and company", () => {
    render(<Experience />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(screen.getByText("Software Developer · Sprinter Delivery")).toBeInTheDocument();
  });

  it("reveals the whole timeline when asked", () => {
    render(<Experience />);
    fireEvent.click(screen.getByRole("button", { name: "See my whole journey" }));
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(3);
    expect(screen.getByRole("button", { name: "Show less" })).toBeInTheDocument();
  });

  it("opens a role's detail bullets when its card is clicked", () => {
    render(<Experience />);
    fireEvent.click(screen.getByText("Software Developer · Sprinter Delivery"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(3);
  });
});

describe("Contact", () => {
  it("offers the resume PDF for download", () => {
    render(<Contact />);
    const link = screen.getByRole("link", { name: "Download resume" });
    expect(link).toHaveAttribute("download", "DaviVargas_resume.pdf");
    expect(link.getAttribute("href")).toMatch(/DaviVargas_resume\.pdf$/);
  });
});
