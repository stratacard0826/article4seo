<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TicketSupport;

class SupportController extends Controller
{

    public function form(Request $request){
         return view('forms.support')->with([

         ]);

     }
     public function submit(Request $request){
        $ticket = new TicketSupport;
        // system vars
        //$ticket->ip = Request::server('ip');
        $ticket->firstname = $request->input('firstname');
        $ticket->lastname = $request->input('lastname');
        $ticket->email = $request->input('email');
        $ticket->phone = $request->input('phone');
        $ticket->orderid = $request->input('orderid');
        $ticket->subject = $request->input('subject');

        $ticket->ip = $request->server('ip');
        $ticket->domain = request()->getHost();

        $ticket->save();
        if($ticket->save()){
            $a = array();
            $a['message'] = "ticket submitted";
            return $a;
        }
        else{
            App::abort(500, 'Error');
        }

     }
}
