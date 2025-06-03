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
        $currentDay = now()->format('l'); // اليوم الحالي بالإنجليزية
        $currentTime = now()->format('H:i'); // التوقيت الحالي (24 ساعة)
        $currentDateTime = now(); // التاريخ والتوقيت الحالي كامل

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
            $openTime = $hours->open_time; // مثلاً 15:30
            $closeTime = $hours->close_time; // مثلاً 01:30

            // إذا كان وقت الإغلاق أقل من وقت الفتح، يعني الإغلاق في اليوم التالي
            if ($closeTime < $openTime) {
                // إذا كان التوقيت الحالي بعد وقت الفتح أو قبل وقت الإغلاق في اليوم التالي
                if ($currentTime >= $openTime || $currentTime <= $closeTime) {
                    return true;
                }
            } else {
                // إذا كان الفتح والإغلاق في نفس اليوم
                return $currentTime >= $openTime && $currentTime <= $closeTime;
            }
        }

        return false;
    }

}
