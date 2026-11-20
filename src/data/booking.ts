// Cal.com booking links. Leave empty until the event types exist: the booking page then
// shows an email fallback instead of the embedded calendar.
// Example: "https://cal.com/corentin-bardouil/premier-echange?embed=true"
export const calLinks = {
  echange: process.env.NEXT_PUBLIC_CAL_ECHANGE_URL ?? "",
  regard: process.env.NEXT_PUBLIC_CAL_REGARD_URL ?? "",
};
