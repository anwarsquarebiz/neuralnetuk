<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/how-we-can-help', function () {
    return Inertia::render('how-we-can-help');
})->name('how-we-can-help');

Route::get('/services', function () {
    return Inertia::render('services');
})->name('services');

Route::get('/services/{slug}', function ($slug) {
    return Inertia::render('services/show', [
        'slug' => $slug
    ]);
});

Route::get('/solutions', function () {
    return Inertia::render('services'); // Using services.tsx as index for now, or I can create a new solutions index
})->name('solutions');

Route::get('/solutions/{slug}', function ($slug) {
    return Inertia::render("solutions/$slug");
});

Route::get('/consulting', function () {
    return Inertia::render('consulting');
});

Route::get('/how-we-can-help', function () {
    return Inertia::render('how-we-can-help');
});

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
