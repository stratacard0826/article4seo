<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderStarted;

class TestController extends Controller
{

    public function test(Request $request)
    {
        $order = '232345';
        return $request->user();
        //Mail::to($request->user())
                        //->queue(new OrderStarted($order));
    }

}
