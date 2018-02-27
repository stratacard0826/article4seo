<template>
    <v-content>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm12 md10 lg8>

                    <div class="_h3">order form</div>

                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-layout >
                            <v-flex >
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

                          <v-select
                            :items="projects[0]"
                            v-model="project_type"
                            label="Select project type"
                            single-line
                            bottom
                            autocomplete
                            :rules="selectRules"
                          ></v-select>


                        <v-text-field
                        v-model="pages"
                        type="number"
                        label="Pagecount"
                        :rules="pagesRules"
                        ></v-text-field>

                        <v-select
                          :items="levels[0]"
                          v-model="academiclevel"
                          label="Select quality level"
                          single-line
                          bottom
                          :rules="selectRules"
                        ></v-select>


                        <v-select
                          :items="subjects[0]"
                          v-model="subject"
                          label="Select subject"
                          single-line
                          bottom
                          autocomplete
                          :rules="selectRules"
                        ></v-select>




                        <v-text-field
                          label="Title"
                          v-model="title"
                          :rules="titleRules"
                          :counter="10"
                          required
                        ></v-text-field>

                        <v-tooltip bottom max-width="500">
                            <v-text-field
                              label="Detailed instructions"
                              v-model="details"
                              :rules="detailsRules"
                              required
                              multi-line
                              slot="activator"
                            ></v-text-field>
                            <span>{{ tt[0].details }}</span>
                        </v-tooltip>


                        <v-text-field
                        v-model="sources"
                        type="number"
                        :rules="sourcesRules"
                        label="Number of sources"
                        ></v-text-field>

                        <!-- <v-select
                          :items="styles[0]"
                          v-model="citationstyle"
                          label="Select citation style"
                          single-line
                          bottom
                          :rules="selectRules"
                        ></v-select> -->

                        <v-radio-group v-model="citationstyle" :mandatory="false">
                          <v-radio label="MLA" value="mla"></v-radio>
                          <v-radio label="APA" value="apa"></v-radio>
                          <v-radio label="Chicago" value="chicago"></v-radio>
                        </v-radio-group>



                        <v-snackbar
                              :timeout="6000"
                              bottom
                              auto-height
                              v-model="snackbar"
                            >
                            Time to deadline: {{ s_date }}
                            Price per page: {{ s_price }}
                            Total: {{ s_price }}



                          <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
                        </v-snackbar>

                        <v-btn
                          @click="submit"
                          :disabled="!valid"
                        >
                          submit
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import datepicker from './Datepicker'
import OrderForm from './OrderFormHelper.js'
const formdata = new OrderForm

export default {
    components:{

    },
    data: () => ({

        snackbar: false,
        s_date: null,
        s_price: null,

      valid: false,
      dateRules: [
        v => !!v || 'Field is required',
      ],
      timeRules: [
        v => !!v || 'Field is required',
      ],
      selectRules: [
        v => !!v || 'Field is required',
      ],
      pagesRules: [
        v => !!v || 'Pagecount is required',
        v => (v > 0 && v <= 200) || 'Wrong value',
        v => (v > 0 && v <= 200) || 'Wrong value'
      ],
      sourcesRules: [
          v => !!v || 'Sourcecount is required',
          v => (v <= 50 && v >= 0) || 'Wrong value'
      ],
      titleRules: [
        v => !!v || 'Title field is required',
        v => (v.length >= 10) || 'Title must be more than 10 chars'
      ],
      detailsRules: [
        v => !!v || 'Details field is required',
        v => (v.length >= 50) || 'Title must be more than 50 chars'

      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'

        ],
        date: null,
        modalDate: false,
        time: null,
        modalTime: false,



        subjects: [],
        projects: [],
        levels: [],
        styles: [],
        extras: [
        {
            value:'outline',
            text:'I need an outline',
        },
        {
            value:'abstract',
            text:'I need an abstract',
        },
        {
            value:'fax',
            text:'I will fax resources',
        },
        {
            value:'upload',
            text:'I will upload resources',
        },
        ],

        pages: 1,
        sources: 0,

        subject: null,
        project_type: null,
        academiclevel: null,
        title: null,
        details: null,
        citationstyle: null,

        v_abstract: null,
        v_outline: null,
        v_uploads: null,
        v_faxes: null
    }),
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

    mounted() {
        this.tt = formdata.tooltipData();

        this.getSubjects(this.subjects)
        this.getProjects(this.projects)
        this.getLevels(this.levels)
        this.getStyles(this.styles);

    },
    props: [],

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
        getSubjects(arr){
            axios.get('/webapi/loadFormSubjects').then(function (response) {
                arr.push(response.data)
            });
        },
        getStyles(arr){
            axios.get('/webapi/loadFormStyles').then(function (response) {
                arr.push(response.data)
            });
        },
        getQuote: _.debounce(

            function () {
                var vm = this
                axios.post('/orderCheck', this.$data)
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
        submit () {
            if (this.$refs.form.validate()) {
              // Native form submission is not yet supported
              axios.post('/orderCheck', this.$data)
              .then(function (response){
                  window.location = response.data.redirect;
              })

              this.snackbar = true
            }
        },

    }



  }
</script>
