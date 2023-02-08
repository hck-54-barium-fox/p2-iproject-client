<script>
    import { def } from '@vue/shared';

    export default{
        props: ['label', 'size']
    }
</script>

<template>
    <button v-if="size === 'large'" type="submit" class="bg-btnLoginRegister text-white text-xl font-bold w-full h-14 rounded-3xl mt-2">
        {{ label }}
    </button>
    <button v-else-if="size === 'small'" type="submit" class="bg-slate-900 text-white font-bold h-11 rounded-3xl p-2">
        {{ label }}
    </button>
    <button v-else="size === 'smallCancel'" type="submit" class="text-gray-100 font-bold w-full h-10 border-2 rounded-3xl mt-[2px] ">
        {{ label }}
    </button>
</template>