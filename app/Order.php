<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $table = 'orders';
    protected $primaryKey = 'id';

    public $timestamps = false;
    const CREATED_AT = 'ts_ordered';
    const UPDATED_AT = 'ts_last';

    protected $dates = [
        'ts_ordered',
        'ts_due',
        'ts_paid',
    ];

    protected $appends = ['ts_ordered_hours', 'details_html'];


    public function getTsOrderedHoursAttribute($value)
    {
        return $this->ts_ordered->diffForHumans();

    }
    public function getDetailsHtmlAttribute($value)
    {
        return  nl2br(e($this->details));

    }


    protected $fillable = [
        'title',
        'details',

    ];


    /**
     * Get the communication log messages.
     */
    public function messages()
    {
        return $this->hasMany('App\OrderMessage');
    }
    public function subjects()
    {
        return $this->hasOne('App\Subject');
    }
    public function batches()
    {
        return $this->hasOne('App\Batch');
    }
    public function writers()
    {
        return $this->hasOne('App\Batch');
    }

    public function ticketsSupport()
    {
        return $this->hasMany('App\TicketSupport','orderid','orderid');
    }


}
