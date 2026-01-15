<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;
use App\Models\Categoria;

class PeliculaController extends Controller
{
    public function portada()
    {
        $categorias = Categoria::all();
        return view('peliculas.portada', compact('categorias'));
    }

    //API: Listar todas las películas con su categoría
    public function list(){
        $peliculas = Pelicula::with('categoria')->get();
        return response()->json($peliculas);
    }
}
