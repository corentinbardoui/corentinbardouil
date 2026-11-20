// Cal.com event types embedded on the booking pages (user/event-slug).
// Can be overridden per environment with NEXT_PUBLIC_CAL_ECHANGE and NEXT_PUBLIC_CAL_REGARD.
export const calLinks = {
  echange: process.env.NEXT_PUBLIC_CAL_ECHANGE || "corentin-bardouil/premier-echange",
  regard: process.env.NEXT_PUBLIC_CAL_REGARD || "corentin-bardouil/regard-exterieur",
};
