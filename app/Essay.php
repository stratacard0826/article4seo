<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Esensi\Model\Model;

class Essay extends Model
{
    //
    protected $table = 'esays';
    public $timestamps = false;

    public $primaryKey = 'id';

    protected $fillable = ['domain'];

    protected $rules = [
        'title' => 'required|min:10|max:255',
        'details' => 'required',

    ];

}
