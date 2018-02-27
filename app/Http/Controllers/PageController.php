<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use App\Order;
use App\Essay;
use App\BlogPost;
use Illuminate\Support\Facades\View;



class PageController extends Controller
{
    public function index(){
        $categories = DB::table('essays_categories')->get();
        return view('pages.index')->with('categories',$categories);
    }

    // service pages
    public function page(Request $request, $page){
        if (View::exists('pages.'.$page)) {
            return view('pages.'.$page)->with('page', $page);
        }
        else{
            abort(404);
        }

    }

    public function category(Request $request, $category){
        $essays = Essay::where('category', $category)->take(50)->orderBy('id','desc')->get();
        return view('pages.category')->with('essays', $essays);
    }
    public function essay(Request $request, $category, $id){
        $essays = Essay::where('id', $id)->take(1)->get();
        return view('pages.essay')->with('essays', $essays);
    }

}
