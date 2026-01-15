<!doctype html>
<html lang="en">
<head>
    <title>Películas - Portada</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <style>
        .pelicula-card {
            transition: transform 0.2s;
            cursor: pointer;
        }
        .pelicula-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .pelicula-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        .categoria-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;
        }

        /* Skeleton Screen Styles */
        .skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }

        @keyframes loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }

        .skeleton-card {
            border: none;
        }

        .skeleton-image {
            height: 400px;
            border-radius: 0.25rem 0.25rem 0 0;
        }

        .skeleton-title {
            height: 1.5rem;
            margin: 1rem;
            border-radius: 0.25rem;
        }

        .skeleton-text {
            height: 0.875rem;
            margin: 0 1rem 0.5rem 1rem;
            border-radius: 0.25rem;
        }

        .skeleton-button {
            height: 2.5rem;
            margin: 1rem;
            border-radius: 0.25rem;
        }
    </style>
</head>

<body class="bg-light">
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="" class="navbar-brand">
            <i class="bi bi-film"></i> Catalogo de Películas
        </a>
        <div>
            <a href="" class="btn btn-outline-light btn-sm me-2">
                <i class="bi bi-tags"></i> Categorías
            </a>
            <a href="" class="btn btn-outline-light btn-sm">
                <i class="bi bi-gear"></i> Películas
            </a>
        </div>
    </div>
</nav>

<div class="container my-5">
    <!-- Filtro de Categorías -->
    <div class="row mb-4">
        <div class="col-md-12">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <h5 class="mb-0">
                                <i class="bi bi-funnel"></i> Filtrar por categorías
                            </h5>
                        </div>
                        <div class="col-md-9">
                            <div class="d-flex gap-2">
                                <select id="categoriaSelect" class="form-select form-select-lg flex-grow-1" >
                                    <option value="">-- Todas las categorías --</option>
                                    @foreach($categorias as $categoria)
                                        <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
                                    @endforeach
                                </select>
                                <button id="btnReset" class="btn btn-outline-danger btn-lg" title="Limpiar filtros">
                                    <i class="bi bi-arrow-clockwise"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Área de Películas -->
    <div id="areaPeliculas"></div>

    <!-- Spinner de carga -->
    <div class="text-center py-5 d-none" id="cargandoPeliculas">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-muted">Cargando películas ...</p>
    </div>
</div>

<!-- Modal para detalles de película -->
<div class="modal fade" id="modalDetallesPelicula" tabindex="-1" aria-labelledby="modalDetallesPeliculaLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalDetallesPeliculaLabel">Detalles de la Película</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <img id="detallePeliculaImagen" src="" alt="Portada" class="img-fluid rounded" style="width: 100%; height: auto;">
                    </div>
                    <div class="col-md-8">
                        <h2 id="detallePeliculaNombre" class="mb-3"></h2>
                        <div class="mb-3">
                            <span id="detallePeliculaCategoria" class="badge bg-primary fs-6"></span>
                        </div>
                        <div class="mb-3">
                            <h5>Descripción</h5>
                            <p id="detallePeliculaDescripcion" class="text-muted"></p>
                        </div>
                        <div class="mb-3">
                            <h5>Año</h5>
                            <p id="detallePeliculaAño" class="mb-0"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <a id="detallePeliculaIMDB" href="#" target="_blank" class="btn btn-warning">
                    <i class="bi bi-link-45deg"></i> Ver en IMDB
                </a>
            </div>
        </div>
    </div>
</div>

<footer class="bg-dark text-white text-center py-3">
    <div class="container">
        <p class="mb-0">&copy; 2026 Catalogo de Películas. Todos los derechos reservados.</p>
    </div>
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    cargarTodasPeliculas();

    // Event listeners
    document.getElementById('categoriaSelect').addEventListener('change', function() {
        cargarPeliculasPorCategoria();
    });

    document.getElementById('btnReset').addEventListener('click', function() {
        resetearFiltros();
    });
});

function resetearFiltros() {
    document.getElementById('categoriaSelect').value = '';
    cargarTodasPeliculas();
}

function mostrarCargando() {
    document.getElementById('cargandoPeliculas').classList.remove('d-none');
    document.getElementById('areaPeliculas').innerHTML = mostrarSkeletons(8);
}

function ocultarCargando() {
    document.getElementById('cargandoPeliculas').classList.add('d-none');
}

function mostrarSkeletons(cantidad) {
    let html = '<div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">';

    for (let i = 0; i < cantidad; i++) {
        html += `
            <div class="col">
                <div class="card skeleton-card h-100 shadow-sm">
                    <div class="skeleton skeleton-image"></div>
                    <div class="card-body d-flex flex-column">
                        <div class="skeleton skeleton-title mb-2"></div>
                        <div class="skeleton skeleton-text" style="width: 70%;"></div>
                        <div class="skeleton skeleton-text" style="width: 50%;"></div>
                        <div class="skeleton skeleton-button mt-auto"></div>
                    </div>
                </div>
            </div>
        `;
    }

    html += '</div>';
    return html;
}

