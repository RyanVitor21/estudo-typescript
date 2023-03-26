import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

import app from '../src/app';

describe("Filmes", () => {
  it("GET /filmes should return all filmes", (done) => {
    chai
      .request(app)
      .get("/filmes")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body[0]).to.have.property("titulo");
        done();
      });
  });
});
