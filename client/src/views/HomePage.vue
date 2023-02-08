<script>
import ShoeCard from "../components/ShoeCard.vue";
import { useAppStore } from "../stores/app";
import { mapState, mapActions } from "pinia";

export default {
    components: {
        ShoeCard
    },
    computed: {
        ...mapState(useAppStore, ['listShoes']),
    },
    methods: {
        ...mapActions(useAppStore, ['fetchShoes']),
    },
    created() {
        this.fetchShoes()
    },
};
</script>

<template>
    <div class="container" style="margin-top: 80px; margin-bottom: 80px;">
        <div class="d-flex flex-wrap">
            <!-- SHOE CARD -->
            <ShoeCard v-for="shoe in listShoes" :key="shoe.id" :shoe="shoe" />
        </div>
    </div>
</template>