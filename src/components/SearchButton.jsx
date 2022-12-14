import React from 'react'

function SearchButton() {
  return (
    <div>
        <form>   
            <label for="default-search" 
            className="mb-2 text-sm font-medium 
            text-gray-900 sr-only 
            dark:text-gray-300">
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0
                left-0 items-center pl-3 pointer-events-none">
                  
                <svg aria-hidden="true" 
                className="w-5 h-5 
                   dark:text-gray-400" 
                    fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path>
                  </svg>
                </div>
                
                <input type="search" 
                    id="default-search" 
                    className="mt-10 form-control block p-4 pl-10 w-[30rem] text-sm 
                    text-gray-900"
                    placeholder="Search Courses" required=""
                    />
                  {/* <input type="text" id="voice-search" class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required /> */}
        {/* <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3"></button> */}
                <button type="submit" 
                      className="text-white absolute right-[70rem]
                      bottom-2.5 bg-blue-700 hover:bg-blue-800 
                      focus:ring-4 focus:outline-none focus:ring-blue-300 
                      font-medium  text-sm px-4 py-2 dark:bg-blue-600 
                      dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchButton