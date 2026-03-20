module.exports = {
    name: "Oakwell GP & Skin",
    email: "reception@oakwellgpskin.com.au",
    phoneForTel: "03-8360-3313",
    phoneFormatted: "(03) 8360 3313",
    address: {
        lineOne: "99 Parkside Dr",
        lineTwo: "",
        city: "Oakwell",
        state: "VIC",
        zip: "3311",
        country: "AU",
        mapLink: "https://maps.app.goo.gl/aufRZ5p2EQfJgvVv7",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.oakwellgpskin.com.au",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
