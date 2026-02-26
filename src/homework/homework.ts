import { Hero } from "../classes/Hero";

export const homework = (): void => {
  const ironman: Hero = new Hero("Ironman", 1, 55);

  console.log(ironman.power);
};
