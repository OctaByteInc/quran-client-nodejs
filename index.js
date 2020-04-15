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
  const response = await Audio.byAyahId("ayah-1", null, (limit = 2));
  console.log(response);
  const response2 = await Audio.byAyahId("ayah-1", response.cursor);
  console.log(response2);
};

apiRequest();

// gRPC problem
// FindAudioByEditionId --> Audio
// FilterArabicTranslation --< Audio
