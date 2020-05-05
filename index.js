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
  const response = await Audio.byId("audio-1");
  console.log(response)
  console.log(response.audio.id, "audio-1");
};

apiRequest();

// gRPC problem
// FindAudioByEditionId --> Audio --> Fixed Need compiste index
// FilterArabicTranslation --< Audio --> Fixed There is no document for Translation

// Get all edition with limit and cursor ==> Edition --> Fixed Typo mistake

// Find surah by english name ==> surah --> Fix function missing

// Translation find editon by id =-> Translation --> Fixed Need compiste index

// translation audio not comming in ayah parts --> ayah --> Fixed document does not exist
// parts is not working without edition id --> ayah --> Fixed
// sajda is not comming in ayah --> ayah
