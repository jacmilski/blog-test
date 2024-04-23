// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the article"
    },
    publishedAt: {
      type: "string",
      required: true,
      description: "The date the article was published"
    },
    isReady: {
      type: "boolean",
      required: true,
      description: "Whether the article is ready to be published"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    },
    url: {
      type: "string",
      resolve: (article) => {
        if (process.env.NODE_ENV === "development") {
          return `http://localhost:3000/articles/${article._raw.flattenedPath}`;
        }
        return `https://blog-test-black-zeta.vercel.app/articles/${article._raw.flattenedPath}`;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "articles",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZQGUNP2Q.mjs.map
