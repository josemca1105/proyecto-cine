<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peliculas extends Model
{
    protected $table = 'peliculas';
    protected $primaryKey = 'id';
    protected $fillable = ['nombre', 'descripcion', 'duracion', 'genero', 'fecha_estreno'];
    use HasFactory;
}
