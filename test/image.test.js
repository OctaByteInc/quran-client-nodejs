const Image = require("../api/image");
const assert = require("assert");

describe("Image API Tests", () => {
  it("Find image by ayah id", async () => {
    const response = await Image.byAyahId("ayah-1");
    assert.equal(response.image.ayahId, "ayah-1");
  });
});
