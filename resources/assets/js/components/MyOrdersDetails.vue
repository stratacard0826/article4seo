<template>
<section>

    <div>
        <v-breadcrumbs>
              <v-icon slot="divider">chevron_right</v-icon>
              <v-breadcrumbs-item
              >
                All Orders
              </v-breadcrumbs-item>
              <v-breadcrumbs-item
              >
                {{details.title}}
              </v-breadcrumbs-item>
            </v-breadcrumbs>

    </div>


<v-expansion-panel focusable xs-4>
    <v-expansion-panel-content :key="1">
        <div slot="header" class="red--text mb-2 display-1 text-xs-center">contact writer</div>


            <div v-for="item in cl">
            <v-layout align-center>
                <v-flex xs12 sm6 offset-xs1>
                        <div>
                        <div>{{item.details}}</div>
                      </div>

                </v-flex>
              </v-layout>
          </div>

          <v-flex xs12 sm6 offset-sm3>
              <v-form v-model="formMessage" ref="formMessage" lazy-validation>
                  <v-text-field
                  v-model="message"
                  prepend-icon="person"
                  name="Message"
                  label="Message"
                  type="text"
                  :rules="messageRules"
                  multi-line
                  ></v-text-field>

                  <v-btn
                      @click="submitMessage"
                      :disabled="!formMessage"
                      >
                      Send
                  </v-btn>
              </v-form>
          </v-flex>


    </v-expansion-panel-content>

    <v-expansion-panel-content :key="2">
        <div slot="header" class="red--text mb-2 display-1 text-xs-center">Contact Manager</div>
        <v-card>
            <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
    </v-expansion-panel-content>

    <v-expansion-panel-content :key="3">
        <div slot="header" class="red--text mb-2 display-1 text-xs-center">project details</div>
        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>

                    <table>
                        <tr><td>Project</td><td>{{details.type}}</td></tr>
                        <tr><td>Style</td><td>{{details.style}}</td></tr>
                        <tr><td>Title</td><td>{{details.title}}</td></tr>
                        <tr><td>Details</td><td><div v-html="details.details_html"></div></td></tr>
                    </table>


                </v-flex>
            </v-layout>
        </v-container>
    </v-expansion-panel-content>
    <v-expansion-panel-content :key="4">
        <div slot="header" class="red--text mb-2 display-1 text-xs-center">Files</div>


        <uploader></uploader>













    </v-expansion-panel-content>
    <v-expansion-panel-content :key="5">
        <div slot="header">Item</div>


        <v-form v-model="dueDate" ref="form" lazy-validation>
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



        <v-snackbar
        :timeout="6000"
        bottom
        auto-height
        v-model="snackbar"
        >
        {{message}}

        <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-btn
        @click="submitMessage"
        :disabled="!dueDate"
        >
        submit
        </v-btn>
        </v-form>


    </v-expansion-panel-content>
</v-expansion-panel>
</section>
</template>

<script>

// import uploader from './Uploader.vue'
export default {
    components: {
        //uploader
    },
    data: () => ({
        formMessage: false,
        details: [],
        cl: [],
        tickets: [],
        files: [],

        dueDate: null,
        date: null,
        modalDate: false,
        time: null,
        modalTime: false,

        messageRules: [
            v => !!v || 'Details field is required',
            v => (v.length >= 10) || 'Details must be more than 50 chars'

        ],
        dateRules: [
            v => !!v || 'Field is required',
        ],
        timeRules: [
            v => !!v || 'Field is required',
        ],
        snackbar: null,

        message: null,


    }),
    computed: {
        orderid: function(){
            return this.$route.params.id
        },
        newMessage: function(){
            return [
                {
                    'type': 'message',
                    'details': this.message
                }
            ]
        }
    },
    methods:{
        getOrder(id){
            var vm = this
            axios.get('/webapi/getorder?id='+this.orderid)
            .then(function (response) {
                vm.details = response.data

            })
            .catch(function (error) {

            })
        },
        getCl(id){
            var vm = this
            axios.get('/webapi/cl?id='+this.orderid)
            .then(function (response) {
                vm.cl = response.data

            })
            .catch(function (error) {

            })
        },
        submitMessage: function(){
            var vm = this
            if (this.$refs.formMessage.validate()) {

                axios.post('/webapi/cl', this.$data, this.orderid).then(function (response) {


                    vm.cl.push(vm.newMessage[0])
                });




            }
        }
    },
    mounted(){
        this.getOrder()
        this.getCl()
    }
}
</script>

<style lang="scss" scoped>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
