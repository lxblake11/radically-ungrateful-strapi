// export default ({ env }) => ({
//   auth: {
//     secret: env('ADMIN_JWT_SECRET'),
//   },
//   apiToken: {
//     salt: env('API_TOKEN_SALT'),
//   },
//   transfer: {
//     token: {
//       salt: env('TRANSFER_TOKEN_SALT'),
//     },
//   },
//   flags: {
//     nps: env.bool('FLAG_NPS', true),
//     promoteEE: env.bool('FLAG_PROMOTE_EE', true),
//   },
// });

export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env(
        "TRANSFER_TOKEN_SALT",
        "dj83hf8jd92hf63jd73he83h2d81h3df74jh2f74jd2"
      ),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
