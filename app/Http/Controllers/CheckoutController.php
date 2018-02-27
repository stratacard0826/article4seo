<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProcessCheckout;
use App\Http\Controllers\Controller;

//use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Http\Request;
use App\Order;
use App\Client;
use App\Batch;
use Carbon;
use DB;


class CheckoutController extends Controller
{

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

     public function form(Request $request){

         // show form
         return view('forms.checkout')->with([

         ]);

     }

     public function submit(ProcessCheckout $request){

         // enter client account record

         // redirect to payment
         return 'sdfgsdfg';

     }



}
