<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    //
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|min:3|max:10',
            'email' => 'required|email|unique:clientes|min:11',
            'password' => 'required|min:8|max:15',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $usuarios = new Usuario([
            'first_name' => $request->input('first_name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'last_name' => $request->input('last_name'),
            'cedula' => $request->input('cedula'),
            'photo' => $request->input('photo'),
            'address' => $request->input('address'),
            'state' => $request->input('state'),
            'city' => $request->input('city'),
            'phone' => $request->input('phone'),
            'admin' => $request->input('admin')
        ]);

        $usuarios->save();
        return response()->json('Usuario creado!');
    }

    public function update(Request $request, $id)
    {
        $usuarios = Usuario::find($id);

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|min:3|max:10',
            'email' => 'required|email|unique:clientes|min:11',
            'password' => 'min:8|max:15',
            'last_name' => 'min:3|max:10',
            'cedula' => 'min:7|max:10',
            'photo' => '',
            'address' => 'min:6',
            'state' => 'required',
            'city' => 'min:6',
            'phone' => 'min:11',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $usuarios = Usuario::find($id);
            if ($usuarios) {
                $usuarios->update($request->all());
                return response()->json('Datos de usuario actualizados!');
            } else {
                return response()->json('Usuario no encontrado');
            }
        }
    }

    public function show($id)
    {
        $contact = Usuario::find($id);
        return response()->json($contact);
    }

    public function destroy($id)
    {
        $usuarios = Usuario::find($id);
        $usuarios->delete();
        return response()->json('Usuario eliminado!');
    }
}
