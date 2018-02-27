<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SaveBlogPost;
use App\BlogPost;
use Illuminate\Contracts\Validation\Validator;
use Carbon;


class BlogPostController extends Controller
{
    // posts content pages
    public function show(Request $request, $slug){
        $domain = request()->getHost();
        $data = BlogPost::where('slug', $slug)->firstOrFail();
        return view('pages.blogpost')->with(['data' => $data, 'slug' => $slug]);
    }
    // edit content pages
    public function edit(Request $request, $slug){
        $domain = request()->getHost();
        $data = BlogPost::where('slug', $slug)->first();
        return view('pages.blogpost-edit')->with('data', $data);
    }
    public function create(Request $request){
        $domain = request()->getHost();
        return view('pages.blogpost-create');
    }

    public function submitEdit(SaveBlogPost $request, $slug){
        $blog = BlogPost::where('slug', $slug)->first();
        $blog->title = $request->input('title');
        $blog->details = $request->input('details');
        $blog->save();
        return redirect()->route('viewBlogPost', $slug);
    }
    public function submitNew(SaveBlogPost $request){
        $slug = str_slug($request->title, '_');
        $blog = new BlogPost;
        $blog->slug = $slug;
        $blog->ts_issued = Carbon\Carbon::now()->toDateTimeString();
        $blog->domain = $domain = request()->getHost();
        $blog->title = $request->input('title');
        $blog->details = $request->input('details');
        $blog->save();
        return redirect()->route('viewBlogPost', $slug);
    }

}
