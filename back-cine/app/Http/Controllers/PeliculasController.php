<?php

namespace App\Http\Controllers;

use App\Models\Peliculas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|min:2|max:20',
            'descripcion' => 'required|min:20|max:100',
            'duracion' => 'required',
            'genero' => 'required|min:3|max:10',
            'fecha_estreno' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $peliculas = new Peliculas([
            'nombre' => $request->input('nombre'),
            'descripcion' => $request->input('descripcion'),
            'duracion' => $request->input('duracion'),
            'genero' => $request->input('genero'),
            'fecha_estreno' => $request->input('fecha_estreno')
        ]);

        $peliculas->save();
        return response()->json('Pelicula Creada!');
    }

    public function update(Request $request, $id)
    {
        $peliculas = Peliculas::find($id);

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|min:2|max:20',
            'descripcion' => 'requried|min:20|max:50',
            'duracion' => 'required',
            'genero' => 'required|min:3|max:10',
            'fecha_estreno' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        } else {
            $peliculas = Peliculas::find($id);
            if ($peliculas) {
                $peliculas->update($request->all());
                return response()->json('Datos de pelicula actualizados.');
            } else {
                return response()->json('Pelicula no encontrada.');
            }
        }
    }

    public function show($id)
    {
        $contact = Peliculas::find($id);
        return response()->json($contact);
    }

    public function destroy($id)
    {
        $peliculas = Peliculas::find($id);
        $peliculas->delete();
        return response()->json('Pelicula eliminada!');
    }

}
