/* ============================================================
   ROYAL WEDDING INVITE — CLIENT CONFIG
   Everything a new client needs changed lives in this file.
   Edit, save, done. No other file needs touching.
   ============================================================ */
window.WEDDING_CONFIG = {

  couple: {
   groom: "Tushar",
   bride: "Tushari",
    groomFull: "Tushar Garg",
    brideFull: "Tushari Garg",
    monogram: "T · T",           // shown in the wax seal + header
    tagline: "Two hearts · One promise · A beautiful beginning",
  },

  // Engagement moment — drives the live countdown
  wedding: {
    dateISO: "2026-12-13T20:00:00+05:30",
    dateDisplay: "Sunday, 13 December 2026",
    muhurat: "Engagement celebration · 8:00 PM",
  },

  // This invitation is for one event only: the engagement.
  events: [
    {
      id: "engagement",
      name: "Engagement",
      icon: "engagement",
      date: "Sunday, 13 December 2026",
      time: "8:00 PM",
      venue: "Venue details to be shared soon",
      line: "Join us as we celebrate the beginning of our next chapter",
      accent: "#D99A2B",
    },
  ],

  venue: {
    name: "Venue details to be shared soon",
    address: "",
    mapsQuery: "",
  },

  rsvp: {
    // Replace with the couple's real Google Form (use the /viewform link)
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER/viewform?embedded=true",
    deadline: "Please let us know if you can join us",
  },

  // Scratch-card hidden message
  scratch: {
    heading: "A little note, just for you",
    message: "Your presence and blessings will make our engagement celebration even more special.",
  },

  // Theme — the royal palette (matches the origami film)
  theme: {
    maroon:  "#6D1A33",
    maroonDeep: "#4A0F22",
    gold:    "#C9A24B",
    goldSoft:"#E5C878",
    ivory:   "#F4EBDB",
    inkOnIvory: "#3A2230",
  },

  frames: {
    count: 181,                 // scrub frames per tier
    loPath: "assets/frames/lo/",
    hiPath: "assets/frames/hi/",
    prefix: "f_",               // f_001.webp … f_181.webp
    ext: ".webp",
  },

  // The Hidden Moment — scroll-driven film
  sanctum: {
    count: 121,
    path: "assets/frames2/",
    prefix: "s_",               // s_001.webp … s_121.webp
    ext: ".webp",
    heading: "The Hidden Moment",
    eyebrow: "A sacred moment awaits",
    hint: "Scroll gently to unfold this hidden moment",
    veilText: "A sacred moment awaits",
  },
};
