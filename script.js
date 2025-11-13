// CẤU HÌNH CẦN THIẾT (VUI LÒNG THAY THẾ)
const VN_CURRENCY_RATE = 26000; // Tỷ giá VND/USD cố định
// THAY THẾ 'your_telegram_username' BẰNG USERNAME CỦA BẠN (KHÔNG CÓ @)
const TELEGRAM_USERNAME = "tCode_T95";
// THAY THẾ BẰNG ĐỊA CHỈ VÍ USDT CỦA BẠN
const USDT_ADDRESS = "TG6XtBaVVdnHDKnRLzUa4HNUd9bPx7Xuow";
// THAY THẾ BẰNG LINK MÃ QR THANH TOÁN CỦA BẠN (SỬ DỤNG PLACEHOLDER)
const QR_MOMO_URL = "https://placehold.co/300x300/21262d/c9d1d9?text=QR+Code+Thanh+Toan+VN";
// THAY THẾ BẰNG LINK ĐĂNG KÝ SÀN CỦA BẠN
const REGISTRATION_LINK = "https://your_broker_registration_link.com";
// THAY THẾ CÁC LINKS FILE/VIDEO HƯỚNG DẪN
const GUIDE_LINKS = {
    doc: "https://docs.google.com/document/d/1cEI5y-Tl7x02A00akRTyrTH1y5HFPDdQwE1J_DfpejM/edit?usp=sharing",
    video: "https://www.youtube.com/@TCode.TradingTech"
};
// ------------------------------------
let currentLang = 'vn';
// 1. DỮ LIỆU BOT VÀ GIÁ
const botData = {
    SoloZenging: {
        vn: {
            name: "Solo Zenging",
            features: "Chiến lược giao dịch độc lập, sử dụng dải Bollinger Bands kết hợp RSI để bắt đỉnh/đáy. Phù hợp với thị trường sideways.",
            strengths: "Tỷ lệ thắng cao, ít bị ảnh hưởng bởi tin tức mạnh. Dễ dàng cài đặt.",
            weaknesses: "Dừng giao dịch khi thị trường có xu hướng mạnh, cần vốn tối thiểu để chịu rủi ro.",
            minCapital: "500 USD",
        },
        en: {
            name: "Solo Zenging",
            features: "Independent trading strategy, using Bollinger Bands combined with RSI to catch market tops/bottoms. Suitable for sideways markets.",
            strengths: "High win rate, less affected by major news. Easy to set up.",
            weaknesses: "Stops trading during strong trends, requires minimum capital to absorb risk.",
            minCapital: "500 USD",
        },
        pricing: {
            "week": { usd: 30, vn: "Tuần", en: "Week" },
            "1month": { usd: 100, vn: "1 Tháng", en: "1 Month" },
            "3months": { usd: 270, vn: "3 Tháng", en: "3 Months" },
            "6months": { usd: 480, vn: "6 Tháng", en: "6 Months" },
            "1year": { usd: 840, vn: "1 Năm", en: "1 Year" },
            "lifetime": { usd: 1800, vn: "Vĩnh viễn", en: "Lifetime" },
        }
    },
    SoloMarket: {
        vn: {
            name: "Solo Market",
            features: "Chiến lược giao dịch theo xu hướng, sử dụng hệ thống Moving Averages để xác định và đi theo trend chính.",
            strengths: "Lợi nhuận lớn trong thị trường có xu hướng rõ ràng. Tận dụng tối đa các đợt sóng.",
            weaknesses: "Dễ bị dính stoploss trong thị trường đi ngang hoặc sideway. Yêu cầu quản lý rủi ro chặt chẽ.",
            minCapital: "1000 USD",
        },
        en: {
            name: "Solo Market",
            features: "Trend-following strategy, using Moving Averages system to identify and follow the main trend.",
            strengths: "Large profits in clear trending markets. Maximizes wave utilization.",
            weaknesses: "Prone to stop-loss during ranging or sideways markets. Requires strict risk management.",
            minCapital: "1000 USD",
        },
        pricing: {
            "week": { usd: 40, vn: "Tuần", en: "Week" },
            "1month": { usd: 130, vn: "1 Tháng", en: "1 Month" },
            "3months": { usd: 350, vn: "3 Tháng", en: "3 Months" },
            "6months": { usd: 620, vn: "6 Tháng", en: "6 Months" },
            "1year": { usd: 1080, vn: "1 Năm", en: "1 Year" },
            "lifetime": { usd: 2200, vn: "Vĩnh viễn", en: "Lifetime" },
        }
    },
    B9_Scalper: {
        vn: {
            name: "B9 Scalper",
            features: "Chiến lược lướt sóng siêu nhanh (Scalping), tập trung vào các khung thời gian M1-M5 để kiếm lợi nhuận nhỏ và thoát lệnh nhanh.",
            strengths: "Phù hợp với những người thích giao dịch tần suất cao, có thể kiếm lợi nhuận ngay cả khi thị trường biến động nhẹ.",
            weaknesses: "Rủi ro cao do độ trượt giá (slippage), cần spread thấp và tốc độ thực thi lệnh nhanh.",
            minCapital: "300 USD",
        },
        en: {
            name: "B9 Scalper",
            features: "Ultra-fast scalping strategy, focused on M1-M5 timeframes to make small profits and exit trades quickly.",
            strengths: "Suitable for high-frequency traders, can profit even with slight market fluctuations.",
            weaknesses: "High risk due to slippage, requires low spread and fast order execution speed.",
            minCapital: "300 USD",
        },
        pricing: {
            "week": { usd: 25, vn: "Tuần", en: "Week" },
            "1month": { usd: 80, vn: "1 Tháng", en: "1 Month" },
            "3months": { usd: 210, vn: "3 Tháng", en: "3 Months" },
            "6months": { usd: 360, vn: "6 Tháng", en: "6 Months" },
            "1year": { usd: 600, vn: "1 Năm", en: "1 Year" },
            "lifetime": { usd: 1200, vn: "Vĩnh viễn", en: "Lifetime" },
        }
    }
};
// 2. DỮ LIỆU NGÔN NGỮ (LOCALIZATION)
const localization = {
    vn: {
        page_title: "TCode-Trading Hệ Bot",
        header_title: "TCode-Trading Hệ Bot",
        lang_en: "English",
        lang_vn: "Tiếng Việt",
        section_info_title: "Thông Tin Tổng Quát Về Bot",
        select_bot: "Chọn Bot:",
        bot_features: "Đặc điểm của Bot:",
        bot_strengths: "Điểm mạnh:",
        bot_weaknesses: "Điểm yếu:",
        bot_min_capital: "Mức vốn tối thiểu:",
        btn_guide_file: "File Hướng Dẫn",
        btn_guide_video: "Video Hướng Dẫn",
        section_rental_title: "Thông Tin Thuê Bot",
        highlight_register: "Đăng ký tài khoản qua link: ",
        id_mt5_label: "ID Tài khoản MT5/MT4:",
        select_package_label: "Chọn Gói Thuê:",
        select_payment_label: "Chọn Phương Thức Thanh Toán:",
        payment_qr: "QR Code (VND)",
        payment_usdt: "USDT TRC20",
        total_price_label: "Tổng Giá Trị Thanh Toán:",
        btn_generate_order: "Tạo Đơn",
        btn_confirm_payment: "Xác nhận Thanh Toán",
        order_details_title: "Chi Tiết Đơn Hàng & Thanh Toán",
        order_bot: "Bot:",
        order_package: "Gói:",
        order_id_mt5: "ID MT5:",
        order_price_usd: "Giá (USD):",
        order_price_vnd: "Giá (VND):",
        payment_method: "Phương Thức:",
        payment_info_qr: "Quét mã QR sau để thanh toán. Vui lòng chuyển khoản CHÍNH XÁC số tiền VND bên trên.",
        payment_info_usdt: "Vui lòng chuyển khoản CHÍNH XÁC số tiền USD bên trên đến địa chỉ ví sau:",
        msg_error_id: "Vui lòng nhập ID Tài khoản MT5/MT4.",
        msg_order_id_prefix: "DH",
        copy_usdt: "Sao chép Địa chỉ Ví",
        copied_usdt: "Đã sao chép!",
    },
    en: {
        page_title: "TCode-Trading Bot System",
        header_title: "TCode-Trading Bot System",
        lang_en: "English",
        lang_vn: "Vietnamese",
        section_info_title: "General Bot Information",
        select_bot: "Select Bot:",
        bot_features: "Bot Features:",
        bot_strengths: "Strengths:",
        bot_weaknesses: "Weaknesses:",
        bot_min_capital: "Minimum Capital:",
        btn_guide_file: "Guide File",
        btn_guide_video: "Guide Video",
        section_rental_title: "Bot Rental Information",
        highlight_register: "Register an account via link: ",
        id_mt5_label: "MT5/MT4 Account ID:",
        select_package_label: "Select Rental Package:",
        select_payment_label: "Select Payment Method:",
        payment_qr: "QR Code (VND)",
        payment_usdt: "USDT TRC20",
        total_price_label: "Total Payment Value:",
        btn_generate_order: "Generate Order",
        btn_confirm_payment: "Confirm Payment",
        order_details_title: "Order Details & Payment",
        order_bot: "Bot:",
        order_package: "Package:",
        order_id_mt5: "MT5 ID:",
        order_price_usd: "Price (USD):",
        order_price_vnd: "Price (VND):",
        payment_method: "Method:",
        payment_info_qr: "Scan the QR code below to pay. Please transfer the EXACT VND amount above.",
        payment_info_usdt: "Please transfer the EXACT USD amount above to the following wallet address:",
        msg_error_id: "Please enter your MT5/MT4 Account ID.",
        msg_order_id_prefix: "OR",
        copy_usdt: "Copy Wallet Address",
        copied_usdt: "Copied!",
    }
};

