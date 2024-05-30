<template>
  <div class="bg-gray-100 flex p-8">
    <div class="max-w mx-auto bg-white rounded-lg shadow-md p-4">
        <!-- Day Row Template -->
         <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Pazartesi</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem] ">13:00 - 15:00</span>
                  </div>                 
                </div>
                </div>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>
        </div>
        <!-- Repeat similar structure for other days -->
         <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Salı</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
                </div>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>
        </div>
        <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Çarşamba</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
                </div>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>
        </div>
          <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Perşembe</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
            </div>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>
        </div>
          <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Cuma</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
            </div>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>

        </div>
        <div class="flex items-center mb-3 w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="w-24">Cumartesi</span>
            <div class="flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
                </div>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
                <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>
        </div>
            <div class="flex items-center w-[54rem] p-2">
            <input type="checkbox" class="mr-4">
            <span class="opacity-40 line-through w-24">Pazar</span>
            <div class="opacity-50 line-through flex-grow flex justify-between items-center">
                <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-12">
                    <!-- Time interval block -->
                     <div class="col-start-2 bg-blue-500 rounded-lg flex items-center justify-center  w-[15rem]">
                      <span class="text-white text-[0.875rem]">07:00 - 12:00</span>
                  </div>
                    <div class="col-start-8 bg-blue-500 rounded-lg flex items-center justify-center w-[6rem]">
                      <span class="text-white text-[0.875rem]">13:00 - 15:00</span>
                  </div>                 
                </div>
            </div>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10 mr-6"><span class="ri-add-line text-xl"></span></button>
            <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg w-10 h-10"><span class="ri-restart-fill text-xl"></span></button>

        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style>

</style>