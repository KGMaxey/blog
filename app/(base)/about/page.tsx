import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'KGMaxey.com - About'
}

const About = () => {
  return (
    <div>
      <h1 className="mb-8">Howdy!</h1>
      <div className="text-sm">
        <p className="mb-4">
          {`I'm Kevin! I'm a full-stack software engineer and homelab nerd. If you're visiting this blog, hopefully, you'll find something helpful! I am also writing this blog for a few more... selfish reasons. Effective communication through writing is a highly underrated skill for software developers. Writing allows us to share ideas, explain problems, and develop solutions. More importantly, it allows us to do it asynchronously saving us both time and effort. The problem is, writing is hard. It's a skill that takes practice and effort to hone into something actually useful.`}
        </p>
        <p className="mb-4">
          {`So, this blog is intended to be my excuse to get some practice writing about things I find fun and interesting. In the spirit of that async nature, it will also allow me to build up a portfolio of my knowledge and skills to point to for future job prospects. Like I said selfish reasons 😃.`}
        </p>
        <p className="mb-4">
          {`For anyone who made it this far, thanks for stopping by! Hopefully, my writing doesn't stink, or at a minimum, this helps me to get better. If you have questions about any of my projects, feel free to ask on any of my socials or any comment system I eventually get around to adding to the site.`}
        </p>
      </div>
    </div>
  )
}

export default About