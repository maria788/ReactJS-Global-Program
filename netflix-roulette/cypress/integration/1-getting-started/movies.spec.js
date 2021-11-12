describe("Input form", () => {
  it("opens the site", () => {
    cy.visit("localhost:4200"); //this is the server that was started earlier
  });

  it("check input text", () => {
    cy.get("input[type=search]").type("test").should("have.value", "test");
  });

  it("check url params", () => {
    cy.get("input[type=search]").clear();
    cy.get("input[type=search]").type("test");
    cy.get("button").contains("Search").click();

    cy.url().should("include", "searchQuery=test");
  });

  it("check request params", () => {
    cy.get("input[type=search]").clear();
    cy.get("input[type=search]").type("test");
    cy.get("button").contains("Search").click();

    cy.request(
      "movies?sortBy=release_date&sortOrder=desk&search=test&searchBy=title"
    );
  });

  it("check return status", () => {
    cy.get("input[type=search]").clear();
    cy.get("input[type=search]").type("city");
    cy.get("button").contains("Search").click();

    cy.request(
      "movies?sortBy=release_date&sortOrder=desk&search=test&searchBy=city"
    ).as("fetchMovies");
    cy.get("@fetchMovies").should((response) => {
      expect(response).property("status").to.equal(200);
    });
  });

  it("check opening movie detail", () => {
    cy.get("input[type=search]").clear();
    cy.get(":nth-child(1) > img").click();

    cy.get("div").should("have.value", "test");
  });
});
