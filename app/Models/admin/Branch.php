<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $guarded = [];
    protected $table = 'branches';

    public function Orders()
    {
        return $this->hasMany(Order::class, 'branch_id');
    }

    public function hours()
    {
        return $this->hasMany(BranchHour::class, 'branch_id');
    }

    public function isOpen()
    {
        $currentDay = now()->format('l'); // الحصول على اليوم الحالي
        $currentTime = now()->format('H:i');

        $dayMapping = [
            'Saturday' => 'السبت',
            'Sunday' => 'الأحد',
            'Monday' => 'الاثنين',
            'Tuesday' => 'الثلاثاء',
            'Wednesday' => 'الأربعاء',
            'Thursday' => 'الخميس',
            'Friday' => 'الجمعة',
        ];

        $dayName = $dayMapping[$currentDay] ?? null;
        $hours = $this->hours()->where('day', $dayName)->first();

        if ($hours) {
            return $currentTime >= $hours->open_time && $currentTime <= $hours->close_time;
        }

        return false;
    }

}
