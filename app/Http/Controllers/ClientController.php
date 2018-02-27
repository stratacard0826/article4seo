<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Client;

class ClientController extends Controller
{

    public function create(Request $request)
    {
        $model = new Client;
        // system vars
        //$model->ip = Request::server('ip');
        $model->firstname = $request->input('firstname');
        $model->lastname = $request->input('lastname');
        $model->email = $request->input('email');
        $model->password_hash = Hash::make($request->input('password'));
        $model->domain = request()->getHost();

        $model->save();
        if($model->save()){
            $a = array();
            $a['message'] = "ticket submitted";
            return $a;
        }
        else{
            App::abort(500, 'Error');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
