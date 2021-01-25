import { Palette } from "styles/Palette/Palette";

const rankStyle = (rank: string): string => {
  const { bronze, silver, gold, main } = Palette;

  switch (rank) {
    case "B":
      return bronze;

    case "S":
      return silver;

    case "G":
      return gold;

    default:
      return main;
  }
};

export default rankStyle;