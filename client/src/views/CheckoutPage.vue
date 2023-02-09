<script>
import TableRow from "../components/TableRow.vue";
import { useAppStore } from "../stores/app";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
    components: {
        TableRow
    },
    data() {
        return {
            origin: '154',
            destination: '',
            weight: 1,
            courier: 'jne'
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['listMyCart', 'listCities', 'ongkir']),

        totalProductPrice() {
            return this.listMyCart.reduce((acc, shoe) => {
                acc += shoe.totalPrice
                return acc
            }, 0)
        },

    },
    methods: {
        ...mapActions(useAppStore, ['fetchMyCart', 'checkOngkir', 'fetchCities', 'processPayment']),

        handleLogin() {
            this.doLogin({
                email: this.email,
                password: this.password
            })
        },

        handleCheckOngkir() {
            this.checkOngkir({
                origin: this.origin,
                destination: this.destination,
                weight: this.weight,
                courier: this.courier
            })
        },

        handleProcessPayment() {
            this.processPayment()
        }
    },
    created() {
        this.fetchMyCart(),
            this.ongkir = 0
    },
};
</script>

<template>
    <main class="container d-flex gap-4">
        <!-- ORDER DETAIL -->
        <div class="p-3 bg-body rounded shadow-lg w-75" style="margin-top: 80px; height: fit-content">
            <h4 class="border-bottom pb-2 mb-0">My Order Detail</h4>
            <!-- PRODUCT ROW -->
            <div class="d-flex text-muted pt-3">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price (each)</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Total Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow v-for="shoe in listMyCart" :key="shoe.id" :shoe="shoe" />
                    </tbody>
                </table>
            </div>
            <!-- END OF PRODUCT ROW -->

            <small class="d-block text-end mt-3">
                <a @click="this.$router.push('/')" href="">Back to home</a>
            </small>
        </div>
        <!-- END OF ORDER DETAIL -->

        <div class="w-25" style="align-items: start;">
            <!-- CHECK ONGKIR SECTION -->
            <div class="p-3 bg-body rounded shadow-lg" style="height: fit-content; margin-top: 80px;">
                <div class="d-flex align-items-center gap-2 mb-2 border-bottom pb-2">
                    <img src="../assets/truck.svg" alt="">
                    <h5 class="my-0">Check Ongkir</h5>
                </div>
                <div class="d-flex align-items-center gap-2 mb-4">
                    <img src="../assets/loc.svg" alt="">
                    <p class="my-0">Shipping from <strong>Jakarta</strong></p>
                </div>

                <!-- SELECT OPTION CITY -->
                <label class="sr-only my-2">City Destination</label>
                <select v-model="destination" class="form-select mb-3" aria-label=".form-select-lg example" required>
                    <option hidden selected disabled>select city</option>
                    <option value="457">Jakarta</option>
                    <option value="54">Bekasi</option>
                    <option value="78">Bogor</option>
                    <option value="23">Bandung</option>
                    <option value="474">Papua</option>
                </select>
                <!-- END OF SELECT OPTION CITY -->

                <!-- SELECT OPTION KURIR -->
                <div class="d-flex justify-content-center">
                    <p>Current supported courier service</p>
                </div>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logo-jne.jpg" style="width: 80px;">
                </div>
                <!-- END OF SELECT OPTION KURIR -->
                <div class="d-flex justify-content-center my-4">
                    <button @click.prevent="handleCheckOngkir" class="btn btn-primary">Check Ongkir</button>
                </div>

                <h6>Your delivery cost: {{ ongkir.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</h6>
            </div>
            <!-- END OFCHECK ONGKIR SECTION -->

            <!-- CHECK OUT SECTION -->
            <div class="my-4 p-3 bg-body rounded shadow-lg" style="height: fit-content;">
                <h5 class="border-bottom pb-2 mb-3">Order Summary</h5>
                <h6>Your product cost: {{ totalProductPrice.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</h6>
                <h6>Your delivery cost: {{ ongkir.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</h6>
                <hr>
                <h6 style="margin-top: 40px;">Total Cost: {{ (totalProductPrice + ongkir).toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</h6>
                <div class="d-flex justify-content-center mt-4">
                    <button @click.prevent="processPayment" class="btn btn-primary">Process Payment</button>
                </div>
            </div>
            <!-- END OF CHECK OUT SECTION -->
        </div>

    </main>
</template>