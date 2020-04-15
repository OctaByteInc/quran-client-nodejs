const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");

class Image {
  static async byAyahId(id) {
    const res = await Fetcher.get(`/image/ayah/${id}`);
    return ResponseGenerator.single(res, "image");
  }
}

module.exports = Image;
