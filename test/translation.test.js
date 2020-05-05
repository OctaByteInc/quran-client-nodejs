const Translation = require("../api/translation");
const assert = require("assert");

describe("Translation API Tests", () => {
  it("Find translation by id", async () => {
    const response = await Translation.byId("translation-ayah-1-edition-1");
    assert.equal(response.translation.id, "translation-ayah-1-edition-1");
  });

  it("Find translation by ayah id", async () => {
    const response = await Translation.byAyahId("ayah-1");
    let i;
    for (i = 0; i < response.translation.length; i++) {
      assert.equal(response.translation[i].ayahId, "ayah-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find translation by ayah id with limit and cursor", async () => {
    const response = await Translation.byAyahId("ayah-1", null, 1);
    let i;
    for (i = 0; i < response.translation.length; i++) {
      assert.equal(response.translation[i].ayahId, "ayah-1");
    }

    assert.equal(i, 1);

    const response2 = await Translation.byAyahId("ayah-1", response.cursor);
    let j;
    for (j = 0; j < response2.translation.length; j++) {
      assert.equal(response2.translation[j].ayahId, "ayah-1");
    }

    assert(j, response2.numberOfResults);
  });

  it("Find translation by edition id", async () => {
    const response = await Translation.byEditionId("edition-1");
    let i;
    for (i = 0; i < response.translation.length; i++) {
      assert.equal(response.translation[i].editionId, "edition-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("filter translation", async () => {
    const response = await Translation.filter("ayah-1", "edition-1");
    assert.equal(response.translation.ayahId, "ayah-1");
    assert.equal(response.translation.editionId, "edition-1");
  });
});
