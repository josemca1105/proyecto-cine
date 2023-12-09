<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'clientes';
    protected $primaryKey = 'id';
    protected $fillable = ['first_name', 'last_name', 'cedula', 'photo', 'email', 'address', 'state', 'city', 'phone'];

    use HasFactory;
}
