    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('currentDateTime').textContent =
            now.toLocaleString('vi-VN', options);
    }

    setInterval(updateDateTime, 1000); // cập nhật mỗi giây
    updateDateTime(); // chạy ngay khi tải trang
