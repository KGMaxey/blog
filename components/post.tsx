'use client'

import { Post } from "@/.contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from "next/link"
import { ReactNode } from "react"

type headers = 'h1' | 'h2' | 'h3'
const ChildHeader = ({ id, className, h, children }: { id: string | undefined, className: string | undefined, h: headers, children: ReactNode }) => {
  if (h === 'h1') { return (<h1 id={id} className={`${className} text-fg0`}>{children}</h1>) }
  if (h === 'h2') { return (<h2 id={id} className={`${className} text-fg0`}>{children}</h2>) }
  if (h === 'h3') { return (<h3 id={id} className={`${className} text-fg0`}>{children}</h3>) }
}

const Header = ({ id, h, className, children }: { id: string | undefined, className: string | undefined, h: headers, children: ReactNode } ) => (
  <div className='flex justify-start items-center group mb-4'>
    <ChildHeader id={id} h={h} className={`${className} font-semibold`}>
      {children}
    </ChildHeader>
    <Link href={`#${id}`} className={`${h === 'h1' ? 'text-2xl' : h === 'h2' ? 'text-lg' : 'text-base'} transition-all pl-2 italic font-bold text-fg4 opacity-0 group-hover:opacity-100 hover:text-orange2 hover:opacity-100 hover:underline`}>
      #
    </Link>
  </div>
)

const mdxComponents: MDXComponents = {
  h1: ({ id, className, children }) => <Header id={id} h='h1' className={className}>{children}</Header>,
  h2: ({ id, className, children }) => <Header id={id} h='h2' className={className}>{children}</Header>,
  h3: ({ id, className, children }) => <Header id={id} h='h3' className={className}>{children}</Header>,
  p: ({ children }) => <p className='mb-8'>{children}</p>,
  a: ({ href, children }) => <Link href={href as string} className='text-blue1 underline hover:text-orange2'>{children}</Link>,
  ul: ({ children }) => <ul className='mb-8 mx-4 list-disc list-inside'>{children}</ul>,
  code: ({ children }) => <code className="text-sm font-normal">{children}</code>
}

const Post = ({ post }: { post: Post }) => {
  const Content = useMDXComponent(post.body.code)

  return (
    <div className='post-content font-normal text-sm text-fg3'>
      <Content components={mdxComponents} />
    </div>
  )
}

export default Post