'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import BreadCrumbs from "./breadcrumbs"

const TopBar = ({ handleMobileClick }: { handleMobileClick: () => void }) => {
  return (
    <div className="flex justify-between items-center w-full h-12">
      <div className="overflow-hidden hidden md:block">
        <BreadCrumbs />
      </div>
      <div className="block md:hidden">
        <button onClick={handleMobileClick}>
          <FontAwesomeIcon icon={faBars} size='lg' />
        </button>
      </div>
      {/* TODO: KGM - Add site title for mobile view and change search bar to search icon */}
      <div className="flex items-center w-40 lg:w-[--sidebar] 2xl:w-[--sidebar-xl]">
        <input placeholder="Search..." type="search" aria-label="search" autoComplete="off" className="search-input w-40 bg-transparent text-fg text-1 color-fg border border-fg4 px-1 py-1 focus:outline-none"></input>
      </div>
    </div>
  )
}

export default TopBar