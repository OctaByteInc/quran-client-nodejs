const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Transaltion {
  static async byId(id) {
    const res = Fetcher.get(`/translation/${id}`);
    return ResponseGenerator.single(res, "translation");
  }
  static async byAyahId(ayahId, cursor = null, limit = null) {
    const url = multiURL(`/translation/ayah/${revelationType}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "translation");
  }
  static async byEditionId(editionId, cursor = null, limit = null) {
    const url = multiURL(
      `/translation/edition/${revelationType}`,
      cursor,
      limit
    );
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "translation");
  }
  static async filter(ayahId, editionId) {
    const res = Fetcher.get(
      `/translation/filter?ayah_id=${ayahId}&edition_id=${editionId}`
    );
    return ResponseGenerator.single(res, "translation");
  }
}

module.exports = Transaltion;
