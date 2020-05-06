const Fetcher = require("../fetcher");
const ResponseGenerator = require("../response");

class Ayah {
  static async byId(id, parts = null, editionId = null) {
    const url = ayahURL(`/ayah/${id}`, parts, editionId);
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayahResponse");
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
    return ResponseGenerator.multi(res, "ayahResponse");
  }
  static async byNumber(number, parts = null, editionId = null) {
    const url = ayahURL(`/ayah/number/${number}`, parts, editionId);
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayahResponse");
  }
  static async byNumberInSurah(number, parts = null, editionId = null) {
    const url = ayahURL(`/ayah/number_in_surah/${number}`, parts, editionId);
    const res = await Fetcher.get(url);
    return ResponseGenerator.single(res, "ayahResponse");
  }
  static async byJuz(
    juz,
    cursor = null,
    limit = null,
    parts = null,
    editionId = null
  ) {
    const url = ayahMultiURL(
      `/ayah/juz/${juz}`,
      cursor,
      limit,
      parts,
      editionId
    );
    const res = await Fetcher.get(url);
    return ResponseGenerator.multi(res, "ayahResponse");
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
    return ResponseGenerator.multi(res, "ayahResponse");
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
    return ResponseGenerator.multi(res, "ayahResponse");
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
    return ResponseGenerator.multi(res, "ayahResponse");
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
    return ResponseGenerator.multi(res, "ayahResponse");
  }
}

const ayahURL = (url, parts = null, editionId = null) => {
  if (parts) {
    const partsStr = parts.join(",");
    url += `?parts.list=${partsStr}`;

    if (editionId) {
      url += `&parts.edition_id=${editionId}`;
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
