const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Surah {
  static async getAll(cursor = null, limit = null) {
    const url = multiURL(`/surah/all`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "surah");
  }
  static async byId(id) {
    const res = Fetcher.get(`/surah/${id}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byNumber(number) {
    const res = Fetcher.get(`/surah/${number}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byName(name) {
    const res = Fetcher.get(`/surah/${name}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byEnglishName(englishName) {
    const res = Fetcher.get(`/surah/${englishName}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byRevelationType(revelationType, cursor = null, limit = null) {
    const url = multiURL(`/surah/revelation/${revelationType}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "surah");
  }
}

module.exports = Surah;
