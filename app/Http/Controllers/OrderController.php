<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveOrder;
use App\Http\Controllers\Controller;

//use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Http\Request;
use App\Subject;
use App\Order;
use App\Client;
use App\Batch;
use Carbon;
use DB;


class OrderController extends Controller
{

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

     private function subjects(){
         //$subjects = Subject::lists('subject');
         $subjects = Subject::all()->toArray();
         $array = array();
         foreach($subjects as $subject){
             $array[$subject['id']] = $subject['subject'];
         }
         return $array;
     }

     private function pageCount()
     {
         for($i=1;$i<=200;$i++){
             $array[$i] = $i. ' pages = ± '.(env('APP_WORDS_PAGE'))*$i.' words';
         }
         return $array;
     }
     protected function generateBatchId()
     {
         mt_srand((double)microtime()*1000000);
         $check = false;
         while($check == false){
             $id = "BA-".mt_rand(1000,9999)."-".mt_rand(1000,9999);
             if(Batch::where('batchid', $id)->count()==0){
                 $check = true;
             }
         }
        return $id;
     }
     protected function generateId()
     {
        mt_srand((double)microtime()*1000000);
        $check = false;
        while($check == false){
            $id = "S-".mt_rand(1000,9999)."-".mt_rand(1000,9999);
            if(Order::where('orderid', $id)->count()==0){
                $check = true;
            }
        }
        return $id;
     }

     private function calculateRateClient($data){
        $array = array();
        $array['total'] = '150.50';
        return $array;
     }
     private function calculateRateWriter($data){
        $array = array();
        $array['total'] = '150.50';
        return $array;
     }
     public function form(Request $request){
         // set batch id and create a batch record
         if($request->session()->has('batchid')){
            //$request->session()->forget('batchid');
         }
         else{
             // make a new batch record
             $batchid = $this->generateBatchId();
             session(['batchid' => $batchid]);

             if(Batch::where('batchid', $batchid)->exists()==false){
                 $batch = new Batch;
                 $batch->ts_started = Carbon\Carbon::now()->toDateTimeString();
                 $batch->batchid = session('batchid');
                 $batch->status = 'NEW';
                 $batch->session_id = session()->getId();
                 $batch->save();
             }
         }

         // show form
         return view('forms.order')->with([
            'project_types' => $project_types,
            'academiclevel' => $academiclevel,
            'citation_style' => $citation_style,
            'pages_arr' => $this->pageCount(),
            'subjects' => $this->subjects(),
         ]);

     }
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Order
     */

    public function submit(SaveOrder $request){
        // init vars that need to be calculated
        $array = $this->calculateRateClient($request->all());
        $orderid = $this->generateId();

        $order = new Order;
        // system vars
        //$order->ip = Request::server('ip');
        $order->domain = request()->getHost();
        $order->orderid = $orderid;
        $order->batchid = session('batchid');
        $order->ts_ordered = Carbon\Carbon::now()->toDateTimeString();
        $order->session_id = session()->getId();
        $order->status = 'UNPAID';
        $order->sw_status = 'NEW';
        // order specs
        $order->academiclevel = $request->input('academiclevel');
        $order->pages = $request->input('pages');
        $order->style = $request->input('style');
        $order->sources = $request->input('sources');
        $order->type = $request->input('type');
        $order->subject_id = $request->input('subject');
        $order->title = $request->input('title');
        $order->details = $request->input('details');
        // financial data
        $order->total = $array['total'];
        // save order
        $order->save();

        $this->updateBatch(session('batchid'));

    }
    public function quote(Request $request){
        if(
            empty($request->input('date')) ||
            empty($request->input('time')) ||
            empty($request->input('pages')) ||
            empty($request->input('academiclevel')) ||
            empty($request->input('project_type'))
        ){
            abort(404);
        }
        $a = array();
        $date = $request->input('date');
        $time = $request->input('time');
        $pages = $request->input('pages');
        $level = $request->input('academiclevel');
        $project = $request->input('project_type');

        $now = Carbon\Carbon::now();
        $due = Carbon\Carbon::parse($date.' '.$time);

        $hours = $due->diffInHours($now);
        $turnaround = DB::table('cfg_turnaround')->where('hours', '<', $hours)->orderBy('hours','desc')->first();
        $model = DB::table('cfg_projects')->where('short_name', $project)->first();
        $total = ($model->rate + $turnaround->rate) * $pages;

        $a['price'] = number_format($total, 2);
        $a['redirect'] = route('cart');
        return $a;
    }

    private function batchTotal($id){
        $orders = Order::where('batchid', $id)->get();
        $total = null;
        foreach($orders as $order){
            $total+= $order->total;
        }
        return $total;
    }
    private function batchList($id){
        $orders = Order::where('batchid', $id)->get();
        $list = null;
        foreach($orders as $order){
            $list.= $order->orderid . ' ';
        }
        return $list;
    }
    private function updateBatch($id){
        $batch = Batch::where('batchid', $id)->first();
        $batch->total = $this->batchTotal(session('batchid'));
        $batch->details = $this->batchList(session('batchid'));
        $batch->save();
    }

}