// --- CÁC HÀM XỬ LÝ LOGIC ---
// Hàm cập nhật ngôn ngữ cho toàn bộ trang
function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-localize]').forEach(el => {
        const key = el.getAttribute('data-localize');
        if (localization[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                // Dành cho placeholder hoặc option text
                if (el.placeholder) {
                    el.placeholder = localization[lang][key];
                } else {
                     el.textContent = localization[lang][key];
                }
            } else {
                el.textContent = localization[lang][key];
            }
        }
    });
    // Cập nhật lại các option trong select box nếu cần
    updatePackageOptions();
    // Cập nhật lại thông tin bot sau khi đổi ngôn ngữ
    updateBotDetails();
}
// Hàm cập nhật tùy chọn gói thuê theo ngôn ngữ
function updatePackageOptions() {
    const select = document.getElementById('rental_package');
    const selectedBot = document.getElementById('select_bot').value;
    const pricing = botData[selectedBot].pricing;
    const currentSelectedValue = select.value;
   
    select.innerHTML = ''; // Xóa các tùy chọn cũ
    for (const key in pricing) {
        const option = document.createElement('option');
        option.value = key;
        // Sử dụng tên gói theo ngôn ngữ hiện tại
        option.textContent = pricing[key][currentLang];
        select.appendChild(option);
    }
    select.value = currentSelectedValue || Object.keys(pricing)[0];
    calculatePrice(); // Tính lại giá sau khi cập nhật
}
// Hàm cập nhật chi tiết bot
function updateBotDetails() {
    const selectedBot = document.getElementById('select_bot').value;
    const data = botData[selectedBot][currentLang];
   
    // Cập nhật tên bot và chi tiết
    document.getElementById('bot_name').textContent = data.name;
    document.getElementById('info_features').textContent = data.features;
    document.getElementById('info_strengths').textContent = data.strengths;
    document.getElementById('info_weaknesses').textContent = data.weaknesses;
    document.getElementById('info_min_capital').textContent = data.minCapital;
    // Cập nhật các option gói thuê (để đảm bảo tên gói theo đúng ngôn ngữ)
    updatePackageOptions();
}
// Hàm tính toán giá
function calculatePrice() {
    const selectedBot = document.getElementById('select_bot').value;
    const selectedPackageKey = document.getElementById('rental_package').value;
    if (!selectedBot || !selectedPackageKey) return;
    const priceUSD = botData[selectedBot].pricing[selectedPackageKey].usd;
    const priceVND = priceUSD * VN_CURRENCY_RATE;
    // Định dạng tiền tệ
    const formatVND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(priceVND);
    const formatUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(priceUSD);
    // Cập nhật hiển thị
    document.getElementById('total_price_usd').textContent = formatUSD;
    document.getElementById('total_price_vnd').textContent = formatVND;
   
    // Lưu trữ giá trị cho bước tạo đơn hàng
    document.getElementById('total_price_vnd').setAttribute('data-vnd', priceVND);
    document.getElementById('total_price_usd').setAttribute('data-usd', priceUSD);
}
// Hàm tạo đơn hàng và hiển thị thông tin thanh toán
function generateOrder() {
    const mt5Id = document.getElementById('mt5_id').value.trim();
    if (!mt5Id) {
        // Hiển thị thông báo lỗi thay vì alert
        showMessage(localization[currentLang].msg_error_id, 'error');
        return;
    }
    const botName = document.getElementById('select_bot').value;
    const packageKey = document.getElementById('rental_package').value;
    const packageName = botData[botName].pricing[packageKey][currentLang];
    const paymentMethod = document.getElementById('payment_method').value;
    const priceUSD = document.getElementById('total_price_usd').getAttribute('data-usd');
    const priceVND = document.getElementById('total_price_vnd').getAttribute('data-vnd');
   
    // 1. Tạo ID đơn hàng ngẫu nhiên (chỉ là chuỗi tạm, không phải ID database)
    const orderID = localization[currentLang].msg_order_id_prefix + '-' + Date.now().toString().slice(-6) + Math.random().toString(36).substring(2, 5).toUpperCase();
    // 2. Cập nhật chi tiết đơn hàng
    document.getElementById('order_id_display').textContent = orderID;
    document.getElementById('order_bot_display').textContent = botName;
    document.getElementById('order_package_display').textContent = packageName;
    document.getElementById('order_id_mt5_display').textContent = mt5Id;
    document.getElementById('order_price_usd_display').textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(priceUSD);
    document.getElementById('order_price_vnd_display').textContent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(priceVND);
    document.getElementById('order_payment_method_display').textContent = localization[currentLang][paymentMethod === 'qr' ? 'payment_qr' : 'payment_usdt'];
    // 3. Cập nhật thông tin thanh toán (QR/USDT)
    const qrInfoDiv = document.getElementById('payment_qr_info');
    const usdtInfoDiv = document.getElementById('payment_usdt_info');
    if (paymentMethod === 'qr') {
        document.getElementById('payment_info_text').setAttribute('data-localize', 'payment_info_qr');
        document.getElementById('payment_info_text').textContent = localization[currentLang].payment_info_qr;
        qrInfoDiv.classList.remove('hidden');
        usdtInfoDiv.classList.add('hidden');
    } else { // usdt
        document.getElementById('payment_info_text').setAttribute('data-localize', 'payment_info_usdt');
        document.getElementById('payment_info_text').textContent = localization[currentLang].payment_info_usdt;
        document.getElementById('usdt_address_display').textContent = USDT_ADDRESS;
        qrInfoDiv.classList.add('hidden');
        usdtInfoDiv.classList.remove('hidden');
    }
    // 4. Hiển thị khối chi tiết đơn hàng
    document.getElementById('order_details_block').classList.remove('hidden');
   
    // Cuộn đến khối chi tiết đơn hàng
    document.getElementById('order_details_block').scrollIntoView({ behavior: 'smooth' });
}
// Hàm chuyển hướng đến Telegram với thông tin đơn hàng
function confirmPayment() {
    const mt5Id = document.getElementById('mt5_id').value.trim();
    if (!mt5Id || document.getElementById('order_details_block').classList.contains('hidden')) {
        showMessage(localization[currentLang].msg_error_id, 'error');
        return;
    }
    const orderID = document.getElementById('order_id_display').textContent;
    const botName = document.getElementById('order_bot_display').textContent;
    const packageName = document.getElementById('order_package_display').textContent;
    const priceVND = document.getElementById('total_price_vnd').getAttribute('data-vnd');
    const priceUSD = document.getElementById('total_price_usd').getAttribute('data-usd');
    const paymentMethod = document.getElementById('order_payment_method_display').textContent;
    // Xây dựng chuỗi thông tin đơn hàng cho Telegram
    const message = `
[Xác nhận Đơn hàng TCode-Trading]
- ID Đơn hàng: ${orderID}
- ID MT5/MT4: ${mt5Id}
- Bot: ${botName}
- Gói thuê: ${packageName}
- Giá USD: $${priceUSD}
- Giá VND: ${new Intl.NumberFormat('vi-VN', { minimumFractionDigits: 0 }).format(priceVND)}
- Phương thức: ${paymentMethod}
Tôi đã hoàn thành thanh toán. Vui lòng kiểm tra và kích hoạt bot. Cảm ơn!
    `.trim();
    // Mã hóa URL
    const encodedMessage = encodeURIComponent(message);
    const telegramURL = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;
    // Chuyển hướng
    window.open(telegramURL, '_blank');
}

