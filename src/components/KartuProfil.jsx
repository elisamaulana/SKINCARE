export default function KartuProfil({ nama, peran, tahun, aktif }) {
  return (
    <article
      className="kartu"
      style={{
        textAlign: "center",
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <h3>{nama}</h3>

      <p>
        {peran} - angkatan {tahun}
      </p>

      {aktif ? (
        <span
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "6px 12px",
            borderRadius: "20px",
          }}
        >
          Aktif
        </span>
      ) : (
        <span
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "6px 12px",
            borderRadius: "20px",
          }}
        >
          Tidak aktif
        </span>
      )}
    </article>
  );
}
