<script setup lang="ts">
import type { fifaCard } from '@payload-types';

defineProps<{ card: fifaCard }>()
</script>
<template>
    <tr data-testid="dataRow" class="h-[56px] text-center">
        <td class="text-left sticky left-0 z-[2] bg-[#101010] text-[10px]">
            <NuxtLink :to="'/' + card.slug">{{ card.name }}</NuxtLink>
        </td>
        <td>
            <div class="py-2 w-[45px] mx-auto bg-white rounded-md text-black text-[12px]">{{ card.rating }}</div>
        </td>
        <td class="text-[12px]">{{ card.position }}</td>
        <td class="text-[12px]">{{ card.position }}</td>
        <td v-for="stat of card.statistics" class="p-2">
            <div class=" mx-auto outline outline-1 rounded-md text-[12px] py-2 w-[45px]">
                {{ stat.average }}
            </div>
        </td>
        <td class="text-[16px]">{{ card.workRatesAttacking[0] }} \ {{ card.workRatesDefensive[0] }}</td>
    </tr>
</template>