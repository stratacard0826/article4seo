<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    //
    protected $table = 'contentpages';
    public $timestamps = false;

    public $primaryKey = 'id';


}
