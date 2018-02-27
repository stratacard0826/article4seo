<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

//use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Order;
use App\Client;
use App\Batch;
use Carbon;
use DB;


class CartController extends Controller
{

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

     public function show(){
         return view('forms.cart');
     }



}
