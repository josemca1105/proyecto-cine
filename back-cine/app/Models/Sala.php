<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    protected $table = 'salas';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'n_asientos', 'desde', 'hasta', 'tipo'];

    use HasFactory;
}
