<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'text',
        'status',
        'youtube_url',
        'user_id'
    ];

    protected $appends = ['statusName'];

    const STATUS_NOT_STARTED = 0;
    const STATUS_PROCESSING = 1;
    const STATUS_COMPLETED = 2;
    const STATUS_PENDING = 3;

    public static $statusNames = [
        self::STATUS_NOT_STARTED => "未着手",
        self::STATUS_PROCESSING => "着手",
        self::STATUS_COMPLETED => "完了",
        self::STATUS_PENDING => "保留",
    ];

    public function getStatusNameAttribute()
    {
        return self::$statusNames[$this->status] ?? null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
