<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\Models\Pelicula;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear categorias
        $accion = Categoria::create(['nombre' => 'Acción']);
        $comedia = Categoria::create(['nombre' => 'Comedia']);
        $drama = Categoria::create(['nombre' => 'Drama']);
        $terror = Categoria::create(['nombre' => 'Terror']);
        $cienciaFiccion = Categoria::create(['nombre' => 'Ciencia Ficción']);
        $animacion = Categoria::create(['nombre' => 'Animación']);

        // Crear peliculas de ejemplo
        $peliculas = [
            // Acción
            ['nombre' => 'Mad Max: Fury Road', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTQ2MzI1ODYyOV5BMl5BanBnXkFtZTgwOTI0ODkyMjE@._V1_FMjpg_UX509_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1392190/'],
            ['nombre' => 'John Wick', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMDkyMjU2MjYtYTAwNy00MGE5LThhYTQtMTFkMjAyMDY1YWFlXkEyXkFqcGc@._V1_FMjpg_UX800_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt2911666/'],
            ['nombre' => 'The Dark Knight', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTIzMDc4MzA2Ml5BMl5BanBnXkFtZTcwODU0MzA3MQ@@._V1_FMjpg_UX510_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0468569/'],
            // Comedia
            ['nombre' => 'Superbad', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTc1ODIxMDk4OF5BMl5BanBnXkFtZTcwNTE3MTU1MQ@@._V1_FMjpg_UX350_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0829482/'],
            ['nombre' => 'The Hangover', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_FMjpg_UX490_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1119646/'],
            ['nombre' => 'Step Brothers', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BODkxOGRkY2UtOTA4Zi00YjE3LTk4NTItOGY3YWU4MWRlODZmXkEyXkFqcGc@._V1_FMjpg_UX508_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0838283/'],
            // Drama
            ['nombre' => 'The Shawshank Redemption', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTA1MjE0Nzk4MDleQTJeQWpwZ15BbWU4MDA0NjIxMjAx._V1_FMjpg_UX364_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0111161/'],
            ['nombre' => 'Forrest Gump', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2JmYjc5MWEtNjY1MS00NGQwLTlhMWEtMGM1YjkxODllMmYyXkEyXkFqcGc@._V1_FMjpg_UY2965_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0109830/'],
            ['nombre' => 'Fight Club', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMDNkMzU0MzktNDc0Ny00MDE3LWFlZWEtNTQzYTdiYmFiZWUzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0137523/'],
            // Terror
            ['nombre' => 'The Conjuring', 'categoria_id' => $terror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2U2NGE1OWQtN2FjNi00YmQ2LTliMDAtNzMyYzQ5YTJiNDFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1457767/'],
            ['nombre' => 'Get Out', 'categoria_id' => $terror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UY2048_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt5052448/'],
            ['nombre' => 'A Quiet Place', 'categoria_id' => $terror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNzEyZTJjNzItYTkzZi00MjEyLWE1N2MtNGMwZTI4NjdiYjUzXkEyXkFqcGc@._V1_FMjpg_UY2000_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt6644200/'],
            // Ciencia Ficción
            ['nombre' => 'Inception', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTI4NDk5NDgzN15BMl5BanBnXkFtZTcwNzU0OTk1Mw@@._V1_FMjpg_UY2048_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1375666/'],
            ['nombre' => 'The Matrix', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMmNiOGVlZWQtODU5MC00YWQxLTg4OGEtNmUyMjc2ZTRkMmIyXkEyXkFqcGc@._V1_FMjpg_UY2158_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0133093/'],
            ['nombre' => 'Interstellar', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNTE0MmZiNGEtOGY3NS00NDcyLWFiYTItM2IwMWI4YzBkMzk3XkEyXkFqcGc@._V1_FMjpg_UY4134_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0816692/'],
            // Animación
            ['nombre' => 'Toy Story', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1005_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0114709/'],
            ['nombre' => 'Finding Nemo', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTFiMjA0NjAtZTEwYS00MWRiLWI3MGEtMDlkZGY1MDQ4NjhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0266543/'],
            ['nombre' => 'The Lion King', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNTA4ODU2NDctNjM5Mi00MGJhLThiN2QtMjY0ZmQ5Y2M3ODA4XkEyXkFqcGc@._V1_FMjpg_UX1015_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0110357/'],
        ];
        foreach ($peliculas as $pelicula) {
            Pelicula::create($pelicula);
        }

        $this->command->info('Se han insertado las peliculas y categorias de ejemplo correctamente.');
    }
}
