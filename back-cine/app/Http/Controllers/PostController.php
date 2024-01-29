<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\PostStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostStoreRequest $request)
    {
        //
        try {
            //code...
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            Post::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description,
            ]);

            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            // la imagen se guarda en storage/app/public

            return response()->json([
                'message' => 'Imagen subida con exito'
            ], 200);
        } catch (\Exception $e) {
            //throw $th;
            return response()->json([
                'message' => 'Algo salio mal!'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
