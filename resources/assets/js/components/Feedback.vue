<template>
  <div class="b_our_clients">
    <div class="container">

      <div class="_h3">our clients</div>
      <div class="_h4">Real Reviews</div>


          <div class="_our_clients">
            <div>
              <div class="slide_in" v-for="item in fb">

                <div class="_name">
                  {{item.orderid}}
                </div>
                <div class="_from">
                  USA
                </div>
                <div class="_stars">
                  <star-rating :rating="item.rate_writer" :read-only="true" :max-rating="10" :star-size="20" :active-color="cccccc"></star-rating>
                </div>
                <div class="_text">
                  "{{item.details}}"
                </div>
              </div>
            </div>
          </div>

      <div class="_load_more" v-on:click="loadMore(fb)"><w-button>Load More</w-button></div>

    </div>
  </div>
</template>

<script>
import WButton from './WButton'
import StarRating from 'vue-star-rating'
export default {
    components: {
      WButton,
      StarRating
    },
    data() {
        return{
            fb: []
        }
    },
    methods: {
        loadMore(arr) {

            axios.get('/webapi/loadJsonTestimonials')
                .then(function (response) {
                        //self.fb = response.data;
                        //arr = arr.concat(response.data)
                        var i;
                        for(i=1;i<response.data.length;i++){
                                arr.push(response.data[i])
                        }
                        // arr.push(response.data)
                    });

        },
        removeSlide() {
            this.slides.pop()
        }
    },
    mounted() {
        var self = this;
        axios.get('/webapi/loadJsonTestimonials')
            .then(function (response) {
                    self.fb = response.data;
                    });
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
@import './../../sass/_mixin.scss';



.b_our_clients{
  // background: url('../../img-tmp/our_clients_bg.jpg') no-repeat center;
  background-size: cover;
  padding: 80px 0 30px;
  min-height: 538px;

  @media(max-width: $screen-sm-max){
    padding: 30px 0;
  }

  ._h4{
    margin: 0 0 70px;

    @media(max-width: $screen-sm-max){
      margin: 0 0 30px;
    }
  }

  ._our_clients{
    padding: 0 95px;

    @media(max-width: $screen-sm-max){
      padding: 0 35px;
    }

    @media(max-width: $screen-xs-max){
      padding: 0 25px;
    }
  }

  .slide_in{
    padding: 0 4px;
    text-align: center;
    margin:50px 0px 50px 0px;
  }

  ._stars{
    text-align: center;

  }

  ._name{
    font-size: 20px;
    font-weight: 300;
    margin: 0 0 9px;
  }

  ._from{
    color: #8399a6;
    font-weight: 300;
    margin: 0 0 20px;
  }

  ._text{
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;

    @media(max-width: $screen-xs-max){
      font-size: 14px;
      line-height: 1.6;
    }
  }
  ._load_more{
      text-align:center;
  }
}
</style>
