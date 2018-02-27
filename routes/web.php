<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// content routes

// homepage
Route::get('/', 'PageController@index');






// service description pages
Route::get('/info/{page}', 'PageController@page');

// posts
Route::get('/post/{page}', 'BlogPostController@show')->name('viewBlogPost');
// edit post
Route::get('/post/{page}/edit', 'BlogPostController@edit')->name('editBlogPost');
// submit
Route::post('/post/{page}/edit', 'BlogPostController@submitEdit');
// create
Route::get('/create/post', 'BlogPostController@create')->name('createBlogPost');
// create
Route::post('/create/post', 'BlogPostController@submitNew');


// essay categories
Route::get('customessaytopics/{category}.htm', 'PageController@category');
// essay details
Route::get('customessays/{category}/{id}.htm', 'PageController@essay');






// form routes
// form order form
Route::post('/quote', 'OrderController@quote');

Route::get('/order', 'OrderController@form')->name('orderForm');
// order form edit order
Route::get('/order/{orderid}', 'OrderController@form')->name('orderForm');
// submit order form
Route::post('/order', 'OrderController@submit');

Route::get('/cart', 'CartController@show')->name('cart');

Route::post('/orderCheck', 'OrderController@check');
// checkout
Route::get('/checkout', 'CheckoutController@form');
// submit checkout
Route::post('/checkout', 'CheckoutController@submit');
// show support form
Route::get('/support', 'SupportController@form');
// submit support form
Route::post('/support', 'SupportController@submit');



Route::resource('clients','ClientsController');


// customer service center
// Route::get('/myorders', ['as' => 'myorders', 'uses' => 'CscController@myorders', 'middleware' => 'auth']);
// Route::get('/myorders/details/{orderid}', ['uses' => 'CscController@myordersData', 'middleware' => 'auth']);
// Route::get('/myaccount', ['uses' => 'CscController@myaccount', 'middleware' => 'auth']);
// Route::get('/myfriends', ['uses' => 'CscController@myfriends', 'middleware' => 'auth']);

Route::get('/cp/{vue?}', function() {
    return view('pages.csc_myorders');
})->where('vue', '[\/\w\.-]*');
// Route::get('/myorders/{vue_capture?}', function () {
//     //$orders = Order::where('email', 'LIKE', '%')->orderBy('ts_ordered','desc')->get();
//     return view('pages.csc_myorders');
// })->where('vue_capture', '[\/\w\.-]*');

// Route::get('/myorders/{route?}', ['uses' => 'CscController@myorders', 'middleware' => 'auth']);

// Authentication Routes...
//Auth::routes();
// Authentication Routes...

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@authenticate');
Route::get('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'ClientController@create');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');


/*
Route::get('/checkout', [
    'middleware' => 'auth',
    'uses' => 'PageController@checkout'
]);
*/


// Ajax calls routes

// html order details
Route::get('/webapi/orderDetails', ['uses' => 'APIController@orderDetails', 'middleware' => 'auth']);

Route::get('/webapi/ticketSupportMessages', ['uses' => 'APIController@ticketSupportMessages', 'middleware' => 'auth']);

Route::get('/webapi/batchOrders','APIController@batchOrders');


// validate writer id
Route::get('/webapi/validateWriterId','APIController@validateWriterId');
// validate order //
Route::get('/webapi/validateOrderId','APIController@validateOrderId');
// count order message //
Route::get('/webapi/countOrderMessages','APIController@countOrderMessages');
// count ticket message //
Route::get('/webapi/countTicketSupportMessages','APIController@countTicketSupportMessages');

// return Batch total //
Route::get('/webapi/countTicketSupportMessages','APIController@countTicketSupportMessages');

// load form assets
Route::get('/webapi/loadFormProjectTypes','APIController@loadFormProjectTypes');
Route::get('/webapi/loadFormLevels','APIController@loadFormLevels');
Route::get('/webapi/loadFormPages','APIController@loadFormPages');
Route::get('/webapi/loadFormSubjects','APIController@loadFormSubjects');
Route::get('/webapi/loadFormStyles','APIController@loadFormStyles');


// my orders CscController
Route::get('/webapi/getmyorders', ['as' => 'csc.getmyorders', 'uses' => 'CscController@getmyorders', 'middleware' => 'auth']);
Route::get('/webapi/getorder', ['uses' => 'CscController@getOrder', 'middleware' => 'auth']);

// communication log
Route::get('/webapi/cl', ['uses' => 'CscController@getCl', 'middleware' => 'auth']);
Route::post('/webapi/cl', ['uses' => 'CscController@saveMessage', 'middleware' => 'auth']);
Route::get('/webapi/client', ['uses' => 'CscController@getAccount', 'middleware' => 'auth']);
Route::post('/webapi/client', ['uses' => 'CscController@saveAccount', 'middleware' => 'auth']);

Route::get('/webapi/getcs', ['uses' => 'CscController@getCs', 'middleware' => 'auth']);
Route::get('/webapi/getfiles', ['uses' => 'CscController@getFiles', 'middleware' => 'auth']);


// load json testimonials
Route::get('/webapi/loadJsonTestimonials','TestimonialController@loadJsonTestimonials');


// mail toDateTimeString

Route::get('/test','TestController@test');

Route::get('/mailable', function () {
    //$invoice = App\Invoice::find(1);

    return new App\Mail\OrderStarted();
});
