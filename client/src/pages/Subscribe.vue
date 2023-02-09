<script>
import { useAppStore } from "../stores/app";
import { mapActions,mapState } from "pinia";
import Navbar from "../components/Navbar.vue"

export default {
    components: {
        Navbar,
    },
    methods: {
        ...mapActions(useAppStore,['getTransaction'])
    },
}
</script>
<template>
    <div class="flex min-h-screen pt-[30px] px-[40px] bg-[#1c100b]">
        <Navbar />
        <div class="min-w-full">
            <p
                class="text-white text-[20px] leading-[40px] font-semibold justify-center"
            >
                Your Subscription
            </p>
            <div class="mt-[20px] flex justify-center items-center gap-[20px]">
                <div
                    key="3"
                    class="w-[30%] bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
                >
                    <div class="pt-[15px] px-[25px] pb-[25px]">
                        <div class="flex justify-end">
                            <div
                                class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]"
                            >
                                <p
                                    class="text-[#00153B] text-[12px] leading-[28px] font-bold"
                                >
                                    Pro
                                </p>
                            </div>
                        </div>

                        <div>
                            <p
                                class="text-[#00153B] text-[19px] leading-[24px] font-bold"
                            >
                                Premium
                            </p>
                            <p
                                class="text-[#00153B] text-[50px] leading-[63px] font-bold"
                            >
                                Rp.200.000,00
                            </p>
                        </div>

                        <div>
                            <p
                                class="text-[#717F87] text-[18px] leading-[28px] font-medium"
                            >
                                100% Eyegasm
                            </p>
                        </div>
                    </div>

                    <div class="pt-[25px] px-[25px] pb-[35px]">
                        <div>
                            <p
                                class="text-[#717F87] text-[14px] leading-[24px] font-medium"
                            >
                                Unlock Astronomy picture of the day
                            </p>
                            <p
                                class="text-[#717F87] text-[14px] leading-[24px] font-medium"
                            >
                                3D model (Coming soon)
                            </p>
                        </div>

                        <div class="mt-[25px]">
                            <button
                                @click.prevent="getTransaction()"
                                class="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                                id="pay-button"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
