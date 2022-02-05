const server = require("./items");
const request = require("supertest");
const id = require("../model/validIDExample");

describe("Check the correct functioning of the endpoints", () => {

  test("the search by query must be successful", () => {
    return request(server)
      .get("/api/items?q=iphone")
      .then((response) => {        
        expect(response.statusCode).toBe(200);
      });      
  });

  test("the QueryParam must be 'q'", () => {
    return request(server)
      .get("/api/items?A=iphone")
      .then((response) => {        
        expect(response.statusCode).toBe(400);
      });      
  });

  test("The Responce must contain the properties author, categories, items", () => {
    return request(server)
      .get("/api/items?q=iphone")
      .then((response) => {            
        expect(response.body).toHaveProperty("author");                
        expect(response.body).toHaveProperty("categories");                
        expect(response.body).toHaveProperty("items");
      });      
  });  

  test("The items property cannot be null", () => {
    return request(server)
      .get("/api/items?q=iphone")
      .then((response) => {            
        expect(response.body?.items).not.toBeNull();
      });      
  });

  test("search by item ID and get a valid response", () => {
    return request(server)
      .get(`/api/items/${id.validIDExample}`)
      .then((response) => {        
        expect(response.statusCode).toBe(200);  
        expect(response.body).toHaveProperty("item");          
        expect(response.body?.item).not.toBeNull();
      });      
  });

  test("search by invalid item ID and get an status code 400", () => {
    return request(server)
      .get(`/api/items/MLA1112BH6545`)
      .then((response) => {        
        expect(response.statusCode).toBe(400);         
      });      
  });
});
