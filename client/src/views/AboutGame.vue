<script>
import Card from '../components/Card.vue'
// import { mapActions, mapState } from 'pinia'
// import { useFoodStore } from '../stores/food'
export default {
    components: {
        Card,
    },
    data() {
        return {
        }
    },
    // created(){
    //     this.fetchFood()
    //     this.getPage()
    //     this.fetchWishlist()
    // },
    // methods: {
    //     ...mapActions(useFoodStore, ['fetchFood', 'getPage', 'addWishlist', 'fetchWishlist',])
    // },
    // computed: {
    //     ...mapState(useFoodStore, ['foodData', 'totalPage'])
    // },
    // watch: {
    //     '$route.query'(){
    //        this.fetchFood(this.$route.query)
    //     }
    // }
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            About The Game
        </div>
    </div>
    <div class="d-flex justify-content-center pe-5 me-5 pt-5 ps-5 ms-5" style="font-size: large; text-align: justify;">
        <p>
            <b>Enter the Arena!</b> From the creators of Clash of Clans comes a real-time multiplayer game starring the
            Royales, your favorite Clash characters and much, much more.

            Collect and upgrade dozens of cards featuring the Clash of Clans troops, spells and defenses you know and
            love, as well as the Royales: Princes, Knights, Baby Dragons and more. Knock the enemy King and Princesses
            from their towers to defeat your opponents and win Trophies, Crowns and glory in the Arena. Form a Clan to
            share cards and build your very own battle community.

            Lead the Clash Royale Family to victory!
        </p>
    </div>
    <div class="d-flex justify-content-center pt-5 mb-5">
        <iframe width="975" height="500" src="https://www.youtube.com/embed/HAB6OPF9EhQ" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
    <div class="d-flex justify-content-center pe-5 me-5 ps-5 ms-5" style="font-size: large; text-align: justify;">
        <b>FEATURES</b>
    </div>
    <div class="d-flex justify-content-center pe-5 me-5 pt-2 ps-5 ms-5" style="font-size: large; text-align: justify;">
        <ul>
            <li>
                Earn chests to unlock rewards, collect powerful new cards and upgrade existing ones
            </li>
            <li>
                Destroy opponent’s towers and win Crowns to earn epic Crown chests
            </li>
            <li>
                Build and upgrade your card collection with the Clash Royale Family along with dozens of your favorite
                Clash
                troops, spells and defenses
            </li>
            <li>
                Construct your ultimate Battle Deck to defeat your opponents
            </li>
            <li>
                Progress through multiple Arenas all the way to the top
            </li>
            <li>
                Form a Clan to share cards and build your very own battle community
            </li>
            <li>
                Challenge your Clanmates and friends to a private duel
            </li>
            <li>
                Learn different battle tactics by watching the best duels on TV Royale
            </li>
        </ul>
    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <img src="https://clashroyale.com/uploaded-images/5.jpg?mtime=20151215130402"
        style="width: 350px"
        />
        <img src="https://clashroyale.com/uploaded-images/3.jpg?mtime=20151215130402"
        style="width: 350px"
        />
        <img src="https://clashroyale.com/uploaded-images/2.jpg?mtime=20151215130403"
        style="width: 350px"
        />
    </div>
</template>