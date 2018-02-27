<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use App\Order;
use App\Client;
use App\OrderMessage;
use App\TicketSupport;
use App\TicketWriter;
use Carbon\Carbon;


class CscController extends Controller
{
    // list of orders
    public function myorders(){
        $orders = Order::where('email', 'LIKE', '%')->orderBy('ts_ordered','desc')->get();
        return view('pages.csc_myorders')->with('orders', $orders);
    }
    public function getmyorders(){
        $model = Order::where('orderid', '!=','')->orderBy('ts_ordered','desc')->Paginate('100');
        return $model;


    }
    public function getOrder(Request $request){
        $model = Order::where('orderid', $request->input('id'))->firstOrFail();
        return $model;
    }
    public function getCl(Request $request){
        $model = OrderMessage::where('orderid', $request->input('id'))->get();
        return $model;
    }
    public function getAccount(Request $request){
        $model = Client::where('id', Auth::id())->get();
        return $model;
    }
    public function saveAccount(Request $request){
        $model = Client::where('id', Auth::id())->firstOrFail();
        $model->firstname = $request->input('firstname');
        $model->lastname = $request->input('lastname');
        $model->email = $request->input('email');
        $model->phone = $request->input('phone');
        $model->save();
    }

    public function saveMessage(Request $request){
        $model = OrderMessage::where('orderid', $request->input('id'))->get();
        $model = new OrderMessage;

        $model->owner = 'client';
        $model->orderid = $request->input('details')['orderid'];
        $model->details = $request->input('message');
        $model->save();
    }


    public function getCs(Request $request){
        $model = TicketSupport::where('orderid', $request->input('id'))->firstOrFail();
        return $model;
    }
    public function getFiles(Request $request){
        $model = Order::where('orderid', $request->input('id'))->firstOrFail();
        return $model;
    }

    // individual order details
    public function myordersData(Request $request, $orderid){
        $order = Order::where('orderid', $orderid)->first();
        $messages = $order->messages;
        $tickets = $order->ticketsSupport;
        return view('pages.csc_orderdetails')->with(['order' => $order, 'messages' => $messages, 'tickets' => $tickets]);
    }

    // edit account
    public function myaccount(){
        return view('pages.csc_myaccount');
    }

    // discount program page
    public function myfriends(){
        return view('pages.csc_myfriends');
    }





}
