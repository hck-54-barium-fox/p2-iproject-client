<script>
export default {
    props: ['label']
}
</script>

<template>
    <button class="signin mb-3" type="submit">{{ label }}</button>
</template>

<style>
.signin {
    color: white;
}
</style>