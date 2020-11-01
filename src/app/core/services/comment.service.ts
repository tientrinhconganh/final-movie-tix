import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  mangComment: any[] = [
    {
      binhLuan: 'Phim Coi Tạm Được',
      taiKhoan: 'Thái Tài',
      danhGia: 7,
      trangThai: false,
      heart: 5,
    },
    {
      binhLuan: 'Vai phản diện đẹp trai ngầu lòi luôn',
      taiKhoan: 'Hà Văn Tâm',
      danhGia: 8,
      trangThai: false,
      heart: 8,
    },
    {
      binhLuan:
        'Giải trí 10 là 10 thế nào gọi là ko thoả mãn mắc mệt.. xem giải trí thế là ok rồi',
      taiKhoan: 'Mỹ Tiên',
      danhGia: 10,
      trangThai: false,
      heart: 10,
    },
    {
      binhLuan:
        'Các cảnh đánh đấm mà đầu tư thêm nhiều pha đẹp mắt nữa thì hay hơn',
      taiKhoan: 'Thùy Dương',
      danhGia: 8,
      trangThai: false,
      heart: 3,
    },
  ];
  constructor() {}
}
