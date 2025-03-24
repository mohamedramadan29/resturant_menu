import './bootstrap';

// window.Echo.private('App.Models.admin.admin.' + admin_id)
//     .listen('Illuminate\Notifications\Events\BroadcastNotificationCreated', (event) => {
//         alert(event.title);
//         // alert('test event');
//     });

Echo.private('App.Models.admin.admin.' + admin_id)
    .notification((event) => {
        $('.notification-dropdown').append(`
        <a href="${event.url}"
                class="dropdown-item py-3 border-bottom text-wrap">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <i class="fa fa-bell text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                        <p class="mb-0"><span class="fw-medium">
                                طلب
                                جديد </span>
                            <br>
                            <span>
                                ${event.title}
                                رقم
                                الطلب :
                                ${event.order_id}
                            </span>
                        </p>
                    </div>
                </div>
            </a>
       `);
        var unreadnotification = parseInt($('#unread').text());
        $('#unread').text(unreadnotification + 1);
        // تشغيل صوت الإشعار
        notificationSound.play();
    });
