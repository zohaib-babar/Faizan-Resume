import { useState, useEffect, } from "react";

const logoImage = "https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/623423638_2061621434788822_3718524742459508201_n.jpg?ccb=11-4&oh=01_Q5Aa4gHxUw0ZmtobEQ0yazZeB-uuxSiQoVIbauga-TOukK17_g&oe=6A0BC347&_nc_sid=5e03e0&_nc_cat=105";

const skills = [
  { name: "Graphics Designing", level: 88, icon: "🎨" },
  { name: "Social Media Marketing", level: 82, icon: "📱" },
];

const education = [
  {
    degree: "BS Information Technology",
    institution: "Government College University Faisalabad (GCUF)",
    year: "2024 – 2028",
    icon: "🎓",
    color: "#00f5d4",
  },
  {
    degree: "Intermediate (FSc Pre-Engineering)",
    institution: "Punjab College",
    year: "2022 – 2024",
    icon: "📘",
    color: "#f72585",
  },
  {
    degree: "Matriculation",
    institution: "New Affaq High School",
    year: "2020 – 2022",
    icon: "🏫",
    color: "#ffd60a",
  },
];

function AnimatedBar({ level, color, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(t);
  }, [level, delay]);
  return (
    <div style={{ background: "#1a1a2e", borderRadius: 99, height: 8, overflow: "hidden", marginTop: 6 }}>
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${color}, #fff2)`,
          borderRadius: 99,
          transition: "width 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: `0 0 12px ${color}99`,
        }}
      />
    </div>
  );
}

