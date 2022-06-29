let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
 
chai.use(chaiHttp);
//the parent block
describe('backend root', () => {
 it('it should return a 404', () => {
   chai.request(server)
       .get('/')
       .end((err, res) => {
           res.should.have.status(404);
       });
 });
});

//Testing GET /users
describe('GET /users', () => {
    it('GET all users', (done) => {
        chai
        .request("localhost:4000/users")
        .get("/")
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.not.be.eql(0);
            done();
        });
    });
});

