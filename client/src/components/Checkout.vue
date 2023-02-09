<script>
    import { mapState } from 'pinia';
    import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    computed:{
        ...mapState(useAppStore, ['checkout']),
    },
    methods:{
        ...mapActions(useAppStore, ['fetchCheckout','deleteCheckout','buy','paid']),
        async doBuy(id){
            this.buy(id)
            this.fetchCheckout
        }
    },
    data(){
        return {
            total:0
        }
    },
    created(){
        this.fetchCheckout()
    },
    

}
</script>
<template >
    <div class="container bg-white rounded-top mt-5" id="zero-pad">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-12 pt-3">
                <div class="d-flex">
                    <div class="pt-1"><h4>Shopping bag</h4></div>                                         
                </div>
                <div class="d-flex flex-column pt-4">
                    <div><h5 class="text-uppercase font-weight-normal"></h5></div>
                </div>

                <table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                      <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Cancel</th>
                        <th>Checkout</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in checkout" >
                        <td >
                          <div class="d-flex align-items-center">
                            <img
                                :src="item.Product.image"
                                alt=""
                                style="width: 200px; height: 200px"
                                class="rounded-circle"
                                />
                            <div class="ms-3">
                              <p class="text-muted mb-0">{{ item.Product.description }}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="fw-normal mb-1">{{item.Product.name }}</p>
                        </td>
                        <td>
                          <p class="fw-normal mb-1"> Rp.{{item.Product.price}},00</p>
                        </td>
                        <td>
                          <p class="fw-normal mb-1"> {{item.status}}</p>
                        </td>

                        <td><button @click.prevent="deleteCheckout(item.id)" class="btn btn-danger">Delete</button></td>
                        <td>
                          <button @click.prevent="buy(item.id)" v-if="item.status==='Unpaid'" type="button" class="btn btn-success">
                            Checkout
                          </button>
                          <button disabled v-if="item.status==='Paid'" type="button" class="btn btn-secondary">
                            Checkout
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
    
            </div>
        </div>
    </div>
    <div class="container bg-light rounded-bottom py-4" id="zero-pad">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-12">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <button @click.prevent="$router.push('/store')" class="btn btn-sm bg-light border border-dark">GO BACK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped >
body{
    background-color: #eeeeee;
}

.footer-background{
    background-color: rgb(204, 199, 199);
}

@media(max-width:991px){
    #heading{
        padding-left: 50px;
    }
    #prc{
        margin-left: 70px;
        padding-left: 110px;
    }
    #quantity{
        padding-left: 48px;
    }
    #produc{
        padding-left: 40px;
    }
    #total{
        padding-left: 54px;
    }
}
@media(max-width:767px){
    .mobile{
        font-size: 10px;
    }
    h5{
        font-size: 14px;
    }
    h6{
        font-size: 9px;
    }
    #mobile-font{
        font-size: 11px;
    }
    #prc{
        font-weight: 700;
        margin-left: -45px;
        padding-left: 105px;
    }
    #quantity{
        font-weight: 700;
        padding-left: 6px;
    }
    #produc{
        font-weight: 700;
        padding-left: 0px;
    }
    #total{
        font-weight: 700;
        padding-left: 9px;
    }
    #image{
        width: 60px;
        height: 60px;
    }
    .col{
        width: 100%;
    }
    #zero-pad{
        padding: 2%;
        margin-left: 10px;
    }
    #footer-font{
        font-size: 12px;
    }
    #heading{
        padding-top: 15px;
    }
}
</style>