import Nav from "./Nav.jsx";
import Card from "../components/Card.jsx";
import Members from "../components/Members.jsx";
import Partnair from "../components/Partenair.jsx";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div id="landing">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <img src="/lct-square.svg" className="logo" />
          </motion.div>
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
            <Card
              title="🌍 Histoire de l'équipe"
              body="Rencontrez notre équipe dévouée, fusionnant l'expertise de
                leaders en blockchain, journalisme et technologie. Chacun de
                nous est animé par la passion de repousser les limites,
                propulsant LiberaCatena vers l'avant-garde de l'innovation."
            />
            <Card
              title="📕 Mission Impactantes"
              body="Plongez dans notre vision audacieuse de créer un monde où chaque
                histoire peut être partagée sans crainte. La mission de
                LiberaCatena est de construire une plateforme décentralisée,
                propice à la vérité, la diversité et la liberté d'expression,
                redéfinissant ainsi le journalisme pour les générations à venir."
            />
            <Card
              title="💪 Rejoignez la révolution"
              body="Explorez notre Livre Blanc pour une plongée approfondie dans les
                détails techniques et économiques de LiberaCatena. Découvrez
                comment nous révolutionnons la manière dont l'information est
                créée, partagée et préservée dans notre écosystème blockchain
                unique."
            />
          </div>
        </div>
        <div>
          <h2>Notre équipe</h2>
          <div className="container">
            <Members
              imgName="ryan"
              firstName="Ryan"
              description="CEO + Front-end Developer"
            />
            <Members
              imgName="zhuoxing"
              firstName="Zhuoxing"
              description="Blockchain Developer"
            />
            <Members
              imgName="reda"
              firstName="Reda"
              description="Blockchain Developer"
            />

            <Members
              imgName="rania"
              firstName="Rania"
              description="Backend Developer"
            />
          </div>
        </div>
        <div>
          <h2>Partenariats</h2>
          <div className="container">
            <Partnair file="opensource.png" title="Open Source Initiative" />
            <Partnair file="amnesty.jpeg" title="Amnesty International" />
            <Partnair file="fpf.jpeg" title="Freedom of the Press Foundation" />
          </div>
        </div>
      </div>
    </div>
  );
}
