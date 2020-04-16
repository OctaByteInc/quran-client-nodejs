const Audio = require("./api/audio");
const Ayah = require("./api/ayah");
const Edition = require("./api/edition");
const Image = require("./api/image");
const Surah = require("./api/surah");
const Translation = require("./api/translation");

// Edition.byId("edition-1")
//   .then((res) => console.log(res))
//   .catch(console.log);

const apiRequest = async () => {
  const response = await Surah.byEnglishName("Surah-1-English-Name");
  console.log(response);
};

apiRequest();

// gRPC problem
// FindAudioByEditionId --> Audio
// FilterArabicTranslation --< Audio

// Get all edition with limit and cursor ==> Edition

// Find surah by english name ==> surah
