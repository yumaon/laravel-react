<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$videos = Video::all();

        $videos = Video::all()->each(function ($video) {
            $video->statusName;
        });

        return Inertia::render('Video/Index', compact('videos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Video/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = auth()->id();
        Video::create($data);

        return Inertia::location(route('videos.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Video/Show', compact('video'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Video/Edit', compact('video'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = $request->validate([
            'title' => 'required|string|max:255',
            'text' => 'required|string',
            'status' => 'required',
            'youtube_url' => 'nullable|string', // urlからstringに変更
        ]);

        $validateData = $request->all();

        $video = Video::find($id);
        $video->update($validateData);

        //return redirect()->route('videos.index')->with('success', '更新が完了しました。');
        return \Inertia\Inertia::location(route('videos.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Video::find($id);
        $video->delete();

        return Inertia::location(route('videos.index'));
    }
}