// Hàm sao chép địa chỉ ví USDT
function copyUsdtAddress() {
    const address = document.getElementById('usdt_address_display').textContent;
    // Sử dụng API Clipboard hiện đại nếu có, hoặc fallback
    if (navigator.clipboard) {
        navigator.clipboard.writeText(address).then(() => {
            const btn = document.getElementById('copy_usdt_btn');
            const originalText = localization[currentLang].copy_usdt;
            btn.textContent = localization[currentLang].copied_usdt;
            setTimeout(() => {
                btn.textContent = originalText;
            }, 1500);
        }).catch(err => {
            console.error('Could not copy text: ', err);
            // Fallback using execCommand (if needed)
        });
    }
}

// Hàm hiển thị thông báo tùy chỉnh (thay thế alert)
function showMessage(text, type = 'info') {
    const msgBox = document.getElementById('custom_message_box');
    msgBox.textContent = text;
    msgBox.className = 'fixed top-4 right-4 p-4 rounded-lg z-50 transition-all duration-300';
   
    if (type === 'error') {
        msgBox.classList.add('bg-red-600', 'text-white');
    } else {
        msgBox.classList.add('bg-blue-600', 'text-white');
    }
   
    msgBox.classList.remove('hidden');
    setTimeout(() => {
        msgBox.classList.add('hidden');
    }, 3000);
}
// Thiết lập sự kiện khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Thiết lập ngôn ngữ mặc định (VN)
    switchLanguage('vn');
   
    // Gán sự kiện cho nút chuyển ngôn ngữ
    document.getElementById('lang_vn').addEventListener('click', () => switchLanguage('vn'));
    document.getElementById('lang_en').addEventListener('click', () => switchLanguage('en'));
    // Gán sự kiện cho các Select box
    document.getElementById('select_bot').addEventListener('change', updateBotDetails);
    document.getElementById('rental_package').addEventListener('change', calculatePrice);
   
    // Gán sự kiện cho các nút hành động
    document.getElementById('btn_generate_order').addEventListener('click', generateOrder);
    document.getElementById('btn_confirm_payment').addEventListener('click', confirmPayment);
    document.getElementById('copy_usdt_btn').addEventListener('click', copyUsdtAddress);
   
    // Khởi tạo lần đầu
    updateBotDetails();
});
