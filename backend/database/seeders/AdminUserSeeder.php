<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = env('ADMIN_EMAIL');
        $password = env('ADMIN_PASSWORD');

        if(!$email || !$password){
            throw new \RuntimeException(
                'Please set ADMIN_EMAIL and ADMIN_PASSWORD in .env'
            );
        }

        $user = User::firstOrNew(['email'=>$email]);
        $user->name = "Yakunex Admin";
        $user->password = Hash::make($password);
        $user->is_admin = true;
        $user->save();
    }
}
