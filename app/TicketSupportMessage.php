<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketSupportMessage extends Model
{
    //
    protected $table = 'spt_cs_inner';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ts_issued';
    const UPDATED_AT = 'ts_issued';

    public function parent()
    {
        return $this->belongsTo('App\TicketSupport');
    }

}
