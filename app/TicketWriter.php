<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderMessage extends Model
{
    //
    protected $table = 'orders_cl';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ts_issued';
    const UPDATED_AT = 'ts_issued';

    public function order()
    {
        return $this->belongsTo('App\Order','orderid','order_id');
    }

}
