import {getStats} from "./stats";
import {getHeader} from "./header";

export const getGame = (game, content, {showState} = {showState: true}) => {
  return `${getHeader(game, {showState})}
  <section class="game">
    ${content}
    ${getStats(game.stats)}
  </section>`;
};