// Función para cargar todas las películas
async function cargarTodasPeliculas() {
    try {
        mostrarCargando();
        const response = await fetch('/api/peliculas');
        if(!response.ok) throw new Error('Error en la respuesta de la API');
        const peliculas = await response.json();
        ocultarCargando();
        mostrarPeliculas(peliculas, 'Todas las Películas');
    } catch(error) {
        console.error('Error al cargar las películas:', error);
        ocultarCargando();
        mostrarError('Error al cargar las películas. Por favor, inténtelo de nuevo más tarde.');
    }
}

// Función para cargar por categoría
async function cargarPeliculasPorCategoria() {
    const categoriaId = document.getElementById('categoriaSelect').value;
    if(!categoriaId) {
        cargarTodasPeliculas();
        return;
    }
    try {
        mostrarCargando();
        const response = await fetch(`/api/categorias/${categoriaId}/peliculas`);
        if(!response.ok) throw new Error('Error al cargar las películas por categoría');
        const peliculas = await response.json();
        ocultarCargando();
        const categoriaTexto = document.getElementById('categoriaSelect').selectedOptions[0].text;
        mostrarPeliculas(peliculas, `Películas de la categoría: ${categoriaTexto}`);
    } catch(error) {
        ocultarCargando();
        mostrarError('Error al cargar las películas por categoría. Por favor, inténtelo de nuevo más tarde.');
    }
}

// Función para mostrar detalles de película en modal
function mostrarDetallesPelicula(pelicula) {
    document.getElementById('detallePeliculaNombre').textContent = pelicula.nombre;
    document.getElementById('detallePeliculaImagen').src = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
    document.getElementById('detallePeliculaImagen').onerror = function() {
        this.src = 'https://placehold.co/300x400?text=Error+al+Cargar';
    };
    document.getElementById('detallePeliculaCategoria').textContent = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoría';
    document.getElementById('detallePeliculaDescripcion').textContent = pelicula.descripcion || 'Sin descripción disponible';
    document.getElementById('detallePeliculaAño').textContent = pelicula.año || 'No disponible';

    const linkIMDB = document.getElementById('detallePeliculaIMDB');
    if (pelicula.url_imdb) {
        linkIMDB.href = pelicula.url_imdb;
        linkIMDB.classList.remove('d-none');
    } else {
        linkIMDB.classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('modalDetallesPelicula'));
    modal.show();
}

// Función para mostrar las películas en tarjetas
function mostrarPeliculas(peliculas, titulo) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = '';

    if (peliculas.length === 0) {
        areaPeliculas.innerHTML = `
            <div class="alert alert-info text-center" role="alert">
                <i class="bi bi-info-circle fs-1"></i>
                <h4 class="mt-3">No hay películas de esta categoría</h4>
                <p>Intente con otra categoría o ver todas las películas.</p>
            </div>`;
        return;
    }

    let html = `
        <div class="mb-4">
            <h2 class="text-center">
                <i class="bi bi-film"></i> ${titulo}
                <span class="badge bg-primary fs-5">${peliculas.length}</span>
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    `;

    peliculas.forEach(pelicula => {
        const imagenPelicula = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
        const categoriaNombre = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoría';

        html += `
            <div class="col">
                <div class="card pelicula-card h-100 shadow-sm cursor-pointer" onclick="mostrarDetallesPelicula(${JSON.stringify(pelicula).replace(/"/g, '&quot;')})">
                    <div class="position-relative">
                        <span class="badge bg-primary categoria-badge">${categoriaNombre}</span>
                        <img src="${imagenPelicula}" alt="${pelicula.nombre}" class="pelicula-img card-img-top"
                            onerror="this.src='https://placehold.co/300x400?text=Error+al+Cargar'">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <div class="mt-auto">
                            ${pelicula.url_imdb ? `
                                <a href="${pelicula.url_imdb}" target="_blank" class="btn btn-warning w-100" onclick="event.stopPropagation();">
                                    <i class="bi bi-link-45deg"></i> Ver en IMDB
                                </a>` : `
                                <button class="btn btn-secondary w-100" disabled>
                                    <i class="bi bi-x-circle"></i> Sin enlace IMDB
                                </button>`}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    areaPeliculas.innerHTML = html;
}

// Función para mostrar errores
function mostrarError(mensaje) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <i class="bi bi-exclamation-triangle fs-1"></i>
            <h4 class="mt-3">¡Error!</h4>
            <p>${mensaje}</p>
            <button class="btn btn-danger" onclick="cargarTodasPeliculas()">
                <i class="bi bi-arrow-clockwise"></i> Reintentar
            </button>
        </div>
    `;
}
</script>

</body>
</html>
