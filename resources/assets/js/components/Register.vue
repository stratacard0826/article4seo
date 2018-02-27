<template>
    <v-content>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm12 md10 lg8>

                    <div class="_h3">Become a member</div>

                    <v-alert
                    type="success"
                    :value="true"
                    v-show="myAlert"
                    outline
                    >
                      {{myAlertMessage}}
                    </v-alert>


                    <transition name="fade" mode="out-in">
                    <v-form v-model="valid" ref="form" lazy-validation>


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
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        :rules="passwordRules"
                        v-model="password"
                        min="8"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'"
                        counter

                        ></v-text-field>

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

export default {
    components:{

    },
    data: () => ({

        myAlert: false,
        myAlertMessage: null,

        valid: false,

        firstname: null,
        lastname: null,
        email: null,
        password: null,
        e1: true,


        nameRules: [
          v => !!v || 'Name field is required',
          v => (v.length >= 2 && v.length < 20) || 'Must be more than 2 and less than 20 chars'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
        ]



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
              axios.post('/register', this.$data)
              .then(function (response){
                  vm.myAlertMessage = response.data.message
                  vm.myAlert = true

                  //window.location = response.data.redirect;
              })

              this.snackbar = true
            }
        },

    }



  }
</script>
