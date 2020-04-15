const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Surah {
  static async getAll(cursor = null, limit = null) {
    const url = multiURL(`/surah/all`, cursor, limit);
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "surah");
  }
  static async byId(id) {
    const res = await Fetcher.get(`/surah/${id}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byNumber(number) {
    const res = await Fetcher.get(`/surah/number/${number}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byName(name) {
    const res = await Fetcher.get(`/surah/name/${name}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byEnglishName(englishName) {
    const res = await Fetcher.get(`/surah/english_name/${englishName}`);
    return ResponseGenerator.single(res, "surah");
  }
  static async byRevelationType(revelationType, cursor = null, limit = null) {
    const url = multiURL(
      `/surah/revelation_type/${revelationType}`,
      cursor,
      limit
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "surah");
  }
}

module.exports = Surah;
