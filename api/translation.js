const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Transaltion {
  static async byId(id) {
    const res = await Fetcher.get(`/translation/${id}`);
    return ResponseGenerator.single(res, "translation");
  }
  static async byAyahId(ayahId, cursor = null, limit = null) {
    const url = multiURL(`/translation/ayah/${ayahId}`, cursor, limit);
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "translation");
  }
  static async byEditionId(editionId, cursor = null, limit = null) {
    const url = multiURL(`/translation/edition/${editionId}`, cursor, limit);
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "translation");
  }
  static async filter(ayahId, editionId) {
    const res = await Fetcher.get(
      `/translation/filter?ayah_id=${ayahId}&edition_id=${editionId}`
    );
    return ResponseGenerator.single(res, "translation");
  }
}

module.exports = Transaltion;
