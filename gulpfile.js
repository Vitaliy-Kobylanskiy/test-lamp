import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins,

}

// Импорт общих плагинов 
import { plugins } from "./gulp/config/plugins.js";

// Задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const fonst = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonst, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export { dev };
export { build };
export { deployZip };

// Сценарий
gulp.task('default', dev);