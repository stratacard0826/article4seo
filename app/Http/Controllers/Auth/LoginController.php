<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    // By default, Laravel uses the email field for authentication. If you would like to customize this, you may define a username method on your LoginController:
    public function username()
    {
        return 'email';
    }
    protected function redirectTo()
    {
        return '/myorders';
    }

    public function authenticate(Request $request) {
        $array = array();
        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            $array['error'] = 0;
            $array['redirect'] = route('myorders');
        } else {
            $array['error'] = 1;
            $array['message'] = 'Incorrect e-mail or password.';

        }
        return $array;
    }







}
