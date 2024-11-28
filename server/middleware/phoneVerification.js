const truecallerjs = require("truecallerjs")
async function performTruecallerSearch() {
  const searchData = {
    number: "9912345678",
    countryCode: "IN",
    installationId: "a1k07--Vgdfyvv_rftf5uuudhuhnkljyvvtfftjuhbuijbhug",
  };

  try {
    const response = await truecallerjs.search(searchData);
    console.log(response.json());
    console.log(response.getName()); // "Sumith Emmadi"
    console.log(response.getAlternateName()); // "sumith"
    console.log(response.getAddresses()); // {....}
    console.log(response.getEmailId()); // example@domain.com
    console.log(response.getCountryDetails()); // {...}
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

performTruecallerSearch();