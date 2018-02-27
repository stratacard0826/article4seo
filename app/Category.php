<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Essay extends Model
{
    //
    protected $table = 'esays';
    const CREATED_AT = 'timestamp';

    public $primaryKey = 'id';



}
