const Surah = require("../api/surah");
const assert = require("assert");

describe("Surah API Tests", () => {
  it("Get all surah", async () => {
    const response = await Surah.getAll();
    let i;
    for (i = 0; i < response.surah.length; i++) {
      assert.notEqual(response.surah[i], undefined);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Get all surah with cursor and limit", async () => {
    const response = await Surah.getAll(null, 1);
    let i;
    for (i = 0; i < response.surah.length; i++) {
      assert.notEqual(response.surah[i], undefined);
    }

    assert.equal(i, 1);

    const response2 = await Surah.getAll(response.cursor);
    let j;
    for (j = 0; j < response2.surah.length; j++) {
      assert.notEqual(response2.surah[j], undefined);
    }

    assert.equal(j, response2.numberOfResults);
  });

  it("Find surah by id", async () => {
    const response = await Surah.byId("surah-1");
    assert.equal(response.surah.id, "surah-1");
  });

  it("Find surah by number", async () => {
    const response = await Surah.byNumber(1);
    assert.equal(response.surah.number, 1);
  });

  it("Find surah by name", async () => {
    const response = await Surah.byName("Surah-1-Name");
    assert.equal(response.surah.name, "Surah-1-Name");
  });

  it("Find surah by english name", async () => {
    const response = await Surah.byEnglishName("Surah-1-English-Name");
    assert.equal(response.surah.englishName, "Surah-1-English-Name");
  });

  it("Find surah revelation type", async () => {
    const response = await Surah.byRevelationType("Mecca");
    let i;
    for (i = 0; i < response.surah.length; i++) {
      assert.equal(response.surah[i].revelationType, "Mecca");
    }

    assert.equal(i, response.numberOfResults);
  });
});
