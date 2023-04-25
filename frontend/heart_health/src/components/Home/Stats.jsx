import React from 'react'

export const Stats = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">

      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Model Statistics</h2>
  
        {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
      </div>

  
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">

        <div class="flex flex-col items-center md:p-4">
          <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">15000</div>
          <div class="text-sm font-semibold sm:text-base">Training Images</div>
        </div>

        <div class="flex flex-col items-center md:p-4">
          <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">~90%</div>
          <div class="text-sm font-semibold sm:text-base">Validation Accuracy</div>
        </div>
  

        <div class="flex flex-col items-center md:p-4">
          <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">0.5sec</div>
          <div class="text-sm font-semibold sm:text-base">Response Time</div>
        </div>

        <div class="flex flex-col items-center md:p-4">
          <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">A couple</div>
          <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
        </div>

      </div>
    </div>
  </div>
  )
}
