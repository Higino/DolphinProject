const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const services = require("../api-services.js");

describe("Rest Services Smoke Tests", function() {
  it("should invoke a res.end so we can send a response to client", function() {
    let req = {}
    // Have `res` have a send key with a function value coz we use `res.send()` in our func
    let res = {
      end: sinon.spy()
    }

    services.getProducts(req, res);
    expect(res.end.calledOnce).to.be.true;
  });
});