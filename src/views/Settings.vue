<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        <periodic-schedule class="col-span-2"></periodic-schedule>

        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b border-gray-300 rounded-t">
                <span
                    class="mb-2"
                >Yeni Blog Yazısı</span>
            </h3>
            <FlowbiteComp
            class="mt-4"/>
        </div>
  
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b border-gray-300 rounded-t">
                <span
                    class="mb-2"
                >Yeni Blog Yazısı</span>
            </h3>
            <FlowbiteComp
            class="mt-4"/>
        </div>
    </div>

  
</template>

<script setup>
import FlowbiteComp from '../components/FlowbiteComp.vue';
import PeriodicSchedule from '../components/PeriodicSchedule.vue';

</script>
