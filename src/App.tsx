import { useState, useEffect } from "react"

const WEDDING_DATE = new Date("2026-11-28T09:00:00")

const LOVE_STORY = [
  {
    year: "2019",
    title: "Awal Pertemuan",
    desc: "Sebuah kebetulan yang tak terduga mempertemukan kami di sebuah acara yang penuh kehangatan. Satu senyum, satu sapaan — dan dunia terasa berbeda.",
  },
  {
    year: "2020",
    title: "Persahabatan yang Tumbuh",
    desc: "Hari demi hari, cerita demi cerita, kami saling mengenal lebih dalam. Persahabatan itu perlahan berubah menjadi sesuatu yang jauh lebih bermakna.",
  },
  {
    year: "2022",
    title: "Jatuh Cinta",
    desc: "Di tepi pantai saat senja, Badai menggenggam tangan Distra dan berkata apa yang sudah lama tersimpan di hatinya. Sejak itu, tidak ada yang lebih indah dari bersama.",
  },
  {
    year: "2024",
    title: "Lamaran",
    desc: "Dengan penuh rasa cinta dan keberanian, Badai berlutut dan bertanya — dan jawaban Distra mengubah segalanya menjadi sempurna.",
  },
  {
    year: "2026",
    title: "Menuju Altar",
    desc: "Kini kami siap melangkah bersama menuju babak baru kehidupan, dipenuhi doa dan cinta dari orang-orang tercinta.",
  },
]

