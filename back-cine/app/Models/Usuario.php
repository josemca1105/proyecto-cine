<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $pimaryKey = 'id';
    protected $fillable = ['first_name', 'email', 'password', 'last_name', 'cedula', 'address', 'state', 'city', 'phone', 'isAdmin'];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    use HasFactory;
    use HasApiTokens;
}
