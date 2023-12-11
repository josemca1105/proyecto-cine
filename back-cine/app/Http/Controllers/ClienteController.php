<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Support\Facades\Validator;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|min:3|max:10',
            'last_name' => 'required|min:3|max:10',
            'cedula' => 'required|min:7|max:10',
            'photo' => 'required',
            'email' => 'required|email|min:11',
            'address' => 'required|min:6',
            'state' => 'required',
            'city' => 'required|min:6',
            'phone' => 'required|min:11|max:11'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $clientes = new Cliente([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'cedula' => $request->input('cedula'),
            'photo' => $request->input('photo'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'state' => $request->input('state'),
            'city' => $request->input('city'),
            'phone' => $request->input('phone'),
        ]);

        $clientes->save();
        return response()->json('Cliente creado!');
    }

    public function update(Request $request, $id)
    {
        $clientes = Cliente::find($id);

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|min:3|max:10',
            'last_name' => 'required|min:3|max:10',
            'cedula' => 'required|min:7|max:10',
            'email' => 'required|email|min:11',
            'address' => 'required|min:6',
            'state' => 'required',
            'city' => 'required|min:6',
            'phone' => 'required|min:11|max:11'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $clientes = Cliente::find($id);
            if($clientes) {
                $clientes->update($request->all());
                return response()->json('Datos de cliente actualizados!');
            } else {
                return response()->json('Cliente no encontrado');
            }
        }
    }

    public function show($id)
    {
        $contact = Cliente::find($id);
        return response()->json($contact);
    }

    public function destroy($id)
    {
        $clientes = Cliente::find($id);
        $clientes->delete();
        return response()->json('Cliente eliminado!');
    }
}
