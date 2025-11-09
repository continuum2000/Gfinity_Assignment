<script setup lang="ts">
import type { fifaCard } from '@payload-types';

const { data: fifaCards } = await useFetch<fifaCard[]>('/api/payload/fifaCards')

onMounted(() => {
    document.body.style.backgroundImage = 'linear-gradient(to top, #37373d, 90%, rgba(0, 0, 0, 0.7))'
})

let currentSort = ''

function sortBy(input: string) {
    //I handle the OVR, POS and Type columns together since they do not fall under the "statistics" object
    if (currentSort == input) {
        if (input == 'rating') {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return a[input] - b[input]
            })
        } else if (input == 'name' || input == 'position') {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return a[input].localeCompare(b[input])
            })
            //I had to try handle the data that had no statistics. I chose to just treat its values as 0
        } else if (['dribbling', 'pace', 'shooting', 'passing', 'defense', 'physical'].includes(input)) {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return (a.statistics[input].average || 0) - (b.statistics[input].average || 0)
            })
        } else {
            // Im not really sure how I should order these im not familiar with the meaning of the values (or soccer in general lol). currently just went off
            // of their alphabetical sorting.
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return (a.workRatesAttacking[0] + a.workRatesDefensive[0]).localeCompare(b.workRatesAttacking[0] + b.workRatesDefensive[0])
            })
        }
        currentSort = ''
    } else {
        if (input == 'rating') {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return b[input] - a[input]
            })
        } else if (input == 'name' || input == 'position') {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return b[input].localeCompare(a[input])
            })
        } else if (['dribbling', 'pace', 'shooting', 'passing', 'defense', 'physical'].includes(input)) {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return (b.statistics[input].average || 0) - (a.statistics[input].average || 0)
            })
        } else {
            fifaCards.value?.sort((a: fifaCard, b: fifaCard) => {
                return (b.workRatesAttacking[0] + b.workRatesDefensive[0]).localeCompare(a.workRatesAttacking[0] + a.workRatesDefensive[0])
            })
        }
        currentSort = input
    }
}

</script>
<template>
    <div class="max-w-screen-lg mx-auto bg-black pt-[50px] ">
        <div class="mx-auto">
            <div class="h-screen max-w-[1024px] overflow-auto mx-auto bg-[#101010]">
                <table class="md:mx-auto border-collapse ">
                    <thead class="h-[44px] bg-black lg:bg-[#101010] sticky top-0 z-[99]">
                        <tr>
                            <th @click="sortBy('name')" class="text-[12px] text-left sticky top-0 z-[99] min-w-[150px]">
                                <div class="py-2 border-r border-r-[#606060]">Name</div>
                            </th>
                            <th @click="sortBy('rating')" class="text-[12px] min-w-[66px] ">
                                <div class="py-2 border-r border-r-[#606060]">OVR</div>
                            </th>
                            <th @click="sortBy('position')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">POS</div>
                            </th>
                            <th @click="sortBy('position')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">Type</div>
                            </th>
                            <th @click="sortBy('pace')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">PAC</div>
                            </th>
                            <th @click="sortBy('shooting')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">SHO</div>
                            </th>
                            <th @click="sortBy('passing')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">PAS</div>
                            </th>
                            <th @click="sortBy('dribbling')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">DRI</div>
                            </th>
                            <th @click="sortBy('defense')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">DEF</div>
                            </th>
                            <th @click="sortBy('physical')" class="text-[12px] min-w-[66px]">
                                <div class="py-2 border-r border-r-[#606060]">PHY</div>
                            </th>
                            <th @click="sortBy('WR')" class="text-[12px] min-w-[66px]">
                                <div class="py-2">WR</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="space-y-4 font-bold ">
                        <table-entry v-for="card of fifaCards" :key="card.id" :card="card" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
th div::after {
    content: "";
    background-image: url("/public/svg/tableArrows.svg");
    background-repeat: no-repeat;
    width: 10px;
    height: 11.5px;
    display: inline-block;
    margin-left: 2px;
}
</style>