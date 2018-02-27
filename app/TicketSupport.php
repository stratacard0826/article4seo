<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketSupport extends Model
{
    //
    protected $table = 'spt_cs';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ts_issued';
    const UPDATED_AT = 'ts_issued';

    public function messages()
    {
        return $this->hasMany('App\Order','orderid','orderid');
    }

    public function order()
    {
        return $this->belongsTo('App\Order','orderid','orderid');
    }

}
