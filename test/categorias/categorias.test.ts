import supertest from "supertest";
import { server, listenServer } from "../../src/index";

describe('categorias endpoints', () => {

  test('should return 200 ok response and content type json', async () => {
    await supertest(server.getApp())
      .get(server.apiPaths.categorias)
      .expect("Content-Type", /application\/json/)
      .expect(200);
  });

});

afterAll(async () => {
  await server.disconnectDatabase();
  listenServer.close();
});