"use strict";

// module.exports = {
//   async increment(ctx) {
//     const { id, contentType } = ctx.params;

//     try {
//       const article = await strapi.entityService.findOne(
//         `api::${contentType}.${contentType}`,
//         id
//       );

//       const updated = await strapi.entityService.update(
//         `api::${contentType}.${contentType}`,
//         id,
//         {
//           data: {
//             views: (article.views || 0) + 1,
//             lastViewed: new Date(),
//           },
//         }
//       );

//       return updated;
//     } catch (error) {
//       ctx.throw(400, error);
//     }
//   },
// };

module.exports = {
  async increment(ctx) {
    const { slug, contentType } = ctx.params;

    try {
      // Find by slug instead of id
      const article = await strapi.entityService.findMany(
        `api::${contentType}.${contentType}`,
        {
          filters: { slug: slug },
        }
      );

      if (article) {
        const updated = await strapi.entityService.update(
          `api::${contentType}.${contentType}`,
          article.id,
          {
            data: {
              views: (article.views || 0) + 1,
              lastViewed: new Date(),
            },
          }
        );

        return updated;
      }
    } catch (error) {
      ctx.throw(400, error);
    }
  },
};
