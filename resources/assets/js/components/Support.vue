<template>
    <v-content>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm12 md10 lg8>

                    <div class="_h3">Support form</div>

                    <v-alert
                    type="success"
                    :value="true"
                    v-show="myAlert"
                    outline
                    >
                      {{myAlertMessage}}
                    </v-alert>


                    <transition name="fade" mode="out-in">
                    <v-form v-show="showForm" v-model="valid" ref="form" lazy-validation>


                        <v-text-field
                        v-model="firstname"
                        label="First Name"
                        :rules="nameRules"
                        ></v-text-field>

                        <v-text-field
                        v-model="lastname"
                        label="Last Name"
                        :rules="nameRules"
                        ></v-text-field>

                        <v-text-field
                        v-model="email"
                        type="email"
                        label="E-mail"
                        :rules="emailRules"
                        ></v-text-field>

                        <v-text-field
                        v-model="phone"
                        label="Phone"
                        :rules="phoneRules"
                        ></v-text-field>

                        <v-text-field
                        v-model="subject"
                        label="Subject"
                        :rules="subjectRules"
                        ></v-text-field>

                        <v-select
                          v-model="type"
                          label="Type of inquery"
                          single-line
                          bottom
                          autocomplete
                          :rules="selectRules"
                        ></v-select>

                        <v-checkbox
                          :label="'This is concerning an existing order'"
                          v-model="checkbox"

                        ></v-checkbox>

                        <v-text-field
                        v-show="this.checkbox"
                        v-model="orderid"
                        label="Order ID"
                        :rules="pagesRules"
                        ></v-text-field>



                        <v-select
                          v-model="problem"
                          label="Problem"
                          single-line
                          bottom
                          required
                        ></v-select>

                        <v-select
                          v-model="subject"
                          label="Resolution"
                          single-line
                          bottom
                          required
                        ></v-select>


                        <!-- <v-tooltip bottom max-width="500">
                            <v-text-field
                              label="Details"
                              v-model="details"
                              :rules="detailsRules"
                              required
                              multi-line
                              slot="activator"
                            ></v-text-field>
                            <span>{{ tt[0].details }}</span>
                        </v-tooltip>

                        <v-tooltip bottom max-width="500">
                            <v-text-field
                              label="Refund Reason"
                              v-model="reason"
                              required
                              multi-line
                              slot="activator"
                            ></v-text-field>
                            <span>{{ tt[0].details }}</span>
                        </v-tooltip>

                        <v-tooltip bottom max-width="500">
                            <v-text-field
                              label="Refund amount"
                              v-model="amount"
                              required
                              multi-line
                              slot="activator"
                            ></v-text-field>
                            <span>{{ tt[0].details }}</span>
                        </v-tooltip> -->






                        <v-btn
                          @click="submit"
                          :disabled="!valid"
                        >
                          submit
                        </v-btn>
                    </v-form>
                    </transition>

                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
// import OrderForm from './OrderFormHelper.js'
// const formdata = new OrderForm

export default {
    components:{

    },
    data: () => ({
        showForm: true,
        orderid: false,
        myAlert: false,
        myAlertMessage: null,

        snackbar: false,
        valid: false,
        checkbox: false,

        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        orderid: null,
        subject: null,
        details: null,
        type: null,
        problem: null,
        resolution: null,
        reason: null,
        amount: null,

        nameRules: [
          v => !!v || 'Name field is required',
          v => (v.length >= 2 && v.length < 20) || 'Must be more than 2 and less than 20 chars'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        phoneRules: [
          v => !!v || 'Phone field is required',
          v => (v.length >= 2 && v.length < 20) || 'Phone must be more than 2 and less than 20 chars'
        ],
        subjectRules: [
          v => !!v || 'Subject field is required',
          v => (v.length >= 15 && v.length < 128) || 'Subject must be more than 15 and less than 128 chars'
        ],


    }),
    watch: {

    },

    mounted() {


    },
    props: [],

    methods:{
        submit () {
            var vm = this
            if (this.$refs.form.validate()) {
              // Native form submission is not yet supported
              axios.post('/support', this.$data)
              .then(function (response){
                  vm.myAlertMessage = response.data.message
                  vm.myAlert = true
                  vm.showForm = false
                  //window.location = response.data.redirect;
              })

              this.snackbar = true
            }
        },

    }



  }
</script>
