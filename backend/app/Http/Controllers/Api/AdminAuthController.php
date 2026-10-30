<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminAuthController extends Controller
{
    public function login(Request $request){
        $validated = $request->validate([
            'email' => ['required','email'],
            'password' => ['required', 'string']
        ]);

        $user = User::where('email',$validated['email'])->first();

       if(
        !$user || !$user->is_admin || !Hash::check($validated['password'],$user->password)
       )
       {
            return response()->json([
                'message'=>'Invalid admin details',
            ],401);

       }
       $token = $user->createToken('admin-dashboard')->plainTextToken;

       return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'user'=> [
                'name' =>$user->name,
                'email'=>$user->email,
            ],
       ]);

    }

    public function logout(Request $request){
        $token = $request->user()->currentAccessToken();

        if($token){
            $token->delete();
        }

        return response()->json([
            'message'=>'Logged out successfully'
        ]);
    }
}
