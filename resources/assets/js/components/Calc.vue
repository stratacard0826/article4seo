<template>
<div class="b_main_banner">
  <div class="_banner_form">
    <div class="">
    <div class="_form">



    <h1 class="title">GET A QUOTE &amp; GO!</h1>

    <v-layout>
        <v-flex lg12>
            <v-form v-model="valid" ref="form" lazy-validation>

                <v-select
                  :items="projects[0]"
                  v-model="project_type"
                  label="Select project type"
                  single-line
                  bottom
                  autocomplete
                  :rules="selectRules"
                ></v-select>

                <v-select
                  :items="levels[0]"
                  v-model="academiclevel"
                  label="Select quality level"
                  single-line
                  bottom
                  :rules="selectRules"
                ></v-select>

                <v-text-field
                v-model="pages"
                type="number"
                label="Pagecount"
                :rules="pagesRules"
                ></v-text-field>


                <v-layout >
                    <v-flex md6>
                        <v-dialog
                            ref="dialogDate"
                            persistent
                            v-model="modalDate"
                            lazy
                            full-width
                            width="290px"
                            :return-value.sync="date"
                            >
                            <v-text-field
                              slot="activator"
                              label="Select date"
                              v-model="date"
                              prepend-icon="event"
                              readonly
                              :rules="dateRules"
                            ></v-text-field>
                            <v-date-picker v-model="date" color="primary">
                              <v-spacer></v-spacer>
                              <v-btn flat color="primary" @click="modalDate = false">Cancel</v-btn>
                              <v-btn flat color="primary" @click="$refs.dialogDate.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex md6>
                        <v-dialog
                          ref="dialogTime"
                          persistent
                          v-model="modalTime"
                          lazy
                          full-width
                          width="290px"
                          :return-value.sync="time"
                        >
                            <v-text-field
                              slot="activator"
                              label="Select time"
                              v-model="time"
                              prepend-icon="access_time"
                              readonly
                              :rules="timeRules"
                            ></v-text-field>
                            <v-time-picker
                            color="primary"
                            v-model="time"
                            scrollable
                            >
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="modalTime = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.dialogTime.save(time)">OK</v-btn>
                            </v-time-picker>
                        </v-dialog>
                      </v-flex>
                  </v-layout>


                  <v-snackbar
                        :timeout="6000"
                        auto-height
                        right
                        v-model="snackbar"
                      >
                      Total: USD ${{ s_price }}



                    <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
                  </v-snackbar>


                  <v-layout align-center justify-center>
                      <v-btn
                        @click="submit"
                        :disabled="!valid"
                      >
                        order now
                      </v-btn>
                  </v-layout>

            </v-form>
        </v-flex>
    </v-layout>



    </div>
    </div>
</div>
</div>
</template>



<script>
import WButton from './WButton'
import datetime from 'vue-datetimepicker';
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    components: { WButton, datetime },
    mounted() {
        this.getProjects(this.projects)
        this.getLevels(this.levels)
        this.getPages(this.pages)
    },
    props: [],
    data(){
        return{

            project_type: 'Choose',
            academiclevel: 'Choose',
            pagecount: 'Choose',
            projects: [],
            levels: [],
            pages: [],

            dateRules: [
              v => !!v || 'Field is required',
            ],
            timeRules: [
              v => !!v || 'Field is required',
            ],


            date: null,
            modalDate: false,
            time: null,
            modalTime: false,

            snackbar: false,
            s_date: null,
            s_price: null,



        }
    },
    watch: {
        date: function(){
            this.getQuote();
        },
        time: function(){
            this.getQuote();
        },
        project_type: function(){
            this.getQuote();
        },
        academiclevel: function(){
            this.getQuote();
        },
        pages: function(){
            this.getQuote();
        },
    },
    methods:{
        getProjects(arr){
            axios.get('/webapi/loadFormProjectTypes').then(function (response) {
                arr.push(response.data)
            });
        },
        getLevels(arr){
            axios.get('/webapi/loadFormLevels').then(function (response) {
                arr.push(response.data)
            });
        },
        getPages(arr){
            axios.get('/webapi/loadFormPages').then(function (response) {
                arr.push(response.data)
            });
        },
        getQuote: _.debounce(

            function () {
                var vm = this
                axios.post('/quote', this.$data)
                .then(function (response) {
                    vm.s_date = response.data.date
                    vm.s_price = response.data.price
                    vm.snackbar = true
                })
                .catch(function (error) {

                })
            },
          // This is the number of milliseconds we wait for the
          // user to stop typing.
          500
        ),
    }

}
</script>
<style lang="scss" scoped>

.b_main_banner ._banner_form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0; }
    @media (max-width: 991px) {
      .b_main_banner ._banner_form {
        position: static; } }
    .b_main_banner ._banner_form .container {
      position: relative; }
    .b_main_banner ._banner_form ._form {
      position: absolute;
      bottom: 50px;
      right: 30px;
      width: 100%;
      max-width: 350px;
      box-shadow: 0 3px 55px rgba(131, 153, 167, 0.35);
      background-color: #ffffff;
      padding: 40px 30px;
      text-align: center;
      float: right; }
      @media (max-width: 1199px) {
        .b_main_banner ._banner_form ._form {
          right: 0;
          padding: 20px 15px;
          max-width: 320px; } }
      @media (max-width: 991px) {
        .b_main_banner ._banner_form ._form {
          float: none;
          position: static;
          margin: 30px auto 0;
          max-width: 450px; } }
    .b_main_banner ._banner_form h3 {
      color: #232428;
      font-size: 24px;
      text-transform: uppercase;
      line-height: 1;
      margin: 0 0 35px; }
    .b_main_banner ._banner_form label {
      font-weight: 300;
      font-size: 16px;
      width: 100%;
      margin: 0;
      display: inline-block; }
      .b_main_banner ._banner_form label + label {
        margin: 15px 0 0; }
    .b_main_banner ._banner_form input[type="submit"] {
      width: 160px;
      margin: 30px 0 0;
      font-size: 14px; }


</style>
