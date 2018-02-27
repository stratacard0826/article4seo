<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //
    protected $table = 'subjects';
    public $timestamps = false;

    public $primaryKey = 'id';

    public function orders()
    {
        return $this->hasMany('App\Order');
    }
}
