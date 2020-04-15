class ResponseGenerator {
  static single(res, name) {
    if (res.code == 200) {
      const response = new Response();
      response[name] = res.data[name];
      return response;
    } else {
      console.warn(res);
      throw new Error(res.status);
    }
  }

  static multi(res, name) {
    if (res.code == 200) {
      const response = new Response();
      response.numberOfResults = res.data.numberOfResults;
      response.cursor = res.data.cursor;
      response[name] = res.data[name];
      return response;
    } else {
      console.warn(res);
      throw new Error(res.status);
    }
  }
}

class Response {
  constructor() {}
}

module.exports = ResponseGenerator;
