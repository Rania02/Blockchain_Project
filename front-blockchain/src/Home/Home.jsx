import { motion } from "framer-motion";
import Nav from "./Nav.jsx";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div id="landing">
          <div>
            <h1>Libérez la vérité avec LiberaCatena</h1>
          </div>
          <div>
            <p>
              Explorez une révolution dans le journalisme avec LiberaCatena, une
              crypto-monnaie et une plateforme décentralisée propulsées par la
              blockchain. Notre mission est de briser les chaînes de la censure,
              et les remplacer par les chaînes sécurisantes de la blockchain,
              offrant aux journalistes un espace sûr et transparent pour
              partager la vérité sans compromis.
            </p>
          </div>
          <a href="https://ryandanion.notion.site/LiberaCatena-Livre-Blanc-ae395e606a964b11b2a2c47ab9d21b79?pvs=74">
            <button>Livre Blanc</button>
          </a>
        </div>
        <div>
          <h2>Notre vision</h2>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{
                borderRadius: ["1%", "10%"],
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="card"
            >
              <h3>🌍 Histoire de l'équipe</h3>
              <p>
                Rencontrez notre équipe dévouée, fusionnant l'expertise de
                leaders en blockchain, journalisme et technologie. Chacun de
                nous est animé par la passion de repousser les limites,
                propulsant LiberaCatena vers l'avant-garde de l'innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{
                borderRadius: ["1%", "10%"],
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="card"
            >
              <h3>📕 Mission Impactantes</h3>
              <p>
                Plongez dans notre vision audacieuse de créer un monde où chaque
                histoire peut être partagée sans crainte. La mission de
                LiberaCatena est de construire une plateforme décentralisée,
                propice à la vérité, la diversité et la liberté d'expression,
                redéfinissant ainsi le journalisme pour les générations à venir.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{
                borderRadius: ["1%", "10%"],
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="card"
            >
              <h3>💪 Rejoignez la révolution</h3>
              <p>
                Explorez notre Livre Blanc pour une plongée approfondie dans les
                détails techniques et économiques de LiberaCatena. Découvrez
                comment nous révolutionnons la manière dont l'information est
                créée, partagée et préservée dans notre écosystème blockchain
                unique.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <h2>Partenariats</h2>
        </div>
      </div>
    </div>
  );
}
