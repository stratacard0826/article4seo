<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Client extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'clients';

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'domain',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password_hash', 'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->password_hash;
    }
}
