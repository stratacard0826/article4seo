<template>
    <v-content>




    <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>



    <v-data-table
    :items="orders[0].data"
    class="elevation-1"
    :search="search"
    >
    <template slot="items" slot-scope="props">
        <td>


            {{ props.item.ts_ordered_hours }}
        </td>
        <td>{{ props.item.orderid }}</td>
        <td>{{ props.item.title }}</td>
        <td>

<router-link :to="{ name: 'details', params: {id: props.item.orderid } }">more..</router-link>

        </td>
        <td>USD ${{ props.item.total }}</td>

        <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
                <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                <v-icon color="pink">delete</v-icon>
            </v-btn>
        </td>

    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
</v-data-table>



</v-content>

</template>

<script>
export default {
    mounted() {
        this.getData(this.orders)
    },
    data () {
        return {
            orders: [],
            dialog: false,
            search: ''
        }
    },
    methods:{
        getData(arr){
            axios.get('/webapi/getmyorders').then(function (response) {
                arr.push(response.data)
            });
        }

    }
}
</script>
