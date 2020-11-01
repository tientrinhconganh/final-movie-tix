import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  partnerChunks = [
    [
      {title: 'CGV', brandLink: 'https://www.cgv.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/cgv.png'},
      {title: 'BHD', brandLink: 'http://bhdstar.vn', imgLink: 'https://tix.vn/app/assets/img/icons/bhd.png'},
      {title: 'Galaxy', brandLink: 'http://galaxycine.vn', imgLink: 'https://tix.vn/app/assets/img/icons/galaxycine.png'},
      {title: 'Cinestar', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/cinestar.png'},
      {title: 'Lotte Cinema', brandLink: 'http://lottecinemavn.com', imgLink: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'},
    ],
    [
      {title: 'Mega', brandLink: 'https://www.megagscinemas.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/megags.png'},
      {title: 'Beta', brandLink: 'https://www.betacineplex.vn/home.htm', imgLink: 'https://tix.vn/app/assets/img/icons/bt.jpg'},
      {title: 'DongDa', brandLink: 'http://ddcinema.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/dongdacinema.png'},
      {title: 'Touch', brandLink: 'https://touchcinema.com/', imgLink: 'https://tix.vn/app/assets/img/icons/TOUCH.png'},
      {title: 'Cinemax', brandLink: 'https://cinemaxvn.com/', imgLink: 'https://tix.vn/app/assets/img/icons/cnx.jpg'},
    ],
    [
      {title: 'Starlight', brandLink: 'https://starlight.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/STARLIGHT.png'},
      {title: 'Dcine', brandLink: 'https://www.dcine.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/dcine.png'},
      {title: 'Zalo', brandLink: 'https://zalopay.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/zalopay_icon.png'},
      {title: 'Payoo', brandLink: 'https://www.payoo.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/payoo.jpg'},
      {title: 'VCB', brandLink: 'https://portal.vietcombank.com.vn/Pages/Home.aspx', imgLink: 'https://tix.vn/app/assets/img/icons/VCB.png'},
    ],
    [
      {title: 'Agribank', brandLink: 'https://www.agribank.com.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/AGRIBANK.png'},
      {title: 'Vietinbank', brandLink: 'https://www.vietinbank.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/VIETTINBANK.png'},
      {title: 'Indovinabank', brandLink: 'https://www.indovinabank.com.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/IVB.png'},
      {title: 'TVB', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/123go.png'},
      {title: 'Laban', brandLink: 'https://laban.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/laban.png'},
    ],
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
