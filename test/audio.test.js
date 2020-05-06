const Audio = require("../api/audio");
const assert = require("assert");

describe("Audio API Tests", () => {
  it("Find Audio By ID", async () => {
    const response = await Audio.byId("audio-1");
    assert.equal(response.audio.id, "audio-1");
  });

  it("Find Audio By Ayah ID", async () => {
    const response = await Audio.byAyahId("ayah-1");
    let i;
    for (i = 0; i < response.audio.length; i++) {
      assert.equal(response.audio[i].ayahId, "ayah-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find Audio By Ayah ID with limit and cursor", async () => {
    const response = await Audio.byAyahId("ayah-1", null, limit = 2);
    for (let i = 0; i < response.audio.length; i++) {
      assert.equal(response.audio[i].ayahId, "ayah-1");
    }

    assert.equal(response.numberOfResults, 2);

    const response2 = await Audio.byAyahId("ayah-1", response.cursor);
    let i;
    for (i = 0; i < response2.audio.length; i++) {
      assert.equal(response2.audio[i].ayahId, "ayah-1");
    }

    assert.equal(i, response2.numberOfResults);
  });

  it("Find Audio By Edition ID", async () => {
    const response = await Audio.byEditionId("edition-1");
    let i;
    for (i = 0; i < response.audio.length; i++) {
      assert.equal(response.audio[i].editionId, "edition-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find Arabic Audio", async () => {
    const response = await Audio.arabicAudio("ayah-1", "edition-1");
    assert.equal(response.audio.ayahId, "ayah-1");
    assert.equal(response.audio.editionId, "edition-1");
    assert.equal(response.audio.type, "Arabic");
  });

  it("Find Translation Audio", async () => {
    const response = await Audio.translationAudio("ayah-1", "edition-1");
    assert.equal(response.audio.ayahId, "ayah-1");
    assert.equal(response.audio.editionId, "edition-1");
    assert.equal(response.audio.type, "Translation");
  });
});
