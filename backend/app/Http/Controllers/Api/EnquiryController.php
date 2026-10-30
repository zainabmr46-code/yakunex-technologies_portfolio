<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enquiry;
use Illuminate\Http\JsonResponse;

class EnquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'=>['required','string','max:120'],
            'email'=>['required','email','max:255'],
            'phone'=>['nullable','string','max:40'],
            'company'=>['nullable','string','max:160'],
            'need'=>['required','string','max:160'],
            'timeline' => ['nullable', 'string', 'max:80'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $enquiry = Enquiry::create($validated);
        return response()->json([
            'message' => 'Your enquiry was saved successfully.',
            'id'=>$enquiry->id
        ],201);
    }
}
