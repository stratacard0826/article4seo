<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    //
    protected $table = 'orders_batches';
    protected $primaryKey = 'id';

    public $timestamps = false;
    //const CREATED_AT = 'created_at';
    //const UPDATED_AT = 'updated_at';

    protected $dates = [
        'ts_started',
        'ts_paid',
    ];


    /**
     * Get the communication log messages.
     */
    public function orders()
    {
        return $this->hasMany('App\Order','batchid','batchid');
    }


}
