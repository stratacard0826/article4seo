<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    //
    protected $table = 'testimonials';
    public $timestamps = false;

    public $primaryKey = 'id';


    protected $rules = [
    //    'title' => 'required|min:10|max:255',
    //    'details' => 'required',

    ];

}
