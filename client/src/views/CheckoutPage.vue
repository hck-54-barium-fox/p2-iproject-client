<script>
</script>

<template>
    <main class="container d-flex gap-4">
        <!-- ORDER DETAIL -->
        <div class="my-3 p-3 bg-body rounded shadow-sm w-75">
            <h4 class="border-bottom pb-2 mb-0">My Order Detail</h4>
            <!-- PRODUCT ROW -->
            <div class="d-flex text-muted pt-3">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img class="rounded" width="100" height="100"
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ae95d399b7d446a4afd7ac7700d4d30d_9366/PREDATOR_FREAK_.3_FG_J_Black_FW7530_01_standard.jpg"
                                    alt="shoe_img">
                            </th>
                            <td>Adidas Apa Kek</td>
                            <td>3</td>
                            <td>Rp. 2000.000</td>
                        </tr>
                        <tr>
                            <th scope="row"><img class="rounded" width="100" height="100"
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ae95d399b7d446a4afd7ac7700d4d30d_9366/PREDATOR_FREAK_.3_FG_J_Black_FW7530_01_standard.jpg"
                                    alt="shoe_img">
                            </th>
                            <td>Adidas Apa Kek</td>
                            <td>3</td>
                            <td>Rp. 2000.000</td>
                        </tr>
                        <tr>
                            <th scope="row"><img class="rounded" width="100" height="100"
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ae95d399b7d446a4afd7ac7700d4d30d_9366/PREDATOR_FREAK_.3_FG_J_Black_FW7530_01_standard.jpg"
                                    alt="shoe_img">
                            </th>
                            <td>Adidas Apa Kek</td>
                            <td>3</td>
                            <td>Rp. 2000.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- END OF PRODUCT ROW -->

            <small class="d-block text-end mt-3">
                <a href="#">Back to home</a>
            </small>
        </div>
        <!-- END OF ORDER DETAIL -->

        <div class="w-25" style="align-items: start;">
            <!-- CHECK ONGKIR SECTION -->
            <div class="my-3 p-3 bg-body rounded shadow-sm" style="height: fit-content;">
                <div class="d-flex align-items-center gap-2 mb-2 border-bottom pb-2">
                    <img src="./assets/truck.svg" alt="">
                    <h5 class="my-0">Check Ongkir</h5>
                </div>
                <div class="d-flex align-items-center gap-2 mb-4">
                    <img src="./assets/loc.svg" alt="">
                    <p class="my-0">Shipping from <strong>Jakarta</strong></p>
                </div>

                <!-- SELECT OPTION CITY -->
                <label class="sr-only my-2">City Destination</label>
                <select class="form-select mb-3" aria-label=".form-select-lg example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <!-- END OF SELECT OPTION CITY -->

                <!-- SELECT OPTION KURIR -->
                <label class="sr-only my-2">Courier Service</label>
                <select class="form-select mb-4" aria-label=".form-select-lg example">
                    <!-- <option hidden disabled selected>-- please select ---</option> -->
                    <option value="jne">JNE</option>
                    <option value="pos">Pos Indonesia</option>
                    <option value="tiki">TIKI</option>
                </select>
                <!-- END OF SELECT OPTION KURIR -->

                <h6>Your delivery cost: Rp. 14.000</h6>
            </div>
            <!-- END OFCHECK ONGKIR SECTION -->

            <!-- CHECK OUT SECTION -->
            <div class="my-3 p-3 bg-body rounded shadow-sm" style="height: fit-content;">
                <h5 class="border-bottom pb-2 mb-3">Order Summary</h5>

                <h6>Your product cost: Rp. 14.000</h6>
                <h6>Your delivery cost: Rp. 14.000</h6>
                <hr>
                <h6>Total Cost: Rp. 28.000</h6>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-primary">Process Payment</button>
                </div>
            </div>
            <!-- END OF CHECK OUT SECTION -->
        </div>

    </main>
</template>