<template>
    <v-content>
        <v-container fluid fill-height>

            <transition name="slide-fade">
                <v-layout v-show="login" align-center justify-center>
                    <v-flex xs12 sm8 md6 lg4>
                        <v-form v-model="formLogin" ref="form" lazy-validation>
                            <v-text-field
                            v-model="email"
                            dark
                            prepend-icon="person"
                            name="email"
                            label="E-mail"
                            type="text"
                            :rules="emailRules"
                            ></v-text-field>
                            <v-text-field
                            v-model="password"
                            dark
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
                            <span v-on:click="login=!login">Forgot your password?</span>
                            <v-spacer dark></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn
                            dark
                            @click="submit"
                            :disabled="!formLogin"
                            >
                            Submit
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </transition>
        <transition name="slide-fade">
            <v-layout v-show="!login" align-center justify-center>
                <v-flex xs12 sm8 md6 lg4>
                    <v-form v-model="formForgot" ref="form" lazy-validation>
                        <v-text-field
                        v-model="email"
                        dark
                        prepend-icon="person"
                        name="email"
                        label="E-mail"
                        type="text"
                        :rules="emailRules"
                        ></v-text-field>
                        <span v-on:click="login=!login">Back to login</span>
                        <v-spacer dark></v-spacer>
                        <v-spacer></v-spacer>
                        <v-btn
                        dark
                        @click="submit"
                        :disabled="!formForgot"
                        >
                        Submit
                    </v-btn>
                </v-form>
            </v-flex>
        </v-layout>




    </transition>

    <v-snackbar
    :timeout="6000"
    bottom
    auto-height
    v-model="snackbar"
    >
    {{ message }}
    <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
</v-snackbar>

</v-container>



</v-content>
</template>

<script>
export default {
    data: () => ({
        login: true,
        e1: true,
        formLogin: false,
        formForgot: false,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
        ],


        email: null,
        password: null,
        message: null,
        snackbar: null
    }),
    mounted() {

    },
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                // Native form submission is not yet supported
                var vm = this
                axios.post('/login', this.$data)
                .then(function (response){
                    if(response.data.error == 0){
                        window.location = response.data.redirect
                    }
                    else{
                        vm.message = response.data.message
                        vm.snackbar = true

                    }
                })


            }
        }
    }

}
</script>

<style lang="scss" scoped>

.slide-fade-enter-active {
    transition: all .1s ease;
}
.slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
transform: translateX(10px);
opacity: 0;
}

</style>
