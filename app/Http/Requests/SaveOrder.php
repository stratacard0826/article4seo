<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveOrder extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        // By default it returns false, change it to something like
        // this if ure using auth
        //return Auth::check();
        return 'true';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'academiclevel' => 'required',
            'pages' => 'required|integer',
            'style' => 'required',
            'sources' => 'required',
            'type' => 'required|string',
            'subject' => 'required|string',
            'title' => 'required|string|min:5',
            'details' => 'required|string|min:10',

        ];
    }

}
