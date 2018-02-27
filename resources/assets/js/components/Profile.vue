<template>
    <v-expansion-panel focusable style="background-color:orange;">
        <v-expansion-panel-content :key="1">
            <div slot="header" class="_header" >Edit Profile</div>



            <v-form v-model="formProfile" ref="formProfile" lazy-validation>


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

                <v-btn
                @click="submit"
                :disabled="!valid"
                >
                submit
            </v-btn>
            </v-form>



        </v-expansion-panel-content>

        <v-expansion-panel-content :key="2">
            <div slot="header">Change Password</div>

            <v-form v-model="formPassword" ref="formPassword" lazy-validation>

                <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                :rules="passwordRules"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
                ></v-text-field>

                <v-text-field
                v-model="confirm_password"
                prepend-icon="lock"
                name="confirm_password"
                label="Password"
                id="password"
                type="password"
                :rules="passwordRules"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
                ></v-text-field>




                <v-btn
                @click="submit"
                :disabled="password!=confirm_password"
                >
                submit
            </v-btn>
            </v-form>


        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
// import OrderForm from './OrderFormHelper.js'
// const formdata = new OrderForm

export default {
    components:{

    },
    data: () => ({
        e1: true,
        myAlert: false,
        myAlertMessage: null,

        snackbar: false,
        valid: false,

        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        password: null,
        confirm_password: null,

        client: [],

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
        passwordRules: [
            v => this.password === this.confirm_password || 'does not match',
            v => !!v || 'Subject field is required',
            v => (v.length >= 15 && v.length < 128) || 'Subject must be more than 15 and less than 128 chars'
        ],


    }),
    watch: {

    },

    mounted() {
        this.getClient()

    },
    props: [],

    methods:{
        getClient() {
            var vm = this
            axios.get('/webapi/client').then(function (response) {
                vm.client = response.data
                vm.firstname = vm.client[0].firstname
                vm.lastname = vm.client[0].lastname
                vm.email = vm.client[0].email
                vm.phone = vm.client[0].phone

            });
        },
        submit() {
            var vm = this
            if (this.$refs.form.validate()) {
                // Native form submission is not yet supported

                axios.post('/webapi/client', this.$data)
                .then(function (response){

                    vm.myAlertMessage = response.data.message
                    vm.myAlert = true
                    vm.showForm = false

                })

                this.snackbar = true
            }
        },

    }
}
</script>
