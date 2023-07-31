// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      // TODO: KGM - Turn this into computed date?
      type: "date",
      description: "The date of the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    description: {
      type: "string",
      description: "Post Description",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    },
    headings: {
      type: "list",
      resolve: (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const body = `
${doc.body.raw}`;
        return Array.from(body.matchAll(regXHeader)).map((match) => {
          const flag = match.groups?.flag;
          const content = match.groups?.content;
          const slug = content ? slugger.slug(content) : void 0;
          return { flag, content, slug };
        });
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CNURKLXE.mjs.map
