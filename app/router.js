import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { PlayersController } from "./controllers/PlayersController.js";

export const router = [
  {
    path: '',
    controller: PlayersController,
    view: /*html*/`

    <div class="card">
      <div class="card-body">
        <p>It's Time To Count The Scores</p>
       
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]