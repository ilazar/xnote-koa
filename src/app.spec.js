const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('App', function () {
  after(() => server.close());
  
  it('should say "Hello World (done)"', function (done) {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
  
  it('should say "Hello World (promise)"', () => {
    request
      .get('/')
      .expect(200)
      .then(response => should.equal(response.body, 'Hello World'))
  });

  it('should say "Hello World (await)"', async () => {
    await request
      .get('/')
      .expect(200)
      .expect('Hello World');
  });
});
