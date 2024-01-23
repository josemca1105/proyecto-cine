<?php

namespace App\Http\Controllers;

use App\Models\Peliculas;
use Illuminate\Http\Request;

class PeliculasController extends Controller
{
    //
    public function index()
    {
        $peliculas = Peliculas::all();
        return response()->json($peliculas);
    }

    public function store(Request $request)
    {

    }
}
