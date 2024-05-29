<template>
    <section class="grid  grid-cols-[repeat(auto-fill,minmax(210px,_1fr))] gap-4">
        <LawyerCard
            v-for="lawyer in lawyers"
            :key="lawyer.id"
            :lawyerPhoto="lawyer.photo"
            :lawyerName="lawyer.name"
            :waitingApproveCount="lawyer.waitingApproveCount"
            :approachingCount="lawyer.approachingCount"
            :completedCount="lawyer.completedCount"
            :successRatio="lawyer.successRatio"
        />
    </section>
</template>
<script setup>
    import LawyerCard from '../components/LawyerCard.vue';
    import { ref } from 'vue';
    
    const lawyers = ref([
        {
            id: 1,
            photo: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/355382710_750604147067322_2070113516506872817_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M0AqpBJOiA4Q7kNvgGG_FKN&_nc_ht=scontent-ist1-1.xx&oh=00_AYCRuGPuuS8WADJenCgNl8kNmxcTiihvL6QbFNhE4nMXug&oe=665BA541',
            name: 'John Doe',
            waitingApproveCount: 2,
            approachingCount: 5,
            completedCount: 10,
            successRatio: 70
        },
        {
            id: 2,
            photo: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/355382710_750604147067322_2070113516506872817_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M0AqpBJOiA4Q7kNvgGG_FKN&_nc_ht=scontent-ist1-1.xx&oh=00_AYCRuGPuuS8WADJenCgNl8kNmxcTiihvL6QbFNhE4nMXug&oe=665BA541',
            name: 'Jane Doe',
            waitingApproveCount: 1,
            approachingCount: 3,
            completedCount: 5,
            successRatio: 60
        },
        {
            id: 3,
            photo: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/355382710_750604147067322_2070113516506872817_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M0AqpBJOiA4Q7kNvgGG_FKN&_nc_ht=scontent-ist1-1.xx&oh=00_AYCRuGPuuS8WADJenCgNl8kNmxcTiihvL6QbFNhE4nMXug&oe=665BA541',
            name: 'John Smith',
            waitingApproveCount: 3,
            approachingCount: 7,
            completedCount: 15,
            successRatio: 80
        },
        {
            id: 4,
            photo: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/355382710_750604147067322_2070113516506872817_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M0AqpBJOiA4Q7kNvgGG_FKN&_nc_ht=scontent-ist1-1.xx&oh=00_AYCRuGPuuS8WADJenCgNl8kNmxcTiihvL6QbFNhE4nMXug&oe=665BA541',
            name: 'Jane Smith',
            waitingApproveCount: 0,
            approachingCount: 2,
            completedCount: 3,
            successRatio: 50
        }
    ]);

</script>