import myorders from './components/MyOrders.vue';
import myordersdetails from './components/MyOrdersDetails.vue';
import profile from './components/Profile.vue';
import credits from './components/Credits.vue';
export const routes = [
    { path: '/cp/orders', component: myorders, name: 'myorders' },
    { path: '/cp/details/:id', component: myordersdetails, name: 'details' },
    { path: '/cp/profile', component: profile, name: 'profile' },
    { path: '/cp/credits', component: credits, name: 'credits' },

];