const GALLERY = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format", alt: "Momen bersama", span: "col-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&auto=format", alt: "Cincin pernikahan", span: "" },
  { id: 3, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop&auto=format", alt: "Bunga pernikahan", span: "" },
  { id: 4, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=400&fit=crop&auto=format", alt: "Momen romantis", span: "" },
  { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop&auto=format", alt: "Saat bahagia", span: "" },
  { id: 6, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=400&fit=crop&auto=format", alt: "Rangkaian bunga", span: "col-span-2" },
]

const INITIAL_WISHES = [
  { name: "Rini Kusuma", date: "8 September 2026", message: "Semoga pernikahan kalian dipenuhi kebahagiaan dan keberkahan selamanya. Langgeng ya! 💙" },
  { name: "Ardi Pratama", date: "9 September 2026", message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
  { name: "Sinta & Dewa", date: "10 September 2026", message: "Bahagia sekali mendengar kabar ini! Wish you both a lifetime of love and happiness." },
]

function OrnamentDivider({ color = "champagne" }: { color?: string }) {
  const stroke = color === "white" ? "rgba(255,255,255,0.4)" : "rgba(201,169,110,0.6)"
  const fill = color === "white" ? "rgba(255,255,255,0.5)" : "rgba(201,169,110,0.7)"
  return (
    <div className="ornament-line" style={{ margin: "20px auto", maxWidth: 320 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="2.5" fill={fill} />
        <circle cx="10" cy="4" r="1.5" fill={fill} opacity="0.5" />
        <circle cx="10" cy="16" r="1.5" fill={fill} opacity="0.5" />
        <circle cx="4" cy="10" r="1.5" fill={fill} opacity="0.5" />
        <circle cx="16" cy="10" r="1.5" fill={fill} opacity="0.5" />
        <circle cx="5.8" cy="5.8" r="1" fill={fill} opacity="0.3" />
        <circle cx="14.2" cy="14.2" r="1" fill={fill} opacity="0.3" />
        <circle cx="14.2" cy="5.8" r="1" fill={fill} opacity="0.3" />
        <circle cx="5.8" cy="14.2" r="1" fill={fill} opacity="0.3" />
      </svg>
      <div style={{ width: 6, height: 6, border: `1px solid ${stroke}`, transform: "rotate(45deg)" }} />
    </div>
  )
}

function CornerOrnament({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: 60,
    height: 60,
    ...(pos === "tl" ? { top: 12, left: 12 } : {}),
    ...(pos === "tr" ? { top: 12, right: 12, transform: "scaleX(-1)" } : {}),
    ...(pos === "bl" ? { bottom: 12, left: 12, transform: "scaleY(-1)" } : {}),
    ...(pos === "br" ? { bottom: 12, right: 12, transform: "scale(-1)" } : {}),
  }
  return (
    <svg style={style} viewBox="0 0 60 60" fill="none">
      <path d="M4 56 C4 4 56 4 56 4" stroke="rgba(201,169,110,0.45)" strokeWidth="0.8" />
      <path d="M4 56 C4 30 20 20 20 4" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
      <path d="M4 56 Q18 38 32 30 Q44 22 56 4" stroke="rgba(201,169,110,0.15)" strokeWidth="0.4" />
      <circle cx="4" cy="56" r="2" fill="rgba(201,169,110,0.5)" />
      <circle cx="56" cy="4" r="2" fill="rgba(201,169,110,0.5)" />
      <ellipse cx="16" cy="42" rx="5" ry="3" fill="rgba(201,169,110,0.12)" transform="rotate(-40 16 42)" />
      <ellipse cx="36" cy="22" rx="5" ry="3" fill="rgba(201,169,110,0.12)" transform="rotate(-40 36 22)" />
    </svg>
  )
}

function SectionHeader({ subtitle, title, light = false }: { subtitle: string; title: string; light?: boolean }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <p style={{
        fontFamily: "'Raleway', sans-serif",
        fontSize: 12,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: light ? "rgba(201,169,110,0.8)" : "var(--champagne)",
        marginBottom: 12,
        fontWeight: 500,
      }}>
        {subtitle}
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 600,
        color: light ? "white" : "var(--navy)",
        lineHeight: 1.25,
      }}>
        {title}
      </h2>
      <OrnamentDivider color={light ? "white" : "champagne"} />
    </div>
  )
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="cover-bg" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative corner ornaments */}
      <CornerOrnament pos="tl" />
      <CornerOrnament pos="tr" />
      <CornerOrnament pos="bl" />
      <CornerOrnament pos="br" />

      {/* Outer frame */}
      <div style={{
        position: "absolute",
        inset: "20px",
        border: "1px solid rgba(201,169,110,0.2)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        inset: "28px",
        border: "1px solid rgba(201,169,110,0.08)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        maxWidth: 520,
        width: "100%",
      }}>
        {/* Pre-heading */}
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(201,169,110,0.75)",
          marginBottom: 32,
          fontWeight: 500,
        }}>
          Undangan Pernikahan
        </p>

        {/* Decorative line */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, justifyContent: "center" }}>
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.5))" }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5Z" fill="rgba(201,169,110,0.6)" />
          </svg>
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, rgba(201,169,110,0.5), transparent)" }} />
        </div>

        {/* Main names */}
        <h1 style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(64px, 16vw, 96px)",
          color: "white",
          lineHeight: 1.1,
          marginBottom: 0,
          textShadow: "0 2px 30px rgba(201,169,110,0.2)",
        }}>
          Badai
        </h1>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(13px, 2.5vw, 16px)",
          color: "rgba(201,169,110,0.7)",
          letterSpacing: "0.25em",
          margin: "4px 0",
          fontStyle: "italic",
        }}>
          &amp;
        </div>
        <h1 style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(64px, 16vw, 96px)",
          color: "white",
          lineHeight: 1.1,
          marginBottom: 28,
          textShadow: "0 2px 30px rgba(201,169,110,0.2)",
        }}>
          Distra
        </h1>

        {/* Gold divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 28 }}>
          <div style={{ flex: 1, maxWidth: 60, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.6))" }} />
          <div style={{ width: 5, height: 5, border: "1px solid rgba(201,169,110,0.6)", transform: "rotate(45deg)" }} />
          <div style={{ width: 5, height: 5, border: "1px solid rgba(201,169,110,0.6)", transform: "rotate(45deg)" }} />
          <div style={{ width: 5, height: 5, border: "1px solid rgba(201,169,110,0.6)", transform: "rotate(45deg)" }} />
          <div style={{ flex: 1, maxWidth: 60, height: "1px", background: "linear-gradient(90deg, rgba(201,169,110,0.6), transparent)" }} />
        </div>

        {/* Date */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(14px, 2.5vw, 17px)",
          color: "rgba(200,218,234,0.9)",
          letterSpacing: "0.1em",
          marginBottom: 8,
          fontStyle: "italic",
        }}>
          Sabtu, 28 November 2026
        </p>

        {/* Romantic phrase */}
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "clamp(11px, 2vw, 13px)",
          color: "rgba(200,218,234,0.55)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 48,
          fontWeight: 300,
        }}>
          "Dua jiwa, satu perjalanan abadi"
        </p>

        {/* CTA Button */}
        <button className="btn-champagne" onClick={onOpen} style={{ zIndex: 1, position: "relative" }}>
          Buka Undangan
        </button>

        {/* Bottom scroll hint */}
        <p style={{
          marginTop: 48,
          fontFamily: "'Raleway', sans-serif",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(200,218,234,0.3)",
        }}>
          Geser ke bawah untuk melihat undangan
        </p>
      </div>
    </div>
  )
}

