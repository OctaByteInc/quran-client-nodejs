const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");
const multiURL = require("../utils");

class Audio {
  static async byId(id) {
    const res = Fetcher.get(`/audio/${id}`);
    return ResponseGenerator.single(res, "audio");
  }
  static async byAyahId(id, cursor = null, limit = null) {
    const url = multiURL(`/audio/ayah/${id}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "audio");
  }
  static async byEditionId(id) {
    const url = multiURL(`/audio/edition/${id}`, cursor, limit);
    const res = Fetcher.get(url);
    return ResponseGenerator.multi(res, "audio");
  }
  static async arabicAudio(ayahId, editionId) {
    const res = Fetcher.get(
      `/audio/arabic?ayah_id=${ayahId}&edition_id=${editionId}`
    );
    return ResponseGenerator.single(res, "audio");
  }
  static async translationAudio(ayahId, editionId) {
    const res = Fetcher.get(
      `/audio/translation?ayah_id=${ayahId}&edition_id=${editionId}`
    );
    return ResponseGenerator.single(res, "audio");
  }
}

module.exports = Audio;