function FloatingParticle({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        opacity: 0.18,
        animation: "float 6s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

// export default function Resume() {
//   const [visible, setVisible] = useState(false);
//   // const [activeSection, setActiveSection] = useState(null);
//   // Ye line hatao ya comment karo:
//   const [activeSection, setActiveSection] = useState(null);

export default function Resume() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="resume-root"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d1a 0%, #0a0a23 50%, #0d0d1a 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#e8e8f0",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px #00f5d499, 0 0 40px #00f5d422; }
          50% { box-shadow: 0 0 35px #00f5d4cc, 0 0 70px #00f5d455; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 20px 50px #00f5d422;
        }
        .skill-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 40px #f7258522;
        }
        .contact-btn:hover {
          background: linear-gradient(135deg, #00f5d4, #0090ff) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px #00f5d455 !important;
        }
        @media (max-width: 860px) {
          .main-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-divider {
            width: 90% !important;
          }
        }
        @media (max-width: 620px) {
          .resume-root {
            padding: 28px 14px !important;
          }
          .avatar-ring {
            width: 88px !important;
            height: 88px !important;
          }
          .avatar-inner {
            width: 100% !important;
            height: 100% !important;
          }
          .contact-btn {
            padding: 8px 14px !important;
            font-size: 12px !important;
          }
          .card-hover,
          .skill-card {
            padding: 14px 16px !important;
          }
          .footer-divider {
            width: 80% !important;
          }
        }
      `}</style>

      {/* Background particles */}
      <FloatingParticle style={{ width: 300, height: 300, background: "radial-gradient(#00f5d4, transparent)", top: -80, left: -80, animationDelay: "0s" }} />
      <FloatingParticle style={{ width: 200, height: 200, background: "radial-gradient(#f72585, transparent)", bottom: 100, right: -40, animationDelay: "2s" }} />
      <FloatingParticle style={{ width: 150, height: 150, background: "radial-gradient(#ffd60a, transparent)", top: "40%", right: "10%", animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px", zIndex: 0,
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 50,
            opacity: visible ? 1 : 0,
            animation: visible ? "slide-in-up 0.9s ease forwards" : "none",
          }}
        >
          {/* Avatar ring */}
          <div style={{ position: "relative", display: "inline-block", marginBottom: 24 }}>
            <div className="avatar-ring" style={{
              width: 110, height: 110, borderRadius: "50%",
              background: "linear-gradient(135deg, #00f5d4, #f72585, #ffd60a)",
              padding: 3,
              display: "inline-block",
            }}>
              <div className="avatar-inner" style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "#0d0d1a", display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                <img
                  src={logoImage}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Ripple */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: "50%",
              border: "2px solid #00f5d4", animation: "ripple 2s ease-out infinite",
            }} />
          </div>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(28px, 6vw, 52px)",
            fontWeight: 900,
            margin: "0 0 8px",
            background: "linear-gradient(90deg, #00f5d4, #ffffff, #f72585, #ffd60a, #00f5d4)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
          }}>
            FAIZAN JAVED
          </h1>

          <p style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: 15,
            color: "#00f5d4",
            letterSpacing: 6,
            textTransform: "uppercase",
            margin: "0 0 20px",
          }}>
            IT Student &amp; Creative Designer
            <span style={{ animation: "blink 1s infinite", marginLeft: 6 }}>▮</span>
          </p>

          {/* Contact chips */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: "📧", label: "wattoofaizan710@gmail.com" },
              { icon: "📞", label: "0321-3677388" },
              { icon: "📍", label: "Faisalabad, Pakistan" },
            ].map((c, i) => (
              <div key={i} className="contact-btn" style={{
                background: "rgba(0,245,212,0.07)",
                border: "1px solid rgba(0,245,212,0.25)",
                borderRadius: 99,
                padding: "8px 18px",
                fontSize: 13,
                display: "flex", alignItems: "center", gap: 7,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Exo 2', sans-serif",
              }}>
                <span>{c.icon}</span>
                <span style={{ color: "#c8f8f0" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* ── EDUCATION ── */}
          <div style={{
            gridColumn: "1 / -1",
            opacity: visible ? 1 : 0,
            animation: visible ? "slide-in-left 1s 0.3s ease both" : "none",
          }}>
            <SectionTitle title="Education" icon="🎓" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {education.map((edu, i) => (
                <div key={i} className="card-hover" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${edu.color}33`,
                  borderLeft: `4px solid ${edu.color}`,
                  borderRadius: 14,
                  padding: "18px 22px",
                  display: "flex", alignItems: "center", gap: 18,
                  animation: visible ? `slide-in-up ${0.6 + i * 0.15}s ease both` : "none",
                  opacity: visible ? 1 : 0,
                  cursor: "default",
                }}>
                  <div style={{
                    fontSize: 28, width: 52, height: 52, borderRadius: 12,
                    background: `${edu.color}18`, display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                    boxShadow: `0 0 20px ${edu.color}44`,
                  }}>
                    {edu.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 600, fontSize: 15, color: edu.color, marginBottom: 3,
                    }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: 13, color: "#9999bb", fontFamily: "'Exo 2', sans-serif" }}>
                      {edu.institution}
                    </div>
                  </div>
                  <div style={{
                    background: `${edu.color}18`,
                    border: `1px solid ${edu.color}55`,
                    borderRadius: 8, padding: "4px 12px",
                    fontSize: 12, color: edu.color,
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: 1, flexShrink: 0,
                  }}>
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SKILLS ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "slide-in-left 1s 0.5s ease both" : "none",
          }}>
            <SectionTitle title="Skills" icon="⚡" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {skills.map((skill, i) => (
                <div key={i} className="skill-card card-hover" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,245,212,0.15)",
                  borderRadius: 14, padding: "16px 20px",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{skill.icon}</span>
                      <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 14, fontWeight: 600 }}>
                        {skill.name}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: 13, color: "#00f5d4",
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <AnimatedBar level={skill.level} color="#00f5d4" delay={800 + i * 200} />
                </div>
              ))}
            </div>
          </div>

          {/* ── ABOUT / PROFILE ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "slide-in-right 1s 0.5s ease both" : "none",
          }}>
            <SectionTitle title="Profile" icon="🧠" />
            <div style={{
              background: "rgba(247,37,133,0.05)",
              border: "1px solid rgba(247,37,133,0.2)",
              borderRadius: 14, padding: "22px",
              fontFamily: "'Exo 2', sans-serif",
              lineHeight: 1.8, fontSize: 14, color: "#c8c8e8",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}>
              <p style={{ margin: 0 }}>
                🚀 A passionate and driven <strong style={{ color: "#00f5d4" }}>IT student</strong> at GCUF
                Faisalabad, combining academic excellence with creative skills in{" "}
                <strong style={{ color: "#f72585" }}>Graphics Design</strong> and{" "}
                <strong style={{ color: "#ffd60a" }}>Social Media Marketing</strong>.
              </p>
              <p style={{ margin: "12px 0 0" }}>
                💡 Eager to bring innovative digital solutions and visual storytelling to real-world challenges.
              </p>
            </div>

            {/* Current status badge */}
            <div style={{
              marginTop: 16,
              background: "rgba(0,245,212,0.07)",
              border: "1px solid rgba(0,245,212,0.3)",
              borderRadius: 12, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#00f5d4",
                boxShadow: "0 0 10px #00f5d4",
                animation: "blink 1.5s ease infinite",
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: 12, color: "#00f5d4", fontFamily: "'Orbitron', sans-serif", letterSpacing: 1 }}>
                  CURRENTLY
                </div>
                <div style={{ fontSize: 13, color: "#c8f8f0", fontFamily: "'Exo 2', sans-serif", marginTop: 2 }}>
                  Pursuing BS-IT at GCUF (2024–2028)
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── FOOTER ── */}
        <div style={{
          textAlign: "center", marginTop: 50,
          opacity: visible ? 1 : 0,
          animation: visible ? "slide-in-up 1s 1s ease both" : "none",
        }}>
          <div className="footer-divider" style={{
            display: "inline-block",
            background: "linear-gradient(90deg, transparent, rgba(0,245,212,0.2), transparent)",
            height: 1, width: 300, margin: "0 auto 16px",
          }} />
          <p style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11, letterSpacing: 4,
            color: "rgba(0,245,212,0.5)", textTransform: "uppercase",
          }}>
            Faizan Javed · 2025 · Faisalabad, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, icon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 15,
        fontWeight: 700,
        color: "#00f5d4",
        letterSpacing: 3,
        textTransform: "uppercase",
        margin: 0,
      }}>
        {title}
      </h2>
      <div style={{
        flex: 1, height: 1,
        background: "linear-gradient(90deg, rgba(0,245,212,0.5), transparent)",
        marginLeft: 8,
      }} />
    </div>
  );
}
