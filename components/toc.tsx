'use client'

import { Post } from "@/.contentlayer/generated"
import { useEffect } from "react"
import * as tocbot from 'tocbot'

const TOC = ({ post }: { post: Post }) => {

  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post-content',
      headingSelector: 'h1, h2, h3',
      hasInnerContainers: true,
      extraLinkClasses: 'text-sm whitespace-nowrap opacity-60 hover:text-blue1 hover:opacity-100 hover:text-orange2',
      activeLinkClass: 'text-blue1 underline toc-selected',
      listItemClass: 'overflow-hidden text-ellipsis my-1',
      listClass: 'pl-2',
      scrollSmooth: false
    })
  })

  return (
    <div className='transition-all grow-0 shrink-0 basis-auto hidden md:block w-[--sidebar] 2xl:w-[--sidebar-xl]'>
      <div className='text-fg border-l border-fg4 pl-4 pb-2 my-8 sticky top-8'>
        <div className="font-medium text-fg">Contents</div>
        <div className='toc' />
      </div>
    </div>
  )
}

export default TOC