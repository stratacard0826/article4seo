<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketWriterMessage extends Model
{
    //
    protected $table = 'spt_sw_inner';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ts_issued';
    const UPDATED_AT = 'ts_issued';

    public function parent()
    {
        return $this->belongsTo('App\TicketWriter');
    }

}
