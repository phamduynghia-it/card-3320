const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `Em`,           // Tên người gửi
    recipient: `Chồng yêu`,       // Tên người nhận

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `I Love You ❤`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `Hehe, Chào đồng chí của em 
Chúc anh luôn vui vẻ và yêu em hơn mỗi ngày nhoa ♥️♥️`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: ["./assets/user_images_0.jpg","./assets/user_images_1.jpg"],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp3`,
};

