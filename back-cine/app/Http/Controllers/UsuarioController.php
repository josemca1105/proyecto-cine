<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


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
            'password' => bcrypt($request->input('password')),
            'last_name' => $request->input('last_name'),
            'cedula' => $request->input('cedula'),
            // 'photo' => $request->input('photo'),
            'address' => $request->input('address'),
            'state' => $request->input('state'),
            'city' => $request->input('city'),
            'phone' => $request->input('phone'),
            'isAdmin' => $request->input('isAadmin')
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
            // 'photo' => '',
            'address' => 'min:6',
            'state' => 'required',
            'city' => 'min:6',
            'phone' => 'min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $usuarios = Usuario::find($id);
            if ($usuarios) {
                $request->merge(['password' => Hash::make($request->password)]);
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

    public function login(Request $request)
    {
        // $email = $request->input('email');
        // $password = $request->input('password');

        // if (empty($email)) {
        //     return response()->json([
        //         'message' => 'El correo no puede estar vacio',
        //     ], 400);
        // } else if (strpos($email, '@gmail.com') === false ){
        //     return response()->json([
        //         'El correo debe ser Gmail',
        //     ], 400);
        // } else if (empty($password)){
        //     return response()->json([
        //         'message' => 'La contrasena no puede estar vacía',
        //     ], 400);
        // } else if (strlen($password) < 6){
        //     return response()->json([
        //         'message' => 'La contrasena debe tener al menos 6 caracteres',
        //     ], 400);
        // }

        // $admin = Usuario::where('email', $email)->where('password', $password)->first();

        // if ($admin) {
        //     $id = $admin->id;
        //     $isAdmin = $admin->isAdmin;

        //     return response()->json([
        //         'id' => $id,
        //         'isAdmin' => $isAdmin,
        //         'token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU2OTEwMTYsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.iIhvhqmdC1yk2TwuSkA_ymhE0ujLHTEhiMg570RmqfM'
        //     ], 200);
        // } else {
        //     return response()->json(['message' => 'El correo y la contrasena no coinciden'], 401);
        // }
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'El usuario o la contraseña no son correctos.',
            ], 401);
        }

        $user = Usuario::find(Auth::id());
        $token = $user->createToken('Laravel Sanctum')->accessToken;

        return response()->json([
            'result' => true,
            'token' => $token->tokenable_id,
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'email' => $user->email,
                'isAdmin' => $user->isAdmin
            ]
        ], 200);
    }
}
