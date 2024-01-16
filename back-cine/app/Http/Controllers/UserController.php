<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;


class UserController extends Controller
{
    //
    public function index()
    {
        $usuarios = User::all();
        return response()->json($usuarios);
    }

    // public function register(Request $request)
    // {

    //     // Validar los datos del formulario
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:users',
    //         'password' => 'required|min:8',
    //         'apellido' => 'string|max:255',
    //         'cedula' => 'int|min:7|max:10',
    //         'foto' => 'string',

    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors(), 422);
    //     }

    //     // Guardar los datos del usuario en la base de datos
    //     $user = new User([
    //         'name' => $request->input('name'),
    //         'email' => $request->input('email'),
    //         'password' => $request->input('password')
    //     ]);
    //     $user->save();

    //     // Devolver una respuesta exitosa
    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Usuario registrado correctamente',
    //     ]);
    // }

    public function create()
    {
        return view('usuarios.create');
    }

    public function store(Request $request)
    {
        $usuario = new User();
        $usuario->nombre = $request->input('nombre');
        $usuario->email = $request->input('email');
        $usuario->password = $request->input('password');
        $usuario->apellido = $request->input('apellido');
        $usuario->cedula = $request->input('cedula');
        $usuario->foto = $request->input('foto');
        $usuario->direccion = $request->input('direccion');
        $usuario->pais = $request->input('pais');
        $usuario->estado = $request->input('estado');
        $usuario->ciudad = $request->input('ciudad');
        $usuario->telefono = $request->input('telefono');
        $usuario->admin = $request->input('admin');

        $usuario->save();

        return redirect()->route('usuarios.index');
    }

    public function show($id)
    {
        $usuario = User::findOrFail($id);

        return view('usuarios.show', compact('usuario'));
    }

    public function update(Request $request, $id)
    {
        $usuario = User::findOrFail($id);
        $usuario->nombre = $request->input('nombre');
        $usuario->email = $request->input('email');
        $usuario->password = $request->input('password');
        $usuario->apellido = $request->input('apellido');
        $usuario->cedula = $request->input('cedula');
        $usuario->foto = $request->input('foto');
        $usuario->direccion = $request->input('direccion');
        $usuario->pais = $request->input('pais');
        $usuario->estado = $request->input('estado');
        $usuario->ciudad = $request->input('ciudad');
        $usuario->telefono = $request->input('telefono');
        $usuario->admin = $request->input('admin');

        $usuario->save();

        return redirect()->route('usuarios.index');
    }

    public function destroy($id)
    {
        $usuario = User::findOrFail($id);
        $usuario->delete();

        return redirect()->route('usuarios.index');
    }
}
