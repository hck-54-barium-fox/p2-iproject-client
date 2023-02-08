<script>
export default {

}
</script>

<template>
    <!-- welcome page -->

    <section class="ml-32">
        <h1 class="text-4xl text-center font-bold mt-[25vh]">Always Have Something To Say To Your Loved Ones</h1>
        <h2 class="text-2xl text-center mt-[30px]">We generate the best poem from all of histories. By legends
            like
            Shakespeare or Hemingway and more.</h2>
        <h2 class="text-2xl text-center mt-[10px]">We also produce best choosen Hollywood movie quotes from The
            Godfather to Parasite.</h2>
        <h2 class="text-2xl text-center mt-[10px]">With tons of features that will be waiting for you, join us now!</h2>
        <div class="container my-[6vh] ml-[80px]">
            <div class="container text-center">
                <button class="btn btn-outline mr-10 shadow-md" @click="this.$router.push('/generatepoem')">Generate A Poem Feature</button>
                <button class="btn btn-outline ml-10 shadow-md" @click="this.$router.push('/quotegenerate')">Random Quotes Feature</button>
            </div>
        </div>
    </section>
</template>