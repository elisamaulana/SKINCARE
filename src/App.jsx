import KartuProfil from "./components/KartuProfil.jsx";

export default function App() {
  const daftarMahasiswa = [
    {
      nama: "Elisa",
      peran: "Mahasiswa Informatika",
      tahun: 2024,
      aktif: true,
    },
    {
      nama: "Bela",
      peran: "Mahasiswa Informatika",
      tahun: 2024,
      aktif: true,
    },
    {
      nama: "Diya",
      peran: "Mahasiswa Informatika",
      tahun: 2025,
      aktif: false,
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f0ff",
        fontFamily: "Arial, sans-serif",
        padding: "30px 20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#6c4ab6" }}>
        Profil Mahasiswa
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {daftarMahasiswa.map((mahasiswa) => (
          <KartuProfil
            key={mahasiswa.nama}
            nama={mahasiswa.nama}
            peran={mahasiswa.peran}
            tahun={mahasiswa.tahun}
            aktif={mahasiswa.aktif}
          />
        ))}
      </div>
    </main>
  );
}