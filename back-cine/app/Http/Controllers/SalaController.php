<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sala;

use Illuminate\Support\Facades\Validator;

class SalaController extends Controller
{
    //
    public function index()
    {
        $salas = Sala::all();
        return response()->json($salas);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:1',
            'n_asientos' => 'required|min:2|max:2',
            'desde' => 'required|date|after_or_equal:today',
            'hasta' => 'required|date|after:today',
            'tipo' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $salas = new Sala([
            'name' => $request->input('name'),
            'n_asientos' => $request->input('n_asientos'),
            'desde' => $request->input('desde'),
            'hasta' => $request->input('hasta'),
            'tipo' => $request->input('tipo'),
        ]);

        $salas->save();
        return response()->json('Sala creada!');
    }

    public function show($id)
    {
        $contact = Sala::find($id);
        return response()->json($contact);
    }

    public function destroy($id)
    {
        $salas = Sala::find($id);
        $salas->delete();
        return response()->json('Sala eliminada!');
    }
}
