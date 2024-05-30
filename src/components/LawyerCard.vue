<template>
    <div class="drop-shadow-lg card z-10 relative overflow-hidden cursor-pointer max-w-56 h-80 rounded-xl flex bg-no-repeat bg-cover" :style="{ backgroundImage: 'url(' + lawyerPhoto + ')' }">
        <div class="card-content z-30 text-gray-800 backdrop-blur bg-gradient-to-t  from-white/70 to-white/10 w-full py-2 self-end text-center">
            <h2 class="font-bold text-2xl leading-none">{{ lawyerName }}</h2>
            <ul class="contextual-data flex justify-between align-middle gap-1 mt-3">
                <li class="flex flex-col justify-between"><p class="leading-none text-2xs">Onay Bekleyen</p><p class="text-2xl leading-none font-bold">{{ waitingApproveCount }}</p></li>
                <li class="flex flex-col justify-between"><p class="leading-none text-2xs">Yaklaşan</p><p class="text-2xl leading-none font-bold">{{ approachingCount }}</p></li>
                <li class="flex flex-col justify-between"><p class="leading-none text-2xs">Tamamlanan</p><p class="text-2xl leading-none font-bold">{{ completedCount }}</p></li>
                <li class="flex flex-col justify-between"><p class="leading-none text-2xs">Tamamlama Oranı</p><p class="text-2xl leading-none font-bold">%{{ successRatio }}</p></li>
            </ul>
        </div>
        <div class="w-full h-24 bg-white/25 blur-sm absolute bottom-0 z-20"></div>

    </div>
</template>
<script setup>
    const props = defineProps({
        lawyerPhoto: String,
        lawyerName: String,
        waitingApproveCount: Number,
        approachingCount: Number,
        completedCount: Number,
        successRatio: Number
    });
</script>
<style scoped>
</style>