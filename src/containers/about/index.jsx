// About.js
import React from "react";
import './styles.scss';
const profilePictureUrl = 'https://i.pinimg.com/originals/05/96/bd/0596bdb89b60fe771acd2f5972a9d3e3.jpg';
const About = () => {
  return (
    <div className="about">
      <div className="about__content">
       <img src={profilePictureUrl} alt="Profil" className="about__profile-picture" />
        <h2 className="about__title">Profil Saya</h2>
        <div className="about__info">
          <p><strong>Nama:</strong> Firman Maulana</p>
          <p><strong>Alamat:</strong> Jl. CBB No. 123, Kota Klatakan</p>
          <p><strong>Umur:</strong> 18 tahun</p>
          <p><strong>Email:</strong> firman@uhy.com</p>
          <p><strong>Nomor HP:</strong> 0812-3456-7890</p>
          {/* Tambahan informasi pribadi lainnya bisa ditambahkan di sini */}
        </div>
        <p className="about__description">
          Saya adalah seorang siswa yang bersemangat dalam belajar dan memiliki
          minat dalam pengembangan perangkat lunak. Dengan pengetahuan di bidang
          rekayasa perangkat lunak, saya berusaha untuk terus mengembangkan
          kemampuan dan kontribusi saya dalam proyek-proyek yang menantang.
        </p>
      </div>
    </div>
  );
};

export default About;
