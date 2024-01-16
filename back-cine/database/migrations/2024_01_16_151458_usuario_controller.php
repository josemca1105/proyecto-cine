<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name', 255);
            $table->string('email', 255)->unique();
            $table->string('password', 255);
            $table->string('last_name', 255);
            $table->string('cedula', 10);
            $table->string('photo', 255);
            $table->string('address', 255);
            $table->string('state', 255);
            $table->string('city', 255);
            $table->string('phone', 255);
            $table->string('admin');
            $table->timestamps();

            $usuarios = [
                ['id' => 1, 'first_name' => 'Jose', 'email' => 'jose@admin.com', 'password' => 'admin1234', 'admin' => '1'],
            ];

            $table->insert($usuarios);
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
