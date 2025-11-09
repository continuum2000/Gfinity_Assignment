<script setup lang="ts">
import type { fifaCard } from '@payload-types';
const route = useRoute()
const { data: cardData } = await useFetch<fifaCard>('/api/payload/fifaCards', { query: { slug: route.params.slug } })

onMounted(() => {
    document.body.style.backgroundImage = 'linear-gradient(to left, #37373d, 90%, rgba(0, 0, 0, 0.7))'
})

</script>

<template id="background">
    <div v-if="cardData" class="mx-auto bg-black max-w-screen-lg h-full pt-[66px]">
        <div
            class="mx-6 bg-gradient-to-b from-[#0F0F0F] via-[#161616] via-[52%] to-[#0D0D0D] rounded-[12px] lg:flex lg:space-x-[10px]">
            <img class="w-[182px] h-[258px] lg:mr-[54px] lg:ml-[15px] mx-auto mb-[23px] lg:pb-0"
                :src="cardData.cardImage.url" />
            <!-- 
            I would have prefered to do something like this for the columns so I would not need to copy paste so much but I would
            have to match the keys to an appropriate display name value otherwise things like "Sprint Speed" would show as sprintSpeed
            and i'm not sure if there is an efficient way to accomplish that

            <div class="w-[100px] py-[10px]">
                <div v-for="(value, key) in cardData.statistics.pace">
                    <div v-if="key == 'average'" class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>PAC</div>
                            <div>{{ cardData.statistics.pace.average }}</div>
                        </div>
                    </div>
                    <div v-else class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">{{ key }}</div>
                        <div class="text-[14px]">{{ value }}</div>
                    </div>
                </div>
            </div>
            
            -->
            <div class="flex justify-center lg:space-x-[10px]">
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>PAC</div>
                            <div>{{ cardData.statistics.pace.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Acceleration</div>
                        <div class="text-[14px]">{{ cardData.statistics.pace.acceleration }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Sprint Speed</div>
                        <div class="text-[14px]">{{ cardData.statistics.pace.sprintSpeed }}</div>
                    </div>
                </div>
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>SHO</div>
                            <div>{{ cardData.statistics.shooting.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Finishing</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.finishing }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Long Shot</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.longShot }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Penalties</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.penalties }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Positioning</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.positioning }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Shot Power</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.shotPower }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Volleys</div>
                        <div class="text-[14px]">{{ cardData.statistics.shooting.volleys }}</div>
                    </div>
                </div>
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>PAS</div>
                            <div>{{ cardData.statistics.passing.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Crossing</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.crossing }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Cruve</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.curve }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Free Kick</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.freeKick }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Long Passing</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.longPassing }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Short Passing</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.shortPassing }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Vision</div>
                        <div class="text-[14px]">{{ cardData.statistics.passing.vision }}</div>
                    </div>
                </div>


            </div>
            <div class="flex justify-center lg:space-x-[10px]">
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>DRI</div>
                            <div>{{ cardData.statistics.dribbling.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Agility</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.agility }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Balance</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.balance }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Ball Control</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.ballControl }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Composure</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.composure }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Dribbling</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.dribbling }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Reactions</div>
                        <div class="text-[14px]">{{ cardData.statistics.dribbling.reactions }}</div>
                    </div>
                </div>
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>DEF</div>
                            <div>{{ cardData.statistics.defense.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Def Awareness</div>
                        <div class="text-[14px]">{{ cardData.statistics.defense.defAwareness }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Heading</div>
                        <div class="text-[14px]">{{ cardData.statistics.defense.heading }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Interceptions</div>
                        <div class="text-[14px]">{{ cardData.statistics.defense.interceptions }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Sliding Tackle</div>
                        <div class="text-[14px]">{{ cardData.statistics.defense.slidingTackle }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Standing Tackle</div>
                        <div class="text-[14px]">{{ cardData.statistics.defense.standingTackle }}</div>
                    </div>
                </div>
                <div class="w-[100px] py-[10px]">
                    <div class="border-t border-b border-white py-[6px]">
                        <div class="flex justify-between font-bold text-[14px]">
                            <div>PHY</div>
                            <div>{{ cardData.statistics.physical.average }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Aggression</div>
                        <div class="text-[14px]">{{ cardData.statistics.physical.aggression }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Jumping</div>
                        <div class="text-[14px]">{{ cardData.statistics.physical.jumping }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Stamina</div>
                        <div class="text-[14px]">{{ cardData.statistics.physical.stamina }}</div>
                    </div>
                    <div class="flex justify-between font-bold  pt-[16px]">
                        <div class="text-[10px] my-auto">Strength</div>
                        <div class="text-[14px]">{{ cardData.statistics.physical.strength }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pl-[45px] text-[36px] font-bold pt-8 lg:pt-0">
            {{ cardData.name }} <span
                class="text-[14px] text-[#848282] border-[#848282] pb-[3px] border-b border-dashed">
                <NuxtLink :to="'/'">View
                    all
                    cards</NuxtLink>
            </span>
        </div>
        <div class="w-full mt-[40px] lg:flex block px-[45px] lg:h-[60px] space-y-[22px] lg:space-y-0 bg-black">
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 border-[#44444B] lg:pr-[40px]">
                <div class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px]">
                    <div class=" font-bold lg:text-[#848282]">Club</div>
                    <div>{{ cardData.club }}</div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class="font-bold lg:text-[#848282] ">League</div>
                    <div>{{ cardData.league }}</div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class="font-bold lg:text-[#848282] ">Nation</div>
                    <div>{{ cardData.nation }}</div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class="font-bold lg:text-[#848282] ">Strong Foot</div>
                    <div>{{ cardData.strongFoot }}</div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class="font-bold lg:text-[#848282] ">Age</div>
                    <div>{{ cardData.age }}</div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 min-w-max border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class="font-bold lg:text-[#848282] my-auto">Height</div>
                    <!-- 
                    Converting feet/inch to cm but turns out it was only the one record that didnt have cm
                    <div class="text-[14px]">{{ ((Number(cardData.height.split(`'`)[0]) * 30.484) +
                        Number(cardData.height.split(`'`)[1]) * 2.54).toFixed(0) }}cm | {{ cardData.height }}
                    </div> -->
                    <div class="">{{ cardData.height }}
                    </div>
                </div>
            </div>
            <div class="lg:border-r lg:border-b-0 border-b-2 pb-[17px] lg:pb-0 min-w-max border-[#44444B] lg:pr-[18px]">
                <div
                    class="lg:text-[14px] text-[20px] flex flex-row lg:flex-col justify-between h-full lg:px-[17px] min-w-max py-4 lg:py-0">
                    <div class=" font-bold lg:text-[#848282]">Workrates</div>
                    <div>{{ cardData.workRatesDefensive }} / {{ cardData.workRatesAttacking }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-black" v-else>
        No Data for card found
    </div>
</template>