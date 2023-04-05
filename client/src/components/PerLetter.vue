<script>
import { mapActions } from 'pinia';
import { usePoemStore } from '../stores/poem';

export default {
    props: ['letter'],
    methods: {
        ...mapActions(usePoemStore, ['poetryById']),
        handlePoetryById() {
            this.poetryById(this.letter.id)
        }
    }
}
</script>

<template>
    <div @click.prevent="handlePoetryById"
        class="card w-80 bg-primary text-primary-content cursor-pointer hover:bg-neutral-800 hover:w-92">
        <div>
            <p class="card-body h-[60vh]" style="-webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;">{{ this.letter.content }}</p>
        </div>
    </div>
</template>