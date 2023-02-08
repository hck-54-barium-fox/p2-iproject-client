<script>
export default {
    props: ['quote']
}
</script>

<template>
    <div>
        <h1 class="text-xl font-bold">{{ this.quote.movie }}</h1>
        <p class="mt-5">{{ this.quote.quote }}</p>
    </div>
</template>