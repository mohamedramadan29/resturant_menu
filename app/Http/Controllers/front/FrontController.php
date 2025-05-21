<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\admin\Category;
use App\Models\admin\Product;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public  function index()
    {
        $categories = Category::all()->map(function ($category) {
            $category->products = $category->products()->where('status', 1)->latest()->get();
            return $category;
        });
        // dd($categories);
        return view('front.index', compact('categories'));
    }
}