function WelcomeSection() {
  return (
    <section style={{ background: "var(--cream)", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--champagne)",
          marginBottom: 20,
          fontWeight: 500,
        }}>
          Bismillahirrahmanirrahim
        </p>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(14px, 2.5vw, 18px)",
          color: "var(--text-mid)",
          lineHeight: 1.9,
          fontStyle: "italic",
          marginBottom: 32,
        }}>
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya..."
        </p>

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--dusty)",
          marginBottom: 40,
          fontWeight: 400,
        }}>
          — QS. Ar-Rum: 21
        </p>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)", marginBottom: 40 }} />

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "clamp(14px, 2.2vw, 16px)",
          color: "var(--text-mid)",
          lineHeight: 1.85,
          fontWeight: 300,
        }}>
          Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Bapak / Ibu / Saudara / i untuk hadir dan memberikan doa restu dalam momen sakral pernikahan kami.
        </p>
      </div>
    </section>
  )
}

function ProfileSection() {
  const profiles = [
    {
      role: "Pengantin Wanita",
      name: "Distra Aulia Putri",
      parents: "Putri dari\nBapak Ahmad Sulaiman & Ibu Sari Dewi",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=620&fit=crop&auto=format&q=80",
      ig: "@distra.aulia",
    },
    {
      role: "Pengantin Pria",
      name: "Badai Pratama",
      parents: "Putra dari\nBapak Hendra Wijaya & Ibu Lestari",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=620&fit=crop&auto=format&q=80",
      ig: "@badai.pratama",
    },
  ]

  return (
    <section style={{ background: "var(--ice)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader subtitle="Yang Berbahagia" title="Pengantin" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
        }}>
          {profiles.map((p, i) => (
            <div key={i} className="profile-card" style={{ background: "white" }}>
              <div style={{ position: "relative", paddingTop: "120%", overflow: "hidden", background: "var(--pale-blue)" }}>
                <img
                  src={p.photo}
                  alt={p.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,28,61,0.4) 0%, transparent 50%)",
                }} />
              </div>
              <div style={{ padding: "28px 28px 32px", textAlign: "center" }}>
                <p style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--champagne)",
                  marginBottom: 10,
                  fontWeight: 600,
                }}>
                  {p.role}
                </p>
                <h3 style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: 42,
                  color: "var(--navy)",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}>
                  {p.name}
                </h3>
                <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)", marginBottom: 16 }} />
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 13,
                  color: "var(--text-mid)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  whiteSpace: "pre-line",
                }}>
                  {p.parents}
                </p>
                <p style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "var(--dusty)",
                  letterSpacing: "0.05em",
                }}>
                  {p.ig}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LoveStorySection() {
  return (
    <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionHeader subtitle="Perjalanan Kami" title="Kisah Cinta" />

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(201,169,110,0.3) 10%, rgba(201,169,110,0.3) 90%, transparent)",
            transform: "translateX(-50%)",
          }} />

          {LOVE_STORY.map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 40px 1fr",
              gap: 0,
              marginBottom: 40,
              alignItems: "start",
            }}>
              {i % 2 === 0 ? (
                <>
                  <div style={{ paddingRight: 32, textAlign: "right" }}>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: "var(--champagne)",
                      marginBottom: 6,
                      fontWeight: 600,
                    }}>
                      {item.year}
                    </p>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      color: "var(--navy)",
                      marginBottom: 8,
                      fontWeight: 600,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: 13,
                      color: "var(--text-mid)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
                    <div className="timeline-dot" />
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
                    <div className="timeline-dot" />
                  </div>
                  <div style={{ paddingLeft: 32 }}>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: "var(--champagne)",
                      marginBottom: 6,
                      fontWeight: 600,
                    }}>
                      {item.year}
                    </p>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      color: "var(--navy)",
                      marginBottom: 8,
                      fontWeight: 600,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: 13,
                      color: "var(--text-mid)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventSection() {
  const events = [
    {
      type: "Akad Nikah",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 L16 8 M16 24 L16 28 M4 16 L8 16 M24 16 L28 16" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="8" stroke="rgba(201,169,110,0.7)" strokeWidth="1" fill="none" />
          <circle cx="16" cy="16" r="3" fill="rgba(201,169,110,0.4)" />
        </svg>
      ),
      date: "Sabtu, 28 November 2026",
      time: "09.00 – 11.00 WIB",
      venue: "Masjid Agung Al-Azhar",
      address: "Jl. Sisingamangaraja, Kebayoran Baru\nJakarta Selatan, DKI Jakarta",
    },
    {
      type: "Resepsi Pernikahan",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 26 L26 26" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 26 L10 14 Q16 8 22 14 L22 26" stroke="rgba(201,169,110,0.7)" strokeWidth="1" fill="none" />
          <path d="M13 26 L13 19 L19 19 L19 26" stroke="rgba(201,169,110,0.5)" strokeWidth="1" />
          <path d="M8 14 Q16 4 24 14" stroke="rgba(201,169,110,0.3)" strokeWidth="0.8" fill="none" />
        </svg>
      ),
      date: "Sabtu, 28 November 2026",
      time: "12.00 – 16.00 WIB",
      venue: "Grand Ballroom Hotel Mulia",
      address: "Jl. Asia Afrika No.8, Senayan\nJakarta Pusat, DKI Jakarta",
    },
  ]

  return (
    <section style={{
      background: "linear-gradient(135deg, var(--navy) 0%, var(--midnight) 60%, #0E2045 100%)",
      padding: "80px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader subtitle="Momen Sakral" title="Rangkaian Acara" light />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
        }}>
          {events.map((ev, i) => (
            <div key={i} className="gold-frame" style={{
              padding: "40px 36px",
              textAlign: "center",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}>
              <CornerOrnament pos="tl" />
              <CornerOrnament pos="tr" />
              <CornerOrnament pos="bl" />
              <CornerOrnament pos="br" />

              <div style={{ marginBottom: 20 }}>{ev.icon}</div>

              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--champagne)",
                marginBottom: 12,
                fontWeight: 600,
              }}>
                {ev.type}
              </p>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: "white",
                fontWeight: 600,
                marginBottom: 20,
              }}>
                {ev.venue}
              </h3>

              <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), transparent)", marginBottom: 20 }} />

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 15,
                color: "rgba(200,218,234,0.9)",
                fontStyle: "italic",
                marginBottom: 6,
              }}>
                {ev.date}
              </p>
              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 16,
                color: "var(--champagne)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                marginBottom: 16,
              }}>
                {ev.time}
              </p>
              <p style={{
                fontSize: 13,
                color: "rgba(200,218,234,0.6)",
                lineHeight: 1.7,
                whiteSpace: "pre-line",
              }}>
                {ev.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountdownSection({ countdown }: { countdown: { days: number; hours: number; minutes: number; seconds: number } }) {
  const units = [
    { label: "Hari", value: countdown.days },
    { label: "Jam", value: countdown.hours },
    { label: "Menit", value: countdown.minutes },
    { label: "Detik", value: countdown.seconds },
  ]

  return (
    <section style={{
      background: "var(--ice)",
      padding: "80px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader subtitle="Hitung Mundur" title="Menuju Hari Bahagia" />

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(8px, 2vw, 20px)",
          flexWrap: "wrap",
        }}>
          {units.map((u) => (
            <div key={u.label} className="countdown-box" style={{
              background: "white",
              border: "1px solid rgba(201,169,110,0.25)",
              minWidth: "clamp(70px, 15vw, 110px)",
              boxShadow: "0 4px 20px rgba(11,28,61,0.07)",
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 700,
                color: "var(--navy)",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {String(u.value).padStart(2, "0")}
              </div>
              <div style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--champagne)",
                fontWeight: 600,
              }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          marginTop: 40,
          fontFamily: "'Playfair Display', serif",
          fontSize: 16,
          color: "var(--text-mid)",
          fontStyle: "italic",
        }}>
          Sabtu, 28 November 2026
        </p>
      </div>
    </section>
  )
}

function VenueSection() {
  return (
    <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader subtitle="Lokasi" title="Tempat Acara" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {[
            { name: "Masjid Agung Al-Azhar", address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan", gmaps: "https://maps.google.com" },
            { name: "Grand Ballroom Hotel Mulia", address: "Jl. Asia Afrika No.8, Senayan, Jakarta Pusat", gmaps: "https://maps.google.com" },
          ].map((v, i) => (
            <div key={i} style={{ border: "1px solid var(--pale-blue)", background: "white" }}>
              <div className="map-placeholder" style={{ height: 200 }}>
                <div style={{ textAlign: "center" }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: 8 }}>
                    <circle cx="20" cy="17" r="7" stroke="var(--dusty)" strokeWidth="1.5" fill="none" />
                    <circle cx="20" cy="17" r="2.5" fill="var(--dusty)" />
                    <path d="M20 24 L20 36" stroke="var(--dusty)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 36 L26 36" stroke="var(--pale-blue)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p style={{ fontSize: 12, color: "var(--dusty)", letterSpacing: "0.1em" }}>Peta Lokasi</p>
                </div>
              </div>
              <div style={{ padding: "24px 28px" }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  color: "var(--navy)",
                  fontWeight: 600,
                  marginBottom: 8,
                }}>
                  {v.name}
                </h4>
                <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.65, marginBottom: 16 }}>
                  {v.address}
                </p>
                <a
                  href={v.gmaps}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(201,169,110,0.3)",
                    paddingBottom: 2,
                    fontWeight: 600,
                  }}
                >
                  Buka Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section style={{
      background: "var(--navy)",
      padding: "80px 24px",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader subtitle="Galeri Foto" title="Album Kenangan" light />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "200px",
          gap: 10,
        }}>
          {GALLERY.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => setLightbox(photo.src)}
              style={{
                gridColumn: photo.span ? "span 2" : "span 1",
                background: "var(--midnight)",
                position: "relative",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(11,28,61,0.2)",
                transition: "background 0.3s",
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(6,15,34,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 24,
          }}
        >
          <img
            src={lightbox}
            alt="Gallery"
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              background: "none",
              border: "1px solid rgba(201,169,110,0.4)",
              color: "rgba(201,169,110,0.8)",
              width: 40,
              height: 40,
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}

function RSVPSection() {
  const [form, setForm] = useState({ name: "", attendance: "hadir", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name.trim()) setSubmitted(true)
  }

  return (
    <section style={{
      background: "linear-gradient(160deg, var(--midnight) 0%, #0F2348 50%, var(--navy) 100%)",
      padding: "80px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.05) 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }} />

      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader subtitle="Konfirmasi Kehadiran" title="RSVP" light />

        {submitted ? (
          <div style={{
            textAlign: "center",
            padding: "48px 32px",
            border: "1px solid rgba(201,169,110,0.3)",
            background: "rgba(255,255,255,0.04)",
          }}>
            <div style={{ marginBottom: 16 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="var(--champagne)" strokeWidth="1" fill="none" />
                <path d="M14 24 L20 30 L34 16" stroke="var(--champagne)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 36,
              color: "white",
              marginBottom: 12,
            }}>
              Terima Kasih
            </p>
            <p style={{ fontSize: 14, color: "rgba(200,218,234,0.7)", lineHeight: 1.7 }}>
              Konfirmasi kehadiran Anda telah kami terima.<br />
              Kami sangat menantikan kehadiran Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: "block",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(200,218,234,0.6)",
                marginBottom: 8,
                fontWeight: 500,
              }}>
                Nama Lengkap
              </label>
              <input
                className="rsvp-input"
                type="text"
                placeholder="Masukkan nama Anda"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: "block",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(200,218,234,0.6)",
                marginBottom: 8,
                fontWeight: 500,
              }}>
                Konfirmasi Kehadiran
              </label>
              <select
                className="rsvp-input rsvp-select"
                value={form.attendance}
                onChange={(e) => setForm({ ...form, attendance: e.target.value })}
              >
                <option value="hadir">Insya Allah Hadir</option>
                <option value="tidak">Tidak Dapat Hadir</option>
                <option value="ragu">Mungkin Hadir</option>
              </select>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{
                display: "block",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(200,218,234,0.6)",
                marginBottom: 8,
                fontWeight: 500,
              }}>
                Ucapan & Doa
              </label>
              <textarea
                className="rsvp-input"
                rows={4}
                placeholder="Tuliskan ucapan dan doa Anda untuk kami..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ resize: "none" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn-champagne">
                Kirim Konfirmasi
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function WishesSection() {
  const [wishes, setWishes] = useState(INITIAL_WISHES)
  const [newWish, setNewWish] = useState("")
  const [newName, setNewName] = useState("")

  const addWish = () => {
    if (newName.trim() && newWish.trim()) {
      setWishes([{ name: newName, date: "Baru saja", message: newWish }, ...wishes])
      setNewName("")
      setNewWish("")
    }
  }

  return (
    <section style={{ background: "var(--ice)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionHeader subtitle="Doa & Harapan" title="Ucapan Tamu" />

        {/* Add wish form */}
        <div style={{
          background: "white",
          padding: "28px",
          marginBottom: 32,
          border: "1px solid rgba(201,169,110,0.2)",
          boxShadow: "0 2px 16px rgba(11,28,61,0.06)",
        }}>
          <p style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--champagne)",
            marginBottom: 16,
            fontWeight: 600,
          }}>
            Tinggalkan Ucapan
          </p>
          <input
            type="text"
            placeholder="Nama Anda"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              borderBottom: "1px solid var(--pale-blue)",
              padding: "10px 0",
              marginBottom: 12,
              fontFamily: "'Raleway', sans-serif",
              fontSize: 14,
              color: "var(--navy)",
              outline: "none",
              background: "transparent",
            }}
          />
          <textarea
            placeholder="Tuliskan doa dan ucapan Anda..."
            rows={3}
            value={newWish}
            onChange={(e) => setNewWish(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              borderBottom: "1px solid var(--pale-blue)",
              padding: "10px 0",
              marginBottom: 20,
              fontFamily: "'Raleway', sans-serif",
              fontSize: 14,
              color: "var(--navy)",
              outline: "none",
              background: "transparent",
              resize: "none",
            }}
          />
          <button className="btn-navy" onClick={addWish} style={{ fontSize: 12 }}>
            Kirim Ucapan
          </button>
        </div>

        {/* Wish list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {wishes.map((w, i) => (
            <div key={i} className="wish-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "start" }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  color: "var(--navy)",
                  fontWeight: 600,
                }}>
                  {w.name}
                </span>
                <span style={{ fontSize: 11, color: "var(--dusty)", letterSpacing: "0.05em" }}>
                  {w.date}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.7 }}>
                {w.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GiftSection() {
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const copy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const banks = [
    { bank: "Bank BCA", holder: "Badai Pratama", number: "1234 5678 9012" },
    { bank: "Bank Mandiri", holder: "Distra Aulia Putri", number: "9876 5432 1098" },
  ]

  return (
    <section style={{
      background: "var(--cream)",
      padding: "80px 24px",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionHeader subtitle="Hadiah Pernikahan" title="Wedding Gift" />

        <p style={{
          textAlign: "center",
          fontSize: 14,
          color: "var(--text-mid)",
          lineHeight: 1.8,
          marginBottom: 40,
          fontStyle: "italic",
          fontFamily: "'Playfair Display', serif",
        }}>
          Kehadiran dan doa Anda adalah hadiah terbesar bagi kami. Namun jika Anda ingin memberikan hadiah,
          berikut informasi rekening kami.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            { ...banks[0], copied: copied1, setCopied: setCopied1 },
            { ...banks[1], copied: copied2, setCopied: setCopied2 },
          ].map((b, i) => (
            <div key={i} className="bank-card">
              <p style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--champagne)",
                marginBottom: 8,
                fontWeight: 600,
              }}>
                {b.bank}
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                color: "white",
                fontWeight: 600,
                marginBottom: 4,
              }}>
                {b.holder}
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: "rgba(200,218,234,0.9)",
                letterSpacing: "0.1em",
                marginBottom: 20,
                fontWeight: 500,
              }}>
                {b.number}
              </p>
              <button
                className={`copy-btn ${b.copied ? "copied" : ""}`}
                onClick={() => copy(b.number.replace(/\s/g, ""), b.setCopied)}
              >
                {b.copied ? "✓ Tersalin" : "Salin Nomor"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section style={{
      background: "linear-gradient(160deg, var(--navy) 0%, var(--midnight) 50%, #0A1829 100%)",
      padding: "100px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.05) 1px, transparent 1px)",
        backgroundSize: "35px 35px",
      }} />

      {/* Frame */}
      <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(201,169,110,0.12)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(201,169,110,0.7)",
          marginBottom: 20,
          fontWeight: 500,
        }}>
          Terima Kasih
        </p>

        <h2 style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(52px, 10vw, 72px)",
          color: "white",
          lineHeight: 1.2,
          marginBottom: 28,
        }}>
          Badai & Distra
        </h2>

        <OrnamentDivider color="white" />

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          color: "rgba(200,218,234,0.8)",
          lineHeight: 1.85,
          fontStyle: "italic",
          marginBottom: 32,
        }}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak / Ibu / Saudara / i berkenan hadir dan memberikan doa restu kepada kami.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1 L8.5 5.5 L13 5.5 L9.5 8.5 L10.8 13 L7 10.2 L3.2 13 L4.5 8.5 L1 5.5 L5.5 5.5Z"
                fill="rgba(201,169,110,0.4)"
                stroke="rgba(201,169,110,0.3)"
                strokeWidth="0.5"
              />
            </svg>
          ))}
        </div>

        <p style={{
          fontSize: 13,
          color: "rgba(200,218,234,0.5)",
          letterSpacing: "0.1em",
        }}>
          Sabtu, 28 November 2026 — Jakarta
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      background: "#060F22",
      padding: "32px 24px",
      textAlign: "center",
      borderTop: "1px solid rgba(201,169,110,0.1)",
    }}>
      <p style={{
        fontFamily: "'Great Vibes', cursive",
        fontSize: 28,
        color: "rgba(201,169,110,0.6)",
        marginBottom: 8,
      }}>
        Badai & Distra
      </p>
      <p style={{
        fontSize: 11,
        color: "rgba(200,218,234,0.3)",
        letterSpacing: "0.12em",
      }}>
        © 2026 · Dibuat dengan cinta
      </p>
    </footer>
  )
}

function MusicControl({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button className="music-btn" onClick={onToggle} title={playing ? "Pause musik" : "Putar musik"}>
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="3" y="2" width="4" height="12" rx="1" fill="currentColor" />
          <rect x="9" y="2" width="4" height="12" rx="1" fill="currentColor" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 2 L14 8 L4 14Z" fill="currentColor" />
        </svg>
      )}
    </button>
  )
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        })
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!isOpen) {
    return <Cover onOpen={() => setIsOpen(true)} />
  }

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }}>
      <WelcomeSection />
      <ProfileSection />
      <LoveStorySection />
      <EventSection />
      <CountdownSection countdown={countdown} />
      <VenueSection />
      <GallerySection />
      <RSVPSection />
      <WishesSection />
      <GiftSection />
      <ClosingSection />
      <Footer />
      <MusicControl playing={musicPlaying} onToggle={() => setMusicPlaying(!musicPlaying)} />
    </div>
  )
}
