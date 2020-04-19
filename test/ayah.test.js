const Ayah = require("../api/ayah");
const assert = require("assert");

describe("Ayah API Tests", () => {
  it("Find ayah by id", async () => {
    const response = await Ayah.byId("ayah-1");
    assert.equal(response.ayahResponse.ayah.id, "ayah-1");
  });

  it("Find ayah by id with parts and edition", async () => {
    const parts = [
      "Translation",
      "Surah",
      "Edition",
      "Arabic_Audio",
      "Translation_Audio",
      "Image",
    ];
    const response = await Ayah.byId("ayah-1", parts);
    assert.equal(response.ayahResponse.ayah.id, "ayah-1");
    assert.notEqual(response.ayahResponse.translation, undefined);
    assert.notEqual(response.ayahResponse.surah, undefined);
    assert.notEqual(response.ayahResponse.edition, undefined);
    assert.notEqual(response.ayahResponse.arabicAudio, undefined);
    assert.notEqual(response.ayahResponse.translationAudio, undefined);
    assert.notEqual(response.ayahResponse.image, undefined);

    const response2 = await Ayah.byId("ayah-1", parts, "edition-1");
    assert.equal(response2.ayahResponse.ayah.id, "ayah-1");
    assert.notEqual(response2.ayahResponse.translation, undefined);
    assert.notEqual(response2.ayahResponse.surah, undefined);
    assert.notEqual(response2.ayahResponse.edition, undefined);
    assert.notEqual(response2.ayahResponse.arabicAudio, undefined);
    assert.notEqual(response2.ayahResponse.image, undefined);
  });

  it("Find ayah by surah id", async () => {
    const response = await Ayah.bySurahId("surah-1");
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.surahId, "surah-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find ayah by surah id with parts and edition", async () => {
    const parts = ["Translation", "Surah", "Edition", "Arabic_Audio", "Image"];
    const response = await Ayah.bySurahId("surah-1", null, null, parts);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.surahId, "surah-1");
      assert.notEqual(response.ayahResponse[i].translation, undefined);
      assert.notEqual(response.ayahResponse[i].surah, undefined);
      assert.notEqual(response.ayahResponse[i].edition, undefined);
      assert.notEqual(response.ayahResponse[i].arabicAudio, undefined);
      assert.notEqual(response.ayahResponse[i].image, undefined);
    }

    assert.equal(i, response.numberOfResults);

    const response2 = await Ayah.bySurahId(
      "surah-1",
      null,
      null,
      parts,
      "edition-1"
    );
    let j;
    for (j = 0; j < response2.ayahResponse.length; j++) {
      assert.equal(response2.ayahResponse[j].ayah.surahId, "surah-1");
      assert.notEqual(response2.ayahResponse[j].translation, undefined);
      assert.notEqual(response2.ayahResponse[j].surah, undefined);
      assert.notEqual(response2.ayahResponse[j].edition, undefined);
      assert.notEqual(response2.ayahResponse[j].arabicAudio, undefined);
      assert.notEqual(response2.ayahResponse[j].image, undefined);
    }

    assert.equal(j, response2.numberOfResults);
  });

  it("Find ayah by surah id with limit and cursor", async () => {
    const response = await Ayah.bySurahId("surah-1", null, 1);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.surahId, "surah-1");
    }

    assert.equal(i, 1);

    const response2 = await Ayah.bySurahId("surah-1", response.cursor);
    let j;
    for (j = 0; j < response2.ayahResponse.length; j++) {
      assert.equal(response2.ayahResponse[j].ayah.surahId, "surah-1");
    }

    assert.equal(j, response2.numberOfResults);
  });

  it("Find ayah by surah id with limit, cursor and parts, edition", async () => {
    const parts = ["Translation", "Surah", "Edition", "Arabic_Audio", "Image"];
    const response = await Ayah.bySurahId("surah-1", null, 1, parts);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.surahId, "surah-1");
      assert.notEqual(response.ayahResponse[i].translation, undefined);
      assert.notEqual(response.ayahResponse[i].surah, undefined);
      assert.notEqual(response.ayahResponse[i].edition, undefined);
      assert.notEqual(response.ayahResponse[i].arabicAudio, undefined);
      assert.notEqual(response.ayahResponse[i].image, undefined);
    }

    assert.equal(i, 1);

    const response2 = await Ayah.bySurahId(
      "surah-1",
      response.cursor,
      null,
      parts,
      "edition-1"
    );
    let j;
    for (j = 0; j < response2.ayahResponse.length; j++) {
      assert.equal(response2.ayahResponse[j].ayah.surahId, "surah-1");
      assert.notEqual(response.ayahResponse[j].translation, undefined);
      assert.notEqual(response.ayahResponse[j].surah, undefined);
      assert.notEqual(response.ayahResponse[j].edition, undefined);
      assert.notEqual(response.ayahResponse[j].arabicAudio, undefined);
      assert.notEqual(response.ayahResponse[j].image, undefined);
    }

    assert.equal(i, response2.numberOfResults);
  });

  it("Find ayah by number", async () => {
    const response = await Ayah.byNumber(1);
    assert.equal(response.ayahResponse.ayah.number, 1);
  });

  it("Find ayah by number in surah", async () => {
    const response = await Ayah.byNumberInSurah(1);
    assert.equal(response.ayahResponse.ayah.numberInSurah, 1);
  });

  it("Find ayah by juz", async () => {
    const response = await Ayah.byJuz(1);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.juzz, 1);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find ayah by manzil", async () => {
    const response = await Ayah.byManzil(1);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.manzil, 1);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find ayah by ruku", async () => {
    const response = await Ayah.byRuku(1);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.ruku, 1);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find ayah by hizb quarter", async () => {
    const response = await Ayah.byHizbQuarter(1);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.hizbQuarter, 1);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find ayah by sajda", async () => {
    const response = await Ayah.bySajda(false);
    let i;
    for (i = 0; i < response.ayahResponse.length; i++) {
      assert.equal(response.ayahResponse[i].ayah.sajda, false);
    }

    assert.equal(i, response.numberOfResults);
  });
});
