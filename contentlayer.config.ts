import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import GithubSlugger from 'github-slugger'
import { remarkCodeHike } from '@code-hike/mdx';
import { GruvboxDark, GruvboxLight } from './code-hike-gruvbox';
import rehypePrettyCode from 'rehype-pretty-code';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      // TODO: KGM - Turn this into computed date?
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' }
    },
    description: {
      type: 'string',
      description: 'Post Description',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    },
    headings: {
      type: 'list',
      resolve: (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const slugger = new GithubSlugger()
        const body = `\n${doc.body.raw}` // Preprend doc with whitespace to account for removed whitespace from frontmatter

        return Array.from(body.matchAll(regXHeader)).map(match => {
          const flag = match.groups?.flag
          const content = match.groups?.content
          const slug = content ? slugger.slug(content) : undefined

          return { flag, content, slug }
        })
      }
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme: GruvboxDark, showCopyButton: true }]],
    // rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: GruvboxDark }]]
    rehypePlugins: [rehypeSlug]
  }
})