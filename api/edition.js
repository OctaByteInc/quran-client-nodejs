const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Edition {
  static async getAll(cursor = null, limit = null) {
    const url = multiURL(`/edition/all`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }

  static async byId(id) {
    const res = Fetcher.get(`/edition/${id}`);
    return ResponseGenerator.single(res, "edition");
  }

  static async byLanguage(language, cursor = null, limit = null) {
    const url = multiURL(`/edition/language/${language}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }
  static async byName(name, cursor = null, limit = null) {
    const url = multiURL(`/edition/name/${name}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }
  static async byTranslatior(translator, cursor = null, limit = null) {
    const url = multiURL(`/edition/translator/${translator}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }
  static async byType(type, cursor = null, limit = null) {
    const url = multiURL(`/edition/type/${type}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }
  static async byFormat(format, cursor = null, limit = null) {
    const url = multiURL(`/edition/format/${format}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "edition");
  }
}

module.exports = Edition;
