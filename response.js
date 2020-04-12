class ResponseGenerator {
  static single(res, name) {
    if (res.code == 200) {
      const response = new Response();
      response[name] = res.code.data.audio;
    } else {
      throw new Error(res.status);
    }
  }

  static multi(res, name) {
    if (res.code == 200) {
      const response = new Response();
      response.numberOfResults = res.data.numberOfResults;
      response.cursor = res.data.cursor;
      response[name] = res.data.edition;
    } else {
      throw new Error(res.status);
    }
  }
}

class Response {
  constructor() {}
}

module.exports = ResponseGenerator;
