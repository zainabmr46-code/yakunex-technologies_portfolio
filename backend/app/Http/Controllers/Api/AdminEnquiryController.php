<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enquiry;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class AdminEnquiryController extends Controller
{
    public function index()
    {
        return response()->json(Enquiry::latest()->get());
    }

    public function update(Request $request, Enquiry $enquiry){
        $validated = $request->validate([
            'status' => [
                'required',
                Rule::in(['New', 'In Progress', 'Replied']),
            ],
        ]);

        $oldStatus = $enquiry->status;

        $enquiry->status = $validated['status'];
        $enquiry->save();

        if($oldStatus !== $enquiry->status){
            try{
                $visitor = $enquiry;

                Mail::raw(
                    "Hello {$visitor->name},\n\n" .
                     "Thank you for contacting Yakunex Technologies.\n\n" .
                    "Your enquiry status has been updated to: {$visitor->status}.\n\n" .
                    "We will keep you informed about your enquiry.\n\n" .
                    "Best regards,\n" .
                    "Yakunex Technologies",

                    function($message) use ($visitor){
                        $message->to($visitor->email)
                        ->subject('Your Enquiry Status - Yakunex Technologies');
                    }
                );
            }
            catch(\Throwable $exception){
                Log::error('Enquiry status email failed.',[
                    'enquiry_id'=>$enquiry->id,
                    'error'=> $exception->getMessage(),
                ]);
            }
        }

        return response()->json([
            'message' => 'Enquiry status updated.',
            'enquiry' => $enquiry->fresh(),
        ]);
    }

    public function destroy(Enquiry $enquiry){
        $enquiry->delete();

        return response()->json([
            'message' => 'Enquiry deleted.',
        ]);
    }
}
