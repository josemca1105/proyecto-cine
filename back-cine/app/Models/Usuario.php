<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $pimaryKey = 'id';
    protected $fillable = ['first_name', 'email', 'password', 'last_name', 'cedula', 'photo', 'address', 'state', 'city', 'phone', 'isAdmin'];

    use HasFactory;
}
