import React from 'react';
import './PotentialLineups.css';

const chelseaLineup = {
  formation: "3-4-3",
  players: [
    // Defenders
    { id: 0, name: "Kepa Arrizabalaga", position: "GK", avatar: 'https://e0.365dm.com/19/01/2048x1152/skysports-rafael-nadal-novak-djokovic_4556818.jpg?20190125124546' },
    { id: 1, name: "Thiago Silva", position: "CB", avatar: 'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2020/07/26/2856040-58866808-2560-1440.jpg' },
    { id: 2, name: "Antonio Rudiger", position: "CB", avatar: "antonio_rudiger.png" },
    { id: 3, name: "Cesar Azpilicueta", position: "CB", avatar: "cesar_azpilicueta.png" },
    // Midfielders
    { id: 4, name: "N'Golo Kante", position: "CM", avatar: "ngolo_kante.png" },
    { id: 5, name: "Jorginho", position: "CM", avatar: "jorginho.png" },
    { id: 6, name: "Mason Mount", position: "AM", avatar: "mason_mount.png" },
    { id: 7, name: "Mateo Kovacic", position: "CM", avatar: "mateo_kovacic.png" },
    // Forwards
    { id: 8, name: "Kai Havertz", position: "FW", avatar: "kai_havertz.png" },
    { id: 9, name: "Romelu Lukaku", position: "FW", avatar: "romelu_lukaku.png" },
    { id: 10, name: "Callum Hudson-Odoi", position: "FW", avatar: "callum_hudson_odoi.png" },
  ]
};

const arsenalLineup = {
  formation: "4-4-3",
  players: [
    // Defenders
    { id: 11, name: "Bernd Leno", position: "GK", avatar: "thiago_silva.png" },
    { id: 12, name: "Ben White", position: "CB", avatar: "ben_white.png" },
    { id: 13, name: "Gabriel", position: "CB", avatar: "gabriel.png" },
    { id: 14, name: "Takehiro Tomiyasu", position: "RB", avatar: "takehiro_tomiyasu.png" },
    { id: 15, name: "Kieran Tierney", position: "LB", avatar: "kieran_tierney.png" },
    // Midfielders
    { id: 16, name: "Granit Xhaka", position: "CM", avatar: "granit_xhaka.png" },
    { id: 17, name: "Martin Odegaard", position: "AM", avatar: "martin_odegaard.png" },
    { id: 18, name: "Bukayo Saka", position: "RM", avatar: "bukayo_saka.png" },
    { id: 19, name: "Emile Smith Rowe", position: "LM", avatar: "emile_smith_rowe.png" },
    // Forwards
    { id: 20, name: "Alexandre Lacazette", position: "FW", avatar: "alexandre_lacazette.png" },
    { id: 21, name: "Olivier Giroud", position: "FW", avatar: "alexandre_lacazette.png" },

  ]
};

const PotentialLineups = () => {
  return (
    <div className="potential-lineups">
      <h2>Potential Lineups</h2>
      <div className="team-lineups">
        <TeamLineup team="Chelsea" lineup={chelseaLineup} />
        <TeamLineup team="Arsenal" lineup={arsenalLineup} />
      </div>
    </div>
  );
};

const TeamLineup = ({ team, lineup }) => {
  return (
    <div className={`team-lineup ${team.toLowerCase()}`}>
      <h3>{team} ({lineup.formation})</h3>
      <div className="formation">
        {lineup.players.map(player => (
          <div key={player.id} className={`player ${player.position.toLowerCase()}`}>
            {/* Note: Ensure you have the avatars in the specified path */}
            <img src={`/path/to/avatars/${player.avatar}`} alt={player.name} />
            <span>{player.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotentialLineups;
