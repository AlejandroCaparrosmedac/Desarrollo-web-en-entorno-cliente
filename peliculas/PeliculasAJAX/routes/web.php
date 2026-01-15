<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\CategoriaController;

// Portada pública
Route::get('/', [PeliculaController::class, 'portada'])->name('portada');

Route::prefix('api')->group(function (){
    //Películas
    Route::get('/peliculas', [PeliculaController::class, 'list'])->name('api.peliculas.list');

    //Películas por categoría
    Route::get('/categorias/{id}/peliculas', [CategoriaController::class, 'peliculas'])->name('api.categorias.peliculas');
});
