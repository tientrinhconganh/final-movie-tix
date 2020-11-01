export interface TheaterSystem {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: TheaterList[];
}

export interface TheaterList {
    maRap: number;
    tenRap: string;
}