<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    //API: Listar películas por categoría

    public function peliculas($id){
        sleep(1); // Simular retardo de 1 segundo
        $categoria = Categoria::with('peliculas.categoria')->findOrFail($id);
        return response()->json($categoria->peliculas);
    }
}
