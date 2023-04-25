import React from 'react'

const Faq = () => {
  return (
    <>
    <div class="bg-gray-50 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Please refer to this section if you have any doubts. You are free to contact us if you need any more help !</p>
    </div>


    <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">

      <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">How accurate are results of the model?</h3>
        <p class="text-gray-500">By using state-of-the art model we could achieve an accuracy of more than 90%</p>
      </div>

      <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">What types of Disease can be detected by the model?</h3>
        <p class="text-gray-500">There are 14 different diseases that can be detected by the model including Cardiomegaly, Lung Opacity, Nodule/Mass, Pneumothorax and Pulmonary fibrosis</p>
      </div>

      <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Is there any additional support or consultation provided with the report?</h3>
        <p class="text-gray-500">We can have some amount of presciptive analysis provided by mmedical professionals after the report is generated.</p>
      </div>

      {/* <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Is support available?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>

      <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">How does one upgrage a plan?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>

      <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Which payment methods are available?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div> */}

    </div>
  </div>
</div>
</>
  )
}

export default Faq