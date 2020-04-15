const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");

class Ayah {
  static async byId(id, parts = null, editionId = null) {
    const url = ayahURL(`/ayah/${id}`, parts, editionId);
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayah");
  }
  static async bySurahId(
    id,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/surah/${id}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
  static async byNumber(number, parts = null, editionId = null) {
    const url = ayahURL(`/ayah/number/${number}`, parts, editionId);
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayah");
  }
  static async byNumberInSurah(number, parts = null, editionId = null) {
    const url = ayahURL(
      `/ayah/surah/number_in_surah/${number}`,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayah");
  }
  static async byJuzz(
    juzz,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/juzz/${juzz}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
  static async byManzil(
    manzil,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/manzil/${manzil}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
  static async byRuku(
    ruku,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/ruku/${ruku}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
  static async byHizbQuarter(
    hizbQuarter,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/hizb_quarter/${hizbQuarter}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
  static async bySajda(
    sajda,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/sajda/${sajda}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayah");
  }
}

const ayahURL = (url, parts = null, editionId = null) => {
  if (parts) {
    const partsStr = parts.join(",");
    url += `?parts.list=${partsStr}`;

    if (editionId) {
      url += `&edition_id=${editionId}`;
    }
  }

  return url;
};

const ayahMultiURL = (
  url,
  cursor = null,
  limit = null,
  parts = null,
  editionId = null
) => {
  url = ayahURL(url, parts, editionId);

  if (cursor) {
    if (parts) {
      url += `&cursor=${cursor}`;
    } else {
      url += `?cursor=${cursor}`;
    }

    if (limit) {
      url += `&limit=${limit}`;
    }
  } else if (limit) {
    if (parts) {
      url += `&limit=${limit}`;
    } else {
      url += `?limit=${limit}`;
    }
  }

  return url;
};

module.exports = Ayah;
