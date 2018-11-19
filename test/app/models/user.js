"use strict";

const expect = require("chai").expect;

const user = require("../../../app/models/user");

describe("user", () => {
  it("should load", () => {
    expect(user).to.be.a("function");
  });
});
