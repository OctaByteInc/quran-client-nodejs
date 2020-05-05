const Edition = require("../api/edition");
const assert = require("assert");

describe("Edition API Tests", () => {
  it("Get all editions", async () => {
    const response = await Edition.getAll();
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.notEqual(response.edition[i], undefined);
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Get all editions with limit and cursor", async () => {
    const response = await Edition.getAll(null, 1);
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.notEqual(response.edition[i], undefined);
    }

    assert.equal(i, response.numberOfResults);

    const response2 = await Edition.getAll(response.cursor);
    let j;
    for (j = 0; j < response2.edition.length; j++) {
      assert.notEqual(response.edition[j], undefined);
    }

    assert.equal(j, response2.numberOfResults);
  });

  it("Find Edition by ID", async () => {
    const response = await Edition.byId("edition-1");
    assert.equal(response.edition.id, "edition-1");
  });

  it("Find edition by language", async () => {
    const response = await Edition.byLanguage("en");
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.equal(response.edition[i].language, "en");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find edition by Name", async () => {
    const response = await Edition.byName("Edition-Name-1");
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.equal(response.edition[i].name, "Edition-Name-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find edition by Translator", async () => {
    const response = await Edition.byTranslatior("Edition-Translator-1");
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.equal(response.edition[i].translator, "Edition-Translator-1");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find edition by Type", async () => {
    const response = await Edition.byType("Translation");
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.equal(response.edition[i].type, "Translation");
    }

    assert.equal(i, response.numberOfResults);
  });

  it("Find edition by Format", async () => {
    const response = await Edition.byFormat("Format1");
    let i;
    for (i = 0; i < response.edition.length; i++) {
      assert.equal(response.edition[i].format, "Format1");
    }

    assert.equal(i, response.numberOfResults);
  });
});
