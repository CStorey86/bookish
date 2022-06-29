const chai = require("chai");
let server = require("../server");
const chaiHttp = require("chai-http");
var jwt = require("jsonwebtoken");

chai.should();
chai.use(chaiHttp);
let adminToken;
let employeeToken;
let clientToken;
let userclient;
let useemp;

describe("API REQUESTS USERS", () => {
  const clientaccount = {
    username: "clientaccount",
    password: "password",
    rank: "Client",
  };

  const employeeaccount = {
    username: "employeeaccount",
    password: "password",
    rank: "Employee",
  };
  const adminaccount = {
    username: "adminaccount",
    password: "password",
    rank: "Admin",
  };

  it("Testing POST CREATE Client", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/add")
      .set("Content-Type", "application/json")
      .send(clientaccount)
      .end(function (err, response) {
        response.should.have.status(201);
        done();
      });
  });

  it("Testing POST CREATE Employee", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/add")
      .set("Content-Type", "application/json")
      .send(employeeaccount)
      .end(function (err, response) {
        response.should.have.status(201);
        done();
      });
  });
  it("Testing POST CREATE ADMIN", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/add")
      .set("Content-Type", "application/json")
      .send(adminaccount)
      .end(function (err, response) {
        response.should.have.status(201);
        done();
      });
  });

  it("Testing POST SIGNIN ADMIN CREATE TOKEN", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/find")
      .set("Content-Type", "application/json")
      .send(adminaccount)
      .end(function (err, response) {
        response.should.have.status(200);
        adminToken = response.body.user;
        done();
      });
  });
  it("Testing POST SIGNIN Employee CREATE TOKEN", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/find")
      .set("Content-Type", "application/json")
      .send(employeeaccount)
      .end(async function (err, response) {
        response.should.have.status(200);
        employeeToken = response.body.user;
        useemp = await jwt.decode(employeeToken);
        done();
      });
  });
  it("Testing POST SIGNIN Client CREATE TOKEN", (done) => {
    chai
      .request("localhost:4000/users")
      .post("/find")
      .set("Content-Type", "application/json")
      .send(clientaccount)
      .end(async function (err, response) {
        response.should.have.status(200);
        clientToken = response.body.user;
        userclient = await jwt.decode(clientToken);
        done();
      });
  });
  it("Testing GET all users ADMIN only", (done) => {
    chai
      .request("localhost:4000/users")
      .get("/")
      .set({ Authorization: adminToken })
      .end(function (err, response) {
        response.should.have.status(200);
        done();
      });
  });
  it("Testing GET all users with UNAUTHED", (done) => {
    chai
      .request("localhost:4000/users")
      .get("/")
      .set({ Authorization: clientToken })
      .end(function (err, response) {
        response.should.have.status(401);
        done();
      });
  });

  it("Testing DELETE request as ADMIN", (done) => {
    chai
      .request("localhost:4000/users")
      .delete(`/${useemp.id}`)
      .set({ Authorization: adminToken })
      .end(function (err, response) {
        response.should.have.status(200);
        done();
      });
  });
  it("Testing DELETE request as UNAUTHED", (done) => {
    chai
      .request("localhost:4000/users")
      .delete("/1")
      .set({ Authorization: clientToken })
      .end(function (err, response) {
        response.should.have.status(401);
        done();
      });
  });
  it("Testing request wiith INVALID TOKEN", (done) => {
    chai
      .request("localhost:4000/users")
      .delete("/1")
      .set({ Authorization: clientToken })
      .end(function (err, response) {
        response.should.have.status(401);
        done();
      });
  });
  it("Testing  request wiith NO TOKEN", (done) => {
    chai
      .request("localhost:4000/users")
      .delete("/1")

      .end(function (err, response) {
        response.should.have.status(403);
        done();
      });
  });
});
