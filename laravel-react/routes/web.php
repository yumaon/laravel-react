<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\VideoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('videos', VideoController::class);
});

// Route::middleware('auth')->prefix('videos')->group(function () {
//     //Route::get('/', [VideoController::class, 'index'])->name('video.index');
//     // Route::get('/create', [VideoController::class, 'create'])->name('video.create');
//     // Route::post('/store', [VideoController::class, 'store'])->name('video.store');
//     // Route::put('/{id}/update', [VideoController::class, 'update'])->name('video.update');
//     // Route::get('/{id}', [VideoController::class, 'show'])->name('video.show');
//     // Route::get('/{id}/edit', [VideoController::class, 'edit'])->name('video.edit');
// });

require __DIR__ . '/auth.php';
