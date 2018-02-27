<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Http\Request;
use Carbon;
use DB;
use App\Testimonial;


class TestimonialController extends Controller
{
    public function loadJsonTestimonials(){
        // $data = Testimonial::all()->random(3);
        $data = Testimonial::inRandomOrder()->take(5)->get();
        return $data;
    }


}
