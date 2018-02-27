<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use DB;
use App\Batch;
use App\Order;
use App\Writer;
use App\OrderMessage;
use App\TicketSupport;
use App\TicketSupportMessage;
use App\TicketWriter;
use App\TicketWriterMessage;

class APIController extends Controller
{


    /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */

   private $data = array();

   public function orderDetails(Request $request)
   {
      //if (Auth::check()==false) {
            $id = $request->id;
            /*
            $order = DB::table('orders')->where([
             ['orderid', 'like', $orderid],

             ])
            ->orderBy('status','desc')
            ->get();
            */
            $order = Order::where('orderid', $id)->first();
            return $order;
     // }
   }
   public function ticketSupportMessages(Request $request)
   {
            $this->data['html'] = null;
      //if (Auth::check()==false) {
            $id = $request->id;
            /*
            $order = DB::table('orders')->where([
             ['orderid', 'like', $orderid],

             ])
            ->orderBy('status','desc')
            ->get();
            */
            $tickets = TicketSupportMessage::where('ticketid', $id)->get();
            foreach($tickets as $ticket){
                $this->data['html'].=nl2br($ticket->details)."<br><br>";
                //$this->data['html'].= 'kmokkmokmokmo';
            }
            //return $this->data;
            return json_encode($this->data);
     // }
   }
   public function batchOrders(){
       $batch = Batch::where('batchid', session('batchid'))->first();
       $orders = $batch->orders;
       return view('forms.cart')->with('orders', $orders);
   }
   public function validateOrderId(Request $request){
       $id = $request->input('id');
       $model = Order::where('orderid', $id)->firstOrFail();
   }
   public function validateWriterId(Request $request){
       $id = $request->input('id');
       $model = Writer::where('sw_id', $id)->firstOrFail();
   }
   public function countOrderMessages(Request $request){
       $id = $request->input('id');
       return $model = OrderMessage::where('orderid', $id)->count();
   }
   public function countTicketSupportMessages(Request $request){
       $id = $request->input('id');
       return $model = TicketSupportMessage::where('ticketid', $id)->count();
   }

   // populate forms
   public function loadFormProjectTypes(){
       $data = DB::select('select `short_name` AS `value`, `long_name` AS `text` from `cfg_projects` order by `text` ASC');
       return $data;
   }
   public function loadFormLevels(){
       $data = DB::select('select `short_name` AS `value`, `long_name` AS `text` from `cfg_levels` ');
       //$data = array_push(array('value'=>null,'text'=>'Please select'), $data);
       return $data;
   }
   public function loadFormSubjects(){
       $data = DB::select('select `id` AS `value`, `subject` AS `text` from `subjects` order by `text` ASC');
       //$data = array_push(array('value'=>null,'text'=>'Please select'), $data);
       return $data;
   }
   public function loadFormPages(){
       $data = array();
       for($i=1;$i<=200;$i++){
           $data[$i]['value'] = $i;
           $data[$i]['text'] = $i. ' pages =~ '  .(env('APP_WORDS_PAGE')*$i).' words';
       }
       return $data;
   }
   public function loadFormStyles(){
       $data = DB::select('select `short_name` AS `value`, `long_name` AS `text` from `cfg_styles` ');
       //$data = array_push(array('value'=>null,'text'=>'Please select'), $data);
       return $data;
   }
   public function loadFormSources(){
       $data = array();
       for($i=1;$i<=50;$i++){
           $data[$i]['value'] = $i;
           $data[$i]['text'] = $i. ' sources';
       }
       return $data;
   }

}
