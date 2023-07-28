import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

const SideBar = () => {
  const recentlyUpdated = allPosts.slice(0, 5).map(post => {
    return {
      title: post.title,
      href: post.url
    }
  })

  // const sortedTags = allPosts.sort((a, b) => a.)

  const tagMap = allPosts.flatMap(post => post.tags ?? []).reduce((acc, val) => {
    const current = !!acc[val] ? acc[val] : 0
    return { ...acc, [val]: current + 1 }
  }, {} as { [tag: string]: number })


  return (
    <div className='transition-all hidden md:block w-[--sidebar] 2xl:w-[--sidebar-xl]'>
      <div className='border-l border-fg4 pl-4 my-8'>
        <div className="text-fg font-medium opacity-90">Recently Updated</div>
        <ul className="pl-2 py-1">
          {
            recentlyUpdated.map(recent => {
              return (
                <li key={recent.title} className="overflow-hidden text-ellipsis">
                  <Link href={recent.href} className="text-sm text-fg opacity-80 whitespace-nowrap hover:opacity-100 hover:text-blue1 hover:underline">{recent.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='block border-l border-fg4 pl-4 my-8 sticky top-8'>
        <div className="text-fg font-medium opacity-90">Trending Tags</div>
        <div className="flex flex-wrap pl-2 py-1">
          {
            Object.keys(tagMap).sort((a, b) => tagMap[b] - tagMap[a]).map(tag => {
              return (
                <div key={tag} className="border border-fg4 px-1 m-1 opacity-80 hover:opacity-100 hover:bg-blue1 hover:text-bg hover:underline hover:border-blue2">
                  <Link href={'/'} className="text-sm whitespace-nowrap">{tag}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar