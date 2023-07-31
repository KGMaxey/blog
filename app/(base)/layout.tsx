import SideBar from "@/components/sidebar"

const BaseLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='flex justify-start mt-8'>
      <div className='flex-1 mt-8 md:pr-16'>
        {children}
      </div>
      <SideBar />
    </div>
  )
}

export default BaseLayout