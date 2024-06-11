export default function AstrolabeDisplay({ astrolabe }) {
  return (
    <div>
      <h2>Astrolabe Details</h2>
      <p>Gender: {astrolabe.gender}</p>
      <p>Solar Date: {astrolabe.solarDate}</p>
      <p>Lunar Date: {astrolabe.lunarDate}</p>
      <p>Chinese Date: {astrolabe.chineseDate}</p>
      <p>
        Time: {astrolabe.time} ({astrolabe.timeRange})
      </p>
      <p>
        Sign: {astrolabe.sign}, Zodiac: {astrolabe.zodiac}
      </p>
      <p>
        Earthly Branch of Body Palace: {astrolabe.earthlyBranchOfBodyPalace}
      </p>
      <p>
        Earthly Branch of Soul Palace: {astrolabe.earthlyBranchOfSoulPalace}
      </p>
      <div>
        <h3>Palaces</h3>
        {astrolabe.palaces.map((palace, index) => (
          <div key={index}>
            <p>Name: {palace.name}</p>
            <p>
              Heavenly Stem: {palace.heavenlyStem}, Earthly Branch:{" "}
              {palace.earthlyBranch}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
